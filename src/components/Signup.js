import React, {Component} from 'react'
import {signup} from '../redux/bakerReducer'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
		}
	}	
	
	handleChange = e => {
		let {name, value} = e.target
		
		this.setState({ [name]: value })
}

	signupUser = () => {
		this.props.signup(this.state.username, this.state.password)
	}

	render () {
				let {username, password} = this.state
			  //let user = this.props
			  if(this.props.user.loggedIn) return <Redirect to="/baker_tabs" />
    return (
      <div className='signup-page'>
      	<div id="signup-info">
		  <p> Choose a username and password to become a baker!</p>
      		<hr/>
      		<section className='signup-container'>
      		<div className="signup-inputs">
					<p>Username: </p>
					<input onChange={this.handleChange}
							className='input' 
							
							placeholder='username' 
							type='text'
							name='username'
							value={username}
							/>
					</div>
      			<div className="signup-inputs">
					<p>Password: </p>
					<input className='input' 
						placeholder='password'
						type="password"
						name='password'
						value={password}
						onChange={this.handleChange} />
				</div>
				<br/>
				{/* <div className="signup-inputs">
				<p>Brand Name:* </p>
				
					<input className='input' placeholder='Brand Name' /></div>
				<div className="signup-inputs">
				<p>First Name:</p>
      		<input className='input' placeholder='First Name' />
				</div>
      	<div className="signup-inputs">
				<p>Last Name:</p>
      		<input className='input' placeholder='Last Name' /></div>
					<div className="signup-inputs">
				<p>Pickup Location:** </p>
			
      		<input className='input' placeholder='Pickup Location' /></div>
				<div className="signup-inputs">
				<p>City:</p>
      		<input className='input' placeholder='City' /></div>
				<div className="signup-inputs">
				<p>State:</p>
      		<input className='input' placeholder='State' /></div>
				<div className="signup-inputs">
				<p>Zip Code:</p>
					<input className='input' placeholder='Zip Code' /></div>
				<div className="signup-inputs">
				<p>Email:</p>
      	<input className='input' placeholder='Email' /></div>
				<div className="signup-inputs">
				<p>Phone:</p>
					<input className='input' placeholder='Phone' /></div> */}

				<button 
					className='login-button'
					onClick={this.signupUser}
					
				>Sign Up</button>
				</section>
				
				</div>	
      </div>
    );
    }
  }

function mapStateToProps(state) {
	return state.user
}

export default connect(mapStateToProps, {signup})(Signup)  