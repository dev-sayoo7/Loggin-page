import React, { useState } from 'react'
import './register.css'

function Register() {
  const[mail,setMail]=useState();


  return (

    <div className="container">
    <div><h3>Register <br /></h3>
    


    <div className="input-container">
    <input type="text" placeholder='Enter the name  ' /> 
    <input type="password" placeholder='Enter password' /> </div>
   <input type='submit' value='Register'></input>
   
    
    
    
    </div>
    </div>
  )
}

export default Register