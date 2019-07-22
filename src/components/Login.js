import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Signup from './Signup'

class Login extends Component {
    render () {
        console.log('hit login')
    return (
    <div className='login-page'>
    	<div className='login-inputs'>
      	<input placeholder='username'/>
        <input placeholder='password'/>
          <button>Login</button>
          <p>Not a baker yet?</p>
            <Link to='/signup'>	
          <button>Sign Up</button></Link>
      </div> 
    </div>
    );
    }
  }

export default Login  