import axios from 'axios'
import {GET_ORDERS, SAVE_ORDER} from './actionTypes'

const initialState = {
    orders: []
}

export const getOrders = () => {
    console.log('hit get orders')
    let data = axios
        .get('/api/orders')
        .then(res => {
            return res.data})
    return {
        type: GET_ORDERS,
        payload: data,
        error: false
    }
}

export const saveOrder = (product_id, quantity, customer_name, customer_phone, baker_id) => {
    let data = axios.post('/api/order', {product_id, quantity, customer_name, customer_phone, baker_id})
    .then(res => res.data)
    return {
        type: SAVE_ORDER,
        payload: data
    }
}

export default function(state = initialState, action) {
    let {type, payload} = action
    switch(type) {
        case GET_ORDERS + '_FULFILLED':
            return {
                ...state,
                orders: payload
            }
        case GET_ORDERS + '_REJECTED':
            return {...state, error: payload}
        case SAVE_ORDER + '_FULFILLED':
            return {...state, orders: payload}
        default: 
            return state
    }
}