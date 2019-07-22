import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Header extends Component {
    render () {
    return (
        <div className = "header">
        <h1 id='logo'>Next Door Baker</h1>
        
        <Link to='/login'><button className = "login-button">
        <h3>Baker Login</h3></button>
        </Link>
        
        
    </div>
    );
    }
}

export default Header;
