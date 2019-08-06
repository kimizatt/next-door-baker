import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import './BakerDashboard.css'
import {connect} from 'react-redux'
import {getUser} from '../../redux/bakerReducer'
import bakerProducts from '../bakerDashboard/BakerProducts'
// import BakerProducts from '../bakerDashboard/BakerProducts'


class BakerDashboard extends Component {
  constructor() {
    super()
    this.state= {
      showProducts: true,
      showProfile: false
    }
  }
  
  render () {
    let { error, redirect} = this.props
    if(error || redirect) return <Redirect to='/login' />
    // if(!user.loggedIn) return <div>Loading...</div>
    return (
      <div className="baker-dashboard-background">
      <div className='tab-button-container'>
        <Link to="/baker_products" style={{'textDecoration':'none', color: 'white', width: '40%'}} ><button className='tab-btn'>Products</button></Link>
        {/* <BakerDashboard /> */}
        {/* <button className='normal-btn' ><Link to="/orders" style={{'textDecoration':'none', color: '#e9e5dd'}}>Orders</Link></button> */}
        <Link to="/profile" style={{'textDecoration':'none', color: 'white', width: '40%'}}><button className='tab-btn' >Profile</button></Link>
      </div>
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