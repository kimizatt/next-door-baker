
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteProduct, editProduct} from '../redux/productReducer'

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newTitle: props.title,
            newDescription: props.description,
            newSize: props.size,
            newImgurl: props.img_url,
            newPrice: props.price,
            newProductType: props.product_type,
            editing: false
        }
    }

    flipEditing = () => this.setState({editing: !this.state.editing})

    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({[name]: value})
    }

    delete = () => {
        let {productId, deleteProduct} = this.props
        console.log(productId, 'productId')
        deleteProduct(productId)
    }

    save = () => {
        let newProductType = document.getElementById('newProductType').value
        let {productId} = this.props
        let {newTitle, newDescription, newSize, newImgurl, newPrice} = this.state
        editProduct(productId, newTitle, newDescription, newSize, newImgurl, newPrice, newProductType)
        this.setState({title: '', description: '', size: '', img_url: '', price: '', editing: !this.state.editing})
        console.log(this.state)
    }
// save = () => {
    //     let newProductType = document.getElementById('newProductType').value
    //     //let {productId, editProduct} = this.props
    //     //let {newTitle, newDescription, newSize, newImgurl, newPrice} = this.state
    //     // editProduct(productId, newTitle, newDescription, newSize, newImgurl, newPrice, newProductType)
    //     // this.setState({title: '', description: '', size: '', img_url: '', price: '', editing: !this.state.editing})
    //     editProduct(productId, newTitle, newDescription, newSize, newImgurl, newPrice, newProductType) {
    //         axios
    //             .put(`/api/product/${productId}`, {newTitle, newDescription, newSize, newImgurl, newPrice, newProductType})
    //             .then(res => res.data)
            
                
    //     console.log(this.state)
    // }
//}
    // editPost = (productId) => {
    //     axios.put(`/api/product/${productId}`, {newTitle, newDescription, newSize, newImgurl, newPrice, newProductType})
    //     .then(res => res.data)
    //     this.setState({newTitle, })

    // }
    componentDidUpdate(prevProps) {
        let {title, description, size, img_url, price, product_type} = prevProps
        if(title !== this.props.title||
            description !== this.props.description ||
            size !== this.props.size||
            img_url !== this.props.img_url||
            price !== this.props.price||
            product_type !== this.props.product_type)
        this.setState({
            newTitle: title,
            newDescription: description,
            newSize: size,
            newImgurl: img_url,
            newPrice: price,
            newProductType: product_type, 
            editing: false
        })
    }


    render() {
        let {newTitle, newDescription, newSize, newImgurl, newPrice, editing } = this.state
        return (
            <div>
            <div >
                {editing ? (
                    <div>
                        <p>Title: </p>
                        <input 
                            value= {newTitle}
                            onChange={this.handleChange}
                            name="newTitle"
                            className = "add-product-input"
                        />
                        <p>Description: </p>
                        <input
                            value={newDescription}
                            type="text"
                            onChange={this.handleChange}
                            name="newDescription"
                            className="add-product-input"
                            />
                        <p>Size/Quantity: </p>
                        <input 
                            value={newSize}
                            onChange={this.handleChange}
                            name="newSize"
                            className="add-product-input"
                        />
                        <p>Price: </p>
                        <input 
                            value={newPrice}
                            onChange={this.handleChange}
                            name="newPrice"
                            className="add-product-input"
                        />
                        <p>Image File: </p>
                        <input 
                            value={newImgurl}
                            onChange={this.handleChange}
                            name="newImgurl"
                            className="add-product-input"
                        />
                        <div>
                        <label for='newProductType'>Type of Baked Goods:</label>

                        <select id="newProductType" onChange={this.handleChange}>
                            <option value=''>--Please choose an option--</option>
                            <option name='newProductType' value='Breads'>Breads</option>
                            <option name='newProductType' value='Sweet Breads'>Sweet Breads</option>
                            <option name='newProductType' value='Muffins'>Muffins</option>
                            <option name='newProductType' value='Cookies'>Cookies</option>
                            <option name='newProductType' value='Brownies'>Brownies</option>
                            <option name='newProductType' value='Pies'>Pies</option>
                            <option name='newProductType' value='Cakes'>Cakes</option>
                            <option name='newProductType' value='Miscellaneous'>Miscellaneous</option>
                        </select>
                        </div>
                            <div className="button-container">
                            <button onClick={this.save} className="normal-btn">Save</button>
                            <button onClick={this.flipEditing} className='normal-btn'>Cancel</button>
                            </div>
                        </div>
                ): (
                <div className='button-container'>
                <button onClick={this.flipEditing} className='normal-btn'>Edit</button>
                <button onClick={this.delete} className='normal-btn'>Delete</button>
            
                </div>
                )
                }
            </div>
            </div>
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