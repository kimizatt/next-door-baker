import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {login} from '../redux/bakerReducer'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class Login extends Component {
	constructor() {
	super()
	this.state = {
		username: '',
		password: ''
		}
	}
	
	handleChange = (e) => {
		let {name, value} = e.target
		this.setState ({[name]: value})
	}

	loginUser = () => {
		this.props.login(this.state.username, this.state.password)
	}
	
	render () {
				let {username, password} = this.state
				// let {user} = this.props
				if(this.props.user.loggedIn) return <Redirect to="/baker_tabs" />
    return (
    	<div className='login-page'>
			<div>
    	<div className='login-inputs'>
				Username: {'  '}
					<input 
					type="text"
					value={username}
					name="username"
					placeholder='username'
					onChange={this.handleChange}
					className='input'
				/>
				<br/>
				Password: {'  '}
					<input 
					type="password"
					value={password}
					name="password"
					placeholder='password'
					onChange={this.handleChange}
					className='input'
				/>
          <button onClick={() => this.loginUser()} className="login-button">Login</button>
          <br/>
					<p>Not a baker yet?</p>
            <Link to='/signup'>	
          <button className='login-button'>Sign Up</button></Link>
      </div> 
    </div>
		</div>
    );
    }
  }

function mapStateToProps(state) {
	return state.user
}

export default connect(mapStateToProps, {login})(Login)  