import React from 'react'

const signupform = () => {
    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log("hello")
    }
  return (
    <div>
        <form  onSubmit={handlesubmit} >
        <input type="text" name="username"  placehlder="enter username" />
        <input type="password" name="password" placehlder="enter password" />
        <button type="submit">submit</button>
        </form>

    </div>
  )
}

export default signupform