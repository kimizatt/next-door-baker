import './BakerDashboard.css'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllProducts, saveProduct} from '../../redux/productReducer'
import BakerProduct from './BakerProduct'
import BakerDashboard from './BakerDashboard'
import Upload from '../Upload'
import {Redirect} from 'react-router-dom'


class BakerProducts extends Component {
    constructor () {
        super()
        this.state = {
            title: '',
            description: '',
            size: '',
            img_url: '',
            price: 0,
            adding: false
        }
        
    }
    componentDidMount(){
        this.props.getAllProducts()
    }

    componentDidUpdate(prevProps) {
        console.log('hit compupdate', prevProps.product, this.props)
        if(prevProps.product !== this.props) {
            console.log('hit update products', this.props)
            this.render()
        }
    }
    

    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({[name]: value})
    }

    flipAdding = () => {
        this.setState({ adding: !this.state.adding})
    }

    save = () => {
        let product_type = document.getElementById('product_type').value
        let {title, description, size, img_url, price} = this.state
        this.props.saveProduct(title, description, size, img_url, price, product_type)
        this.setState({title: '', description: '', size: '', img_url: '', price: ''})
    }

    updateUrl = (url) => {
        this.setState({img_url: url})
    }

    render() {
        if(!this.props.user.user.loggedIn) 
        return <Redirect to="/login" /> 
        
        
        let bakerProducts = this.props.products.products
            .filter(product => product.baker_id === this.props.user.user.id)
            .map(item => {
            return (
            
            <div key={item.product_id}>
                
            <div className='baker-product-container'>
            <img src={item.img_url} alt='baked goods' />
            <div className='baker-details-container'>
                <h1>{item.title}</h1>
                <h2>{item.description}</h2>
                <h2>{item.size}</h2>
                <h3>{item.price}</h3>
                {/* <h3>{item.product_type}</h3> */}
                </div>
                
                <BakerProduct 
                productId={item.product_id}
                title={item.title}
                description={item.description}
                size={item.size}
                price={item.price}
                img_url={item.img_url}
                product_type={item.product_type}
                
                />
                </div>
            </div>
            )
        })
        let {title, description, size, img_url, price, adding} = this.state
        return (
            <div>
                <BakerDashboard />
            <div className="baker-products-container">
                 
            {bakerProducts}
            <div className="add-product-container" >
                {adding ? (
                    <div>
                        <p>Title: </p>
                        <input 
                            value= {title}
                            onChange={this.handleChange}
                            name="title"
                            className = "add-product-input"
                        />
                        <p>Description: </p>
                        <input
                            value={description}
                            type="text"
                            onChange={this.handleChange}
                            name="description"
                            className="add-product-input"
                            />
                        <p>Size/Quantity: </p>
                        <input 
                            value={size}
                            onChange={this.handleChange}
                            name="size"
                            className="add-product-input"
                        />
                        <p>Price: </p>
                        <input 
                            value={price}
                            onChange={this.handleChange}
                            name="price"
                            className="add-product-input"
                        />
                        <div>
                        <label for='product_type'>Type of Baked Goods:</label>

                        <select id="product_type" onChange={this.handleChange}>
                            <option value=''>--Please choose an option--</option>
                            <option name='product_type' value='Breads'>Breads</option>
                            <option name='product_type' value='Sweet Breads'>Sweet Breads</option>
                            <option name='product_type' value='Muffins'>Muffins</option>
                            <option name='product_type' value='Cookies'>Cookies</option>
                            <option name='product_type' value='Brownies'>Brownies</option>
                            <option name='product_type' value='Pies'>Pies</option>
                            <option name='product_type' value='Cakes'>Cakes</option>
                            <option name='product_type' value='Miscellaneous'>Miscellaneous</option>
                        </select>
                        </div>
                        <p>Image File: </p>
                        <div>
                            <Upload updateUrl={this.updateUrl}
                                value={img_url}
                            />
                        </div>
                        {/* <input 
                            value={img_url}
                            onChange={this.handleChange}
                            name="img_url"
                            className="add-product-input"
                        /> */}
                        
                            <div className="button-container">
                            <button onClick={this.save} className="normal-btn">Save</button>
                            <button onClick={this.flipAdding} className='normal-btn'>Cancel</button>
                            </div>
                        </div>
                ): (
                    <div>

                        <i onClick={this.flipAdding} className="far fa-plus-square"></i>
                    </div>
                )
                }
            </div>
            
            </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('hit mapState', state.product)
    return {
        products: state.product,
        user: state.user
    }
}

export default connect(mapStateToProps, {getAllProducts, saveProduct})(BakerProducts)