import './dashboard/Dashboard.css'
import React, {Component} from 'react'
import SendText from './SendText'
import {connect} from 'react-redux'
import {saveOrder} from '../redux/orderReducer'
// import {getAllProducts} from '../redux/productReducer'


class Contact extends Component {
    constructor (props) {
        super();
        this.state = {
            show: false,
            quantity: 1,
            customerPhone: '',
            date: '',
            totalCost: 0,
            customerName: ''
        };
    }


    showOrderForm = () => {
        this.setState({show: !this.state.show})
    }

    handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        let {name, value} = e.target
        this.setState({ [name]: value })
    }

    // getTotal = (e) => {
    //     const initialPrice = this.props.product.price.slice(1);
    //     let price = parseFloat(initialPrice);
    //     let totalCost = this.state.quantity * price
    //     this.setState({ totalCost})
    // }

    saveOrder = ()=> {
        let {product_id, baker_id} = this.props
        let {quantity, customerName, customerPhone, date} = this.state
        this.props.saveOrder(product_id, quantity, customerName, customerPhone, baker_id, date)
        
    }

    render() {
        let {product} = this.props
        let {show} = this.state
        return (
            <div className='contact-seller-container'>
                {show ? (
                    <div className="order-container">
                        Quantity:
                        <div >
                        <input
                            type="number" 
                            name="quantity" 
                            min="1" max="20" step="1" 
                            value={this.state.quantity} 
                            onChange={(e) => {this.handleChange(e)}}
                        />
                        </div>
                        Your cell number:
                        <input type="tel" 
                            name="customerPhone" 
                            value={this.customerPhone} 
                            pattern="[0-9]{10}" 
                            placeholder='801...' 
                            onChange={(e) => {this.handleChange(e)}}
                        />
                        Your name:
                        <input type="text" 
                            name="customerName" 
                            value={this.customerName} 
                            placeholder='Your name' 
                            onChange={(e) => {this.handleChange(e)}}
                        />
                        Requested date for pickup:
                        <input type="date" 
                            name="date"
                            value={this.date} 
                            onChange={(e) => {this.handleChange(e)}}
                            />
                        
                        <SendText 
                            customerPhone={this.state.customerPhone}
                            quantity={this.state.quantity}
                            customerName={this.state.customerName}
                            date={this.state.date}
                            product={product}
                            saveOrder={this.saveOrder}
                            title={this.props.title}    
                            size={product.size}    
                            price={product.price}    
                            first_name={product.first_name}
                            phone={product.phone}
                            closeModal= {this.closeModal}
                        />
                    </div>
                    ) : (
                    <div>
                        <button className='normal-btn' onClick= {this.showOrderForm} >Contact Seller</button>
                    </div>
                )}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        order: state.order,
        // product: state.product
    }
}


export default connect(mapStateToProps, {saveOrder})(Contact)
// , getAllProducts