import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import "./Login.css"; 
const Login = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
    <div className='background '>
      <div className='login-page-image-container'>
      <AccountCircleIcon style={{fontSize:'72px',color:'white',marginTop:'30px'}}  />
      </div>
      <p className='content'>Sign in</p>
        <div  className='login-page-image-container'>
          <span><PersonIcon className='icon' style={{fontSize:'20px'}}/></span>
          <input type='email' name='email'className='login input' placeholder='Email'/>
        </div>
        <div  className='login-page-image-container'>
          <span><LockIcon className='icon' style={{fontSize:'20px'}}/></span>
          <input type='password' name='password'className='login input' placeholder='Password'/>
        </div>
        <div>
          <div className='check'>
            <input type='checkbox' defaultChecked={true}/>
            <span className='para'>Remember Me</span>
            <a href="/" className='anchor'>
                    Forgot Password?
                  </a>
          </div>
          <div className='check'>
          <button className='but'>
            Login
          </button>
          </div>
          <div className='check'>
          <span className='register'>Not Registered?</span>
            <a href="/" className='anchor'>
                    Create an account!
                  </a>
          </div>
          
        </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Login
