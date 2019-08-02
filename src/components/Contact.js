import './dashboard/Dashboard.css'
import React, {Component} from 'react'
import SendText from './SendText'

class Contact extends Component {
    constructor () {
        super();
        this.state = {
            show: false,
            quantity: 1,
            phone: '',
            date: '',
            totalCost: ''
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

    getTotal = () => {
        const initialPrice = this.props.product.price.slice(1);
        let price = parseInt(initialPrice);
        let totalCost = this.state.quantity * price
        this.setState({ totalCost: `$${totalCost}.00` })
    }

    render() {
        let {product} = this.props.product
        let {show} = this.state
        return (
            <div className='contact-seller-container'>
                {show ? (
                    <div className="order-container">
                        Quantity:
                        <div>
                        <input
                            type="number" 
                            name="quantity" 
                            min="1" max="20" step="1" 
                            value={this.state.quantity} 
                            onChange={(e) => {this.handleChange(e)}}
                        />
                        <button onClick={this.getTotal}>Get total: </button>
                        <p>{this.state.totalCost}</p>
                        </div>
                        Your cell number:
                        <input type="tel" 
                            name="phone" 
                            value={this.phone} 
                            pattern="[0-9]{10}" 
                            placeholder='8015551234' 
                            onChange={(e) => {this.handleChange(e)}}
                        />
                        Requested date for pickup:
                        <input type="date" 
                            name="date" 
                            onChange={(e) => {this.handleChange(e)}}
                            />
                        <SendText />
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
export default Contact