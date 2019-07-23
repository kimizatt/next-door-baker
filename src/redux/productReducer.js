import axios from 'axios'
import {GET_ALL_PRODUCTS} from './actionTypes'

const initialState = {
    products: []
}

export const getAllProducts = () => {
    console.log('hit function')
    let data = axios
        .get('/api/products')
        .then(res => {
            console.log(res.data)
           return  res.data})
    return {
        type: GET_ALL_PRODUCTS,
        payload: data,
        error: false
    }
}

export default function(state = initialState, action) {
    let {type, payload} = action
    switch(type) {
        case GET_ALL_PRODUCTS + '_FULFILLED':
            return {
                ...state,
                products: payload
            }
        case getAllProducts + '_REJECTED':
            return {...state, error: payload}
        default:
            return state
    }
}