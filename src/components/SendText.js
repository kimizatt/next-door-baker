import React, {Component} from 'react'


class SendText extends Component {
    constructor(props) {
        super()
        this.state = {
            message: {
                to: '',
                body: ''
            },
            error: false,
            submitting: false,
            show: false
            
        }
    }

    componentDidUpdate(prevProps) {
        console.log()
        if(prevProps !== this.props) {
            console.log('these are the current props:', this.props)
            const { date, customerPhone, customerName, quantity}= this.props
            const {title, size, price, phone, first_name}=this.props
            this.setState({
               message: {...this.state.message, body: `Hi, ${first_name}, 
               I would like to order 
               ${quantity} ${title}, 
               size: ${size}, 
               ${price} each 
               to be picked up on ${date}.  
               Please text me back for payment and pickup details. 
               Thanks, 
               ${customerName}, ${customerPhone}`, 
               to: `1${phone}`}
            })
          
        }
    }
    
    onHandleChange= (event) => {
        const name = event.target.getAttribute('name');
        this.setState({
          message: { ...this.state.message, [name]: event.target.value }
        });
      }


      onSubmit = (event) => {
        event.preventDefault();
        this.setState({ submitting: true });
        fetch('/api/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state.message)
        })
          .then(res => res.json())
          .then(data => {
            if (data.success) {
              this.setState({
                error: false,
                submitting: false,
                message: {
                  to: '',
                  body: ''
                }
            
              })
              alert("Text sent successfully! Your order has been sent.  You should be contacted about your order soon.")
              return this.props.closeModal
            } else {
              this.setState({
                error: true,
                submitting: false
              });
            }
          });
      }
    handleShow=()=> {
        this.setState({show: !this.state.show})   
    }


    render() {
        console.log('to', this.state.message.to)
        console.log('sendtexts', this.props)
        const {show} = this.state
        // const { date, customerPhone, customerName, quantity}= this.props
        const {title, size, price, phone}=this.props
        console.log(title, size, price)
        return (
          <div>
              {show ? (
          <form 
            onSubmit={this.onSubmit}
            className={this.state.err? 'err sms-form': 'sms-form'}
          >
            <div className="send-text-container">
              
              <label htmlFor="to">To:</label>
              <input className='to-telephone-input'
                 type="tel"
                 name="to"
                 id="to"
                 value={phone}
                 onChange={this.onHandleChange}
              />
            
            <div>
              <label htmlFor="body">Body:</label><br/>
              <textarea name="body" id="body"
                value={this.state.message.body}
                onChange={this.onHandleChange}
                style={{color: 'black'}}
                rows="5"
              ></textarea>
            </div>
            </div>
            <button 
                className="normal-btn"
                type="submit"
                disabled={this.state.submitting}
            >
              Send message
            </button>
          </form>
              ): (
                <button className='normal-btn' onClick={() => {this.handleShow(); this.props.saveOrder()}}>Create Text</button>    
              )}
          </div>
        );
      }
}



export default SendText