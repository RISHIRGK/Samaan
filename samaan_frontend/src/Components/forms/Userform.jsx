import React ,{useState,useContext}from 'react'
import AuthContext from '../../context/Auth'
const Userform = () =>{ 
  const {loginUser,signupuser}=useContext(AuthContext)
  const [loginform, setloginform] = React.useState(false)
  const [forgotpasswordform, setforgotpasswordform] = React.useState(false)
  const [password, setpassword] = React.useState('')
  const [password2, setpassword2] =React.useState('')
  const handlelogin=async(e)=>
  {
    e.preventDefault() 
    const  email=e.target[0].value
    const password=e.target[1].value
    await fetch('https://api-krudra9125-gmailcom.vercel.app/api/login/',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({email:email,password:password})
    }).then(res=>res.json()).then(data=>{
      if(data.status===200)
      {
        console.log(data)
      }
      else{
        alert('EMAIL OR PASSWORD ARE INCORRECT')
      } 
    })

    
  }
  const handlesignup=(e)=>
  {
    
    e.preventDefault()
    const email=e.target[0].value
    const name=e.target[1].value
    const address=e.target[4].value
    if(password===password2)
    {
      fetch('https://api-krudra9125-gmailcom.vercel.app/api/register/',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({email:email,password:password,password2:password,tc:"True",name:name,address:address})
    }).then(res=>res.json()).then(data=>{
      if(data["message"])
      {
        console.log(data)
      }
      else{
        alert('EMAIL aleready exist')
      } 
    })
    }
    else{
      alert('PASSWORD DOES NOT MATCH')
    }

  }
  const handleforgotpassword=async(e)=>
  {
    e.preventDefault()
    const email=e.target[0].value
    await fetch('https://api-krudra9125-gmailcom.vercel.app/api/send-reset-password/',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({email:email})
    }).then(res=>res.json()).then(data=>{
      if(data["errors"])
      {
        console.log(data)
        alert('user not found')
      }
      else{
        console.log(data)
      } 
    })

  }
  return (
    <div className="w-[100vw] h-[100vh] flex flex-row justify-center items-center  ">
      <div className="w-[100%] h-[100%] max-w-screen-2xl max-h-[800px] flex justify-center items-center border border-black ">
      <div className=' hidden md:flex md:w-[50%] h-[100%]   justify-center items-center ' >
      <img className=' h-[80%] w-[80%] object-contain '  src="./login_left.svg" alt="" srcset="" />
     
      </div>
      <div className=' w-[100%] md:w-[50%] h-[100%] flex justify-center items-center flex-col' >
        <div className="w-[22rem] h-[25rem] border border-black flex flex-col rounded-2xl">
          <div className="w-[100%] h-[4rem] flex justify-center items-center transition-all duration-700 ">
          <div className={`w-[50%] h-[4rem] flex justify-center items-center transition-all duration-700 cursor-pointer  ${loginform?"bg-black text-white":"text-black" } rounded-xl   `} onClick={()=>{setloginform(true);setforgotpasswordform(false) }} >

            <h1 className='text-xl font-bold'>Login</h1>
            </div> 
          <div className={`w-[50%] h-[4rem] flex justify-center items-center transition-all duration-700 cursor-pointer ${loginform?" text-black":"bg-black text-white " }  rounded-xl  `} onClick={()=>{setloginform(false)  }} >
            <h1 className='text-xl font-bold'>Create Account</h1>
            </div>
          </div>
          {loginform?<div className="w-[100%] h-[21rem] flex justify-center items-center ">
            <div className="w-[80%] h-[21rem] flex justify-center items-center flex-col ">
              {!forgotpasswordform?(<div>
                <form onSubmit={loginUser} >
              <div className="w-[100%] h-[4rem] flex justify-center items-center ">
                <input className='w-[80%] h-[3rem] border border-black rounded-xl pl-2' type="text" required={true} pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}' placeholder='Email' />
              </div>
              <div className="w-[100%] h-[4rem] flex justify-center items-center ">
                <input className='w-[80%] h-[3rem] border border-black rounded-xl pl-2' type="text" placeholder='Password' required={true}  />
              </div>
              <div onClick={()=>{setforgotpasswordform(true)}} className='flex justify-center cursor-pointer ' >
                <p >Forgot Password?</p>
              </div>
              <div className="w-[100%] h-[4rem] flex justify-center items-center ">
                <button className='w-[80%] h-[3rem] border border-black rounded-xl pl-2 bg-black text-white' >Login</button>
              </div>
              </form>
              </div>):(<div><form onSubmit={handleforgotpassword} >
                <div className="w-[100%] h-[4rem] flex justify-center items-center ">
                <input className='w-[90%] h-[3rem] border border-black rounded-lg pl-2' type="text" placeholder='Enter Your Email'  required={true} pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"  />
              </div>
 
              <div className="w-[100%] h-[4rem] flex justify-center items-center ">
                <button className='w-[90%] h-[3rem] border border-black rounded-lg pl-2 bg-black text-white' >Send</button>
              </div>
              </form>
              </div>)}
            </div>
            </div>:(<div className="w-[100%] h-[21rem] flex justify-center items-center ">
            <div className="w-[80%] h-[21rem] flex justify-center items-center flex-col ">
              <form  onSubmit={signupuser} >
              <div className="w-[100%] h-[3rem] flex justify-center items-center ">
                <input className='w-[80%] h-[2.5rem] border border-black rounded-lg pl-2' type="email" placeholder='Email' required={true} pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}' />
                </div>
              <div className="w-[100%] h-[3rem] flex justify-center items-center ">
                <input className='w-[80%] h-[2.5rem] border border-black rounded-lg pl-2' type="text" placeholder='Name' required={true} pattern='^[a-zA-Z]{4,}$' />
                </div>
              <div className="w-[100%] h-[3rem] flex justify-center items-center ">
                <input className='w-[80%] h-[2.5rem] border border-black rounded-lg pl-2' type="password" placeholder='Enter Your Password' required={true} onChange={(e)=>{setpassword(e.target.value)}} pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]){8,}$' />
                </div>
              <div className="w-[100%] h-[3rem] flex justify-center items-center ">
                <input className='w-[80%] h-[2.5rem] border border-black rounded-lg pl-2' type="password" placeholder='Confirm Password' required={true} onChange={(e)=>{setpassword2(e.target.value)}} pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]){8,}$' />
                </div>
                <div className="w-[100%] h-[3rem] flex justify-center items-center ">
              <textarea className="w-[80%] h-[2.5rem] flex justify-center items-center border border-black " placeholder='enter your address' required={true} >
                
                </textarea>
                </div>
                <div className="w-[100%] h-[4rem] flex justify-center items-center ">
                <button className='w-[80%] h-[2.5rem] border border-black rounded-lg pl-2 bg-black text-white' >Sign Up</button>
              </div>
              </form>
              </div>
              </div>)
            
            }


          
        </div>

        
      </div>

      </div>
    </div>
  );
}

export default Userform