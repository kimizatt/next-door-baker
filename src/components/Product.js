
import './dashboard/Dashboard.css'
import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {getAllProducts, saveProduct, deleteProduct, editProduct} from '../../redux/productReducer'
import Modal from 'react-responsive-modal'
import Contact from './Contact'

class Product extends Component {
    constructor(props) {
        super()
        this.state = {
            open: false
        }
    }
    onOpenModal = () => {
        this.setState({ open: true });
    };
     
    onCloseModal = () => {
        this.setState({ open: false });
      };

    render() {
        let {product} = this.props
        console.log(product, 'product on product page')
        const {open} =this.state
        return (
            <div>
                    
                    <div className='product-container' >
                        <img className='dash-img' onClick={this.onOpenModal} src={product.img_url} alt=' baked goods' />
                    
                        <div className='details-container'>
                            <div className='baker-info'>
                            <div className='baker-location'>
                            <h2>{product.city},</h2>
                            <h2>{product.state}</h2>
                            </div>
                            <div>
                            <img className='dashboard-profile-img' src={product.image} alt='profile'/>
                            </div>
                            </div>
                            <section className='product-info'>
                            <h1>{product.title}</h1>
                            <h2>{product.size}</h2>
                            </section>
                            <h3 className="price">{product.price}</h3> 
                        </div>
                    </div >
                    
                    <Modal open={open} classNames={{
                        overlay: "modal-overlay",
                        modal: "modal-content-div",
                        closeIcon: "close-icon-svg"
                    }} onClose={this.onCloseModal}  center>
                        <img className='modal-img' src={product.img_url} alt='baked goods'/>
                            <section className='modal-info-container'>
                            <div className='modal-product-info'>
                            <h2>{product.title}</h2>
                            <h2>{product.description}</h2>
                            <h2>{product.size}</h2>
                            <h3>{product.price}</h3>
                            <div className='modal-baker-details'>
                            <div className='modal-baker-info'>
                                <h2>{product.brand_name}</h2>
                                <h2>{product.first_name} {product.last_name}</h2>
                                <h3>{product.location_pickup}</h3>
                                <h3>{product.city}, {product.state}</h3>
                                </div>
                                <img className='modal-profile-img' src={product.image} alt='profile'/>
                            </div>
                            </div>
                            
                        
                        <Contact product={product}
                                title={product.title}    
                                size={product.size}    
                                price={product.price}    
                                name={product.first_name}
                                phone={product.phone}
                                product_id={product.product_id}
                                baker_id={product.baker_id}    
                            closeModal={this.onCloseModal}/>
                        </section>
                    </Modal>
                    </div>
                
                    
                
            )
        
    }
}
export default Product