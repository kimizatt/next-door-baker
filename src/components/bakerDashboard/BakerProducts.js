import './BakerDashboard.css'
import React, {Component} from 'react'
import {connect} from 'react-redux'

class BakerProducts extends Component {
    render() {
        return (
            <div></div>
        )
    }
}

export default connect(mapStateToProps,{getProductsByUser}(BakerProducts)