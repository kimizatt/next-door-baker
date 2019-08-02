import React, {Component} from 'react'
// const client = require('twilio')(process.env.REACT_APP_TWILIO_ACCOUNT_SID, process.env.REACT_APP_TWILIO_AUTH_TOKEN);

class SendText extends Component {
    constructor(props) {
        super()
        this.state = {
            orderText: '',
            text: ''
        }
    }

    

    render() {
        return (
          <form>
            <div>
              <label htmlFor="to">To:</label>
              <input
                 type="tel"
                 name="to"
                 id="to"
              />
            </div>
            <div>
              <label htmlFor="body">Body:</label>
              <textarea name="body" id="body"/>
            </div>
            <button type="submit">
              Send message
            </button>
          </form>
        );
      }
}
export default SendText
