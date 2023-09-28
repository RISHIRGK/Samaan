import React from 'react'
import  {Routes,Route,Navigate} from 'react-router-dom'
import Main from './Main'
import Signup from './Components/forms/signupform'
const App = () => {
  const [user, setUser] = React.useState(null)
 
  return (
    <div>
       <Routes>
        <Route  path='/' element={
   
            <Main/>
        
       
        
          }  />
        <Route path='/signupuser' element={<Signup/>}  />
        <Route path='/supplier' element={<div>supplier</div>}  />
      </Routes>
    </div>
  )
}

export default App
const Cust = ({children}) => {
  const [user, setUser] = React.useState(null)

  return user?children:<Navigate to="/signupuser" />
  
  
}