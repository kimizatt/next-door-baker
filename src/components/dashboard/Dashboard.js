import React, {Component} from 'react'

import './Dashboard.css'
import {getAllProducts} from '../../redux/productReducer'
import {connect} from 'react-redux'
import Product from '../Product'

class Dashboard extends Component {
    state = {
        open: false
    }

    componentDidMount() {
        this.props.getAllProducts()
    }
    
    
    
    render () {
        console.log(this.props)
        
        let productDisplay = this.props.product.products
        .filter(item => item.product_id !== null)
        .map(product => {
            return (
                <Product product={product}
                    key={product.product_id}
                    product_id={product.product_id}
                    baker_id={product.baker_id}
                    />
                    
        )})

    return (
        <div className="products-container">
        {productDisplay}
    </div>
    );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return state
}

export default connect(mapStateToProps, {getAllProducts})(Dashboard) 
// ReactDOM.render(<Dashboard />, document.getElementById('dashboard'))

{/* <button onClick={this.onOpenModal}>Open modal</button> */}