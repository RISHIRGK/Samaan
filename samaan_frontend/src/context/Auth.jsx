import { createContext, useState, useEffect, useCallback } from 'react'
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

    let [user, setUser] = useState(() => (localStorage.getItem('user') ? jwtDecode(localStorage.getItem('user')) : null))
    let [authTokens, setAuthTokens] = useState(() => (localStorage.getItem('userAuthToken') ? JSON.parse(localStorage.getItem('userAuthToken')) : null))
    let [loading, setLoading] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const navigate = useNavigate()

    let loginUser = async (e) => {
        e.preventDefault()
        const response = await fetch('https://trakky.in:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: e.target.username.value, password: e.target.password.value })
        });
        if(response.status === 401){
            alert('Invalid Credentials')
            return
        }
        let data = await response.json();
        
        if(data){
            localStorage.setItem('userAuthToken', JSON.stringify(data));
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            setIsAuthenticated(true)
            navigate('/',{replace:true})
        } else {
            alert('Something went wrong while logging in the user!')
        }
    }

    let logoutUser = useCallback(() => {
        // e.preventDefault()
        localStorage.removeItem('userAuthToken')
        setAuthTokens(null)
        setUser(null)
        navigate('/',{replace:true})
        setIsAuthenticated(false)
    },[navigate])

    const updateToken = useCallback(async () => {

        // console.log(authTokens)
        const response = await fetch('https://trakky.in:8000/api/token/refresh/', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({refresh:authTokens?.refresh})
        })
       
        const data = await response.json()
        if (response.status === 200) {
            // console.log(data)
            setAuthTokens({...authTokens, access:data.access})
            setUser(jwtDecode(data.access))
            setIsAuthenticated(true)
            localStorage.setItem('salonVendorAuthTokens',JSON.stringify({...authTokens, access:data.access}))
        } else {
            logoutUser()
        }

        if(loading){
            setLoading(false)
        }
    },[authTokens, loading, logoutUser])

    let contextData = {
        user:user,
        authTokens:authTokens,
        loginUser:loginUser,
        logoutUser:logoutUser,
        isAuthenticated: isAuthenticated,
        // vendor: vendor
    }

    useEffect(()=>{
        const REFRESH_INTERVAL = 1000 * 60 * 15 // 15 minutes
        let interval = setInterval(()=>{
            if(authTokens){
                updateToken()
            }
        }, REFRESH_INTERVAL)
        return () => clearInterval(interval)

    },[authTokens, loading , updateToken])

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}