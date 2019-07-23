import React, {Component} from 'react'
import axios from 'axios';
import './Dashboard.css'
import {getAllProducts} from '../../redux/productReducer'
import {connect} from 'react-redux'

class Dashboard extends Component {
    
    componentDidMount() {
        this.props.getAllProducts()
    }
    
    render () {
        console.log(this.props)
        let productDisplay = this.props.product.products.map(product => {
            return (
                <div key={product.product_id}>
                    <div className='product-container'>
                    <img src={product.img_url} alt=' baked goods' />
                    <div className='details-container'>
                    <h1>{product.title}</h1>
                    <h2>{product.description}</h2>
                    <h2>{product.size}</h2>
                    <h3>{product.price}</h3>
                    </div>
                    </div>
                </div>

            )
        })
        console.log(productDisplay);
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
// axios.get('/api/products').then (res => {
//     console.log('Got products')
//     this.setState({products: res.data})
// })
// .catch(err => console.log('err', err))