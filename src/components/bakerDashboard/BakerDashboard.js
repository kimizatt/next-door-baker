import React, {Component} from 'react'
import {Link} from 'react-router-dom'


import './BakerDashboard.css'

class BakerDashboard extends Component {
  
  handleClick = () => {

  }
  
  render () {
    return (
      <div id='baker-button-container'>
       
       <button className='baker-buttons'>Orders</button>
       <button className='baker-buttons'>Products</button>
       <button className='baker-buttons'>Edit</button>
      </div>
    );
    }
  }

export default BakerDashboard