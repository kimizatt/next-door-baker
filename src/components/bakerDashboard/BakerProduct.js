
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteProduct, editProduct, getAllProducts} from '../../redux/productReducer'
import Upload from '../Upload'

class BakerProduct extends Component {
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

    save =  () => {
        let newProductType = document.getElementById('newProductType').value
        let {productId} = this.props
        let {newTitle, newDescription, newSize, newImgurl, newPrice} = this.state
        this.props.editProduct(productId, newTitle, newDescription, newSize, newImgurl, newPrice, newProductType)
  
    }
    updateUrl = (url) => {
        this.setState({newImgurl: url})
    }
   


    render() {
        let {newTitle, newDescription, newSize, url, newPrice, editing } = this.state
        return (
            
            <div>
               
            <div className='edit-container'>
                {editing ? (
                    <div className='edit-details-container'>
                        Title:
                        <input 
                            value= {newTitle}
                            onChange={this.handleChange}
                            name="newTitle"
                            className = "add-product-input"
                            style={{width: 280}}
                        />
                        Description: 
                        <input
                            value={newDescription}
                            type="text"
                            onChange={this.handleChange}
                            name="newDescription"
                            className="add-product-input"
                            style={{ width: 250}}
                            />
                        Size/Quantity: 
                        <input 
                            value={newSize}
                            onChange={this.handleChange}
                            name="newSize"
                            className="add-product-input"
                            style={{width: 150}}
                        /><br/>
                        Price: 
                        <input 
                            value={newPrice}
                            onChange={this.handleChange}
                            name="newPrice"
                            className="add-product-input"
                            style={{width: 100}}
                        />
                        <div>
                        <label htmlFor='newProductType'>Type of Baked Goods:</label>
                        <select id="newProductType" style={{fontSize: 16}} onChange={this.handleChange}>
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
                        <div className='upload-image-container'>
                        <p>Image File: </p>
                        <Upload updateUrl={this.updateUrl}
                            value={url}
                            name='newImgurl'
                        />
                        </div>
                            <div className="button-container">
                            <button onClick={(e)=> {this.save(e); this.flipEditing(e)}} className="normal-btn">Save</button>
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

export default connect(mapStateToProps, {getAllProducts, deleteProduct, editProduct})(BakerProduct)