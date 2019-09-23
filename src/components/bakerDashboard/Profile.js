import React, {Component} from 'react'
import {connect} from 'react-redux'
import BakerDashboard from '../bakerDashboard/BakerDashboard'
import {editProfile} from '../../redux/bakerReducer'
import UploadProfile from '../UploadProfile'

class Profile extends Component {
    constructor(props) {
        super() 
        this.state = {
            editing: false, 
            username: props.user.username,
            brandName: props.user.brandName,
            firstName:props.user.firstName,
            lastName: props.user.lastName,
            locationPickup: props.user.locationPickup,
            city: props.user.city,
            state: props.user.state ,
            zip: props.user.zip,
            email: props.user.email, 
            phone: props.user.phone,
            image: props.user.image,
        }
    }

    flipEditing = () => {
        this.setState({editing: !this.state.editing})
    }

    handleChange = (e)=> {
        let {name, value} = e.target
        this.setState({[name]:value})
    }

    handleSave = () => {
        let {id } = this.props.user
        let {username, brandName, firstName, lastName, locationPickup, city, state, zip, email, phone, image} = this.state
        this.props.editProfile(id, username, brandName, firstName, lastName, locationPickup, city, state, zip, email, phone, image)
    }

    componentDidUpdate(prevProps) {

        if(prevProps !== this.props) {
            console.log('hit update on profile')
            this.setState({
                username: this.props.user.username,
                brandName: this.props.user.brandName,
                firstName:this.props.user.firstName,
                lastName: this.props.user.lastName,
                locationPickup: this.props.user.locationPickup,
                city: this.props.user.city,
                state: this.props.user.state ,
                zip: this.props.user.zip,
                email: this.props.user.email, 
                phone: this.props.user.phone,
                image: this.props.user.image,
            })
        }
    }
    
    render() {
        // console.log(this.props.user, 'props at profile render')
        // console.log(this.state);
        let {editing, username, firstName, lastName, brandName, locationPickup, city, state, zip, email, phone, image} = this.state
        
        return (
            <div className='page-background'>
                <BakerDashboard />
                
                <div >
                    {editing ? (
                    <div className='profile-container'>
                    <div className='profile-details-container'>
                    <span>Username: {username}</span>
                       
                    <span>Brand Name: 
                        <input 
                        placeholder={brandName} 
                        value = {brandName}
                        onChange={this.handleChange}
                        name="brandName"
                        className = "profile-input"
                        ></input>
                    </span>
                    <span>First Name: 
                        <input placeholder={firstName}
                        value = {firstName}
                        onChange={this.handleChange}
                        name="firstName"
                        className = "profile-input"
                        ></input>
                    </span>
                    <span>Last Name: 
                        <input placeholder={lastName}
                        value = {lastName}
                        onChange={this.handleChange}
                        name="lastName"
                        className = "profile-input"
                        ></input>
                    </span>
                    <p>Location for Pickup: Your home address or 
                        alternative location for customer to pickup products.<br/>
                        
                        <input placeholder={locationPickup}
                        value = {locationPickup}
                        onChange={this.handleChange}
                        name="locationPickup"
                        className = "profile-input"
                        ></input>
                    </p>
                    <span>City: 
                        <input placeholder={city}
                        value = {city}
                        onChange={this.handleChange}
                        name="city"
                        className = "profile-input"
                        ></input>
                    </span>
                    <span>State: 
                        <input placeholder={state}
                        value = {state}
                        onChange={this.handleChange}
                        name="state"
                        className = "profile-input"
                        ></input>
                    </span>
                    <span>Zip Code: 
                        <input placeholder={state}
                        value = {zip}
                        onChange={this.handleChange}
                        name="zip"
                        className = "profile-input"
                        ></input>
                    </span>
                    <span>Email Address: 
                        <input placeholder={email}
                        value = {email}
                        onChange={this.handleChange}
                        name="email"
                        type='email'
                        className = "profile-input"
                        ></input>
                    </span>
                    <span>Phone Number: 
                        <input placeholder={phone}
                        value = {phone}
                        onChange={this.handleChange}
                        name="phone"
                        className = "profile-input"
                        ></input>
                    </span><br/>
                    </div>
                    <div className='profile-upload-container'>
                    <span>Upload Image: 
                       <UploadProfile 
                       value={image}
                       name='image'
                       onChange={this.handleChange}
                       /> 

                    </span><br/>
                    <button className='normal-btn' onClick={(e)=> {this.handleSave(e); this.flipEditing(e)}}>Save</button>
                    </div>
                    </div>
                    ) : (
                        <main className='profile-container'>
                        <div className='profile-details-container'>
                            <h3>Username: {username}</h3> 
                            <h4>Brand Name: {brandName}</h4>
                            <h4>Name: {firstName} {' '} {lastName}</h4>
                            <p>Location for Pickup: {locationPickup}</p>
                            <p>City: {city}</p>
                            <p>State: {state}</p>
                            <p>Zip: {zip}</p>
                            <p>Email:{email}</p>
                            <p>Phone: {phone}</p>
                            </div>
                            <div className='profile-image-container'>
                            <img className='profile-page-img' src={image} alt="profile"></img>
                            
                            <br />
                        <button onClick={this.flipEditing} className='normal-btn'>Edit</button>
                        </div>
                    </main>
                    )
                    }
                    </div> 
                </div>
        )
    }   
}

function mapStateToProps(state) {
    return state.user
}
export default connect(mapStateToProps, ({editProfile}))(Profile)

{/* <input placeholder={image}
                        
                        value = {image}
                        onChange={this.handleChange}
                        name="image"
                        className = "profile-input"
                        ></input> */}