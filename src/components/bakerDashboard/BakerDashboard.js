import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import './BakerDashboard.css'
import {connect} from 'react-redux'
import {getUser} from '../../redux/bakerReducer'

// import BakerProducts from '../bakerDashboard/BakerProducts'


class BakerDashboard extends Component {
  
  render () {
    let { error, redirect} = this.props
    if(error || redirect) return <Redirect to='/login' />
    // if(!user.loggedIn) return <div>Loading...</div>
    return (
      <div className='tab-button-container'>
        <button className='tab-btn' ><Link to="/baker_products" style={{'textDecoration':'none', color: '#e9e5dd'}}>Products</Link></button>
        {/* <button className='normal-btn' ><Link to="/orders" style={{'textDecoration':'none', color: '#e9e5dd'}}>Orders</Link></button> */}
        <button className='tab-btn' ><Link to="/profile" style={{'textDecoration':'none', color: '#e9e5dd'}}>Profile</Link></button>
      </div>
    
      );
    }
  }
function mapStateToProps(state) {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps, {getUser})(BakerDashboard)