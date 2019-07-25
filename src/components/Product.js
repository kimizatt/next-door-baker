import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteProduct, editProduct} from '../redux/productReducer'

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // newTitle: props.product.title,
            // newDescription: props.product.description,
            // newSize: props.product.size,
            // newImgurl: props.product.img_url


        }
    }
    render() {
        return (
            <div></div>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.product,
        user: state.user
    }
}

export default connect(mapStateToProps, {deleteProduct, editProduct})(Product)