import React, {Component} from 'react'


class Signup extends Component {
    render () {
        console.log('hit signup')
    return (
      <div className='signup-page'>
      	<p> Enter your information to become a baker!</p>
      	<hr/>
      	<section id="signup-info">
      	<div className="signup-inputs">
					<p>Username: </p>
      		<input placeholder='username' />
				</div>
      	<div className="signup-inputs">
					<p>Password: </p>
    			<input placeholder='password' />
				</div>
				<br/>
				<div className="signup-inputs">
				<p>Brand Name:* </p>
				
					<input placeholder='Brand Name' /></div>
				<div className="signup-inputs">
				<p>First Name:</p>
      		<input placeholder='First Name' />
				</div>
      	<div className="signup-inputs">
				<p>Last Name:</p>
      		<input placeholder='Last Name' /></div>
					<div className="signup-inputs">
				<p>Pickup Location:** </p>
			
      		<input placeholder='Pickup Location' /></div>
				<div className="signup-inputs">
				<p>City:</p>
      		<input placeholder='City' /></div>
				<div className="signup-inputs">
				<p>State:</p>
      		<input placeholder='State' /></div>
				<div className="signup-inputs">
				<p>Zip Code:</p>
					<input placeholder='Zip Code' /></div>
				<div className="signup-inputs">
				<p>Email:</p>
      	<input placeholder='Email' /></div>
				<div className="signup-inputs">
				<p>Phone:</p>
					<input placeholder='Phone' /></div>
				<div id='extra-signup-info'>
					<p>*This is the name you would like to display as the seller of your products.  If you don't choose a brand name, the display will show your first and last name.</p>
					<p>**(This is where you would like your customers to pickup their purchased items.  It may be your home address or a public spot like "The parking lot of a local business") </p>
				</div>
    		</section>
      </div>
    );
    }
  }

export default Signup  