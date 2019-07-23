import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Header extends Component {
    
    openNav = () => {

    }
    
    render () {
    return (
        <div className = "header">
        <h1 id='logo'>Next Door Baker</h1>
        
        <Link to='/login' id='hamburger'><button className = "login-button">
        <i className="fas fa-bars" ></i></button>
        </Link> 
        </div>
    );
    }
}

export default Header;
