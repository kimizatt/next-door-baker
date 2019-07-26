import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {render} from 'react-dom'
import './BakerDashboard.css'

class BakerDashboard extends Component {
  
  render () {
    return (
      <div>
        <h1>Tabs Demo</h1>
      </div>
    
      );
    }
  }

const container = document.createElement('div')
document.body.appendChild(container)
render(<BakerDashboard />, container)