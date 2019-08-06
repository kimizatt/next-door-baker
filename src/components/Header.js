import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../redux/bakerReducer'


class Header extends Component {
    constructor() {
        super()
        this.slidebar = React.createRef()
        this.state = {
            showButtons: false
        }
    }

    
    flipShow = () => {
        let {current} = this.slidebar
        if (current.classList.contains('show-animation')) {
            current.classList.add('hide-animation')
            current.classList.remove('show-animation')
        } else {
            current.classList.add('show-animation')
            current.classList.remove('hide-animation')
        }
    }

    render () {  
    return (
        <div>
        <nav className = "header">
        <div className='logo-container'>
        <i class="fas fa-cookie"></i>
        <h1 id='logo'>bakesby </h1></div>
        <i className="fas fa-bars" onClick={this.flipShow}></i>
        <div className="nav-links-container">
        <span className="nav-links"><Link to='/' 
            style={{'textDecoration':'none', color: 'white', fontWeight: 900}}
            >Home</Link></span>
        <span className="nav-links"><Link to='/login'
            style={{'textDecoration':'none', color: 'white', fontWeight: 900}}
            >Baker Login</Link></span>
        <span className="nav-links"><Link to='/signup'
            style={{'textDecoration':'none', color: 'white', fontWeight: 900}}
            >Baker Signup</Link></span>
        <span className="nav-links"><Link to='/' onClick={this.props.logout}
            style={{'textDecoration':'none', color: 'white', fontWeight: 900}}
            >Logout</Link></span>
        </div>
        </nav>
        <div className='slidebar' ref={this.slidebar}> 
            <i className="far fa-window-close" onClick={this.flipShow}></i>
            <Link to='/login' onClick={this.flipShow} className='sidebar-links'>Login</Link>
            <Link to='/signup' onClick={this.flipShow} className='sidebar-links'>Signup</Link>
            <Link to='/' onClick={(e) => {this.props.logout(e); this.flipShow(e)}} className='sidebar-links'>Logout</Link>
            <br/>
            <Link to='/' onClick={this.flipShow} className='sidebar-links'>Home</Link>
        </div>

        </div>
    

    );
    }
}

function mapStateToProps(state) {
    return state.user
}

export default connect(mapStateToProps, {logout})(Header);
