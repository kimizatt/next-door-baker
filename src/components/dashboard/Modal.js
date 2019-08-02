import React, {Component} from 'react'

import Modal from 'react-responsive-modal';

class ModalClass extends Component {
    state = {
        open: false
    }

    
    onOpenModal = () => {
        this.setState({ open: true });
    };
    
    onCloseModal = () => {
        this.setState({ open: false });
    };
    
    render () {
        const {open} =this.state
    return (
        <div >
        
        
        <Modal open={open} onClose={this.onCloseModal} center>
            <h2>Simple centered modal</h2>
        </Modal>
    </div>
    );
    }
}


export default ModalClass