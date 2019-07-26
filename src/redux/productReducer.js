import axios from 'axios'
import {GET_ALL_PRODUCTS, SAVE_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT} from './actionTypes'

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

export const deleteProduct = (productId) => {
    let data = axios.delete(`/api/product/${productId}`)
    .then( res => res.data)
    return {
        type: DELETE_PRODUCT,
        payload: data
    }
}

export const editProduct = (productId, newTitle, newDescription, newSize, newImgurl, newPrice, newProductType) => {
    let data = axios
        .put(`/api/product/${productId}`, {newTitle, newDescription, newSize, newImgurl, newPrice, newProductType})
        .then(res => res.data)
    return {
        type: EDIT_PRODUCT,
        payload: data
    }
}

export const saveProduct = (title, description, size, img_url, price, product_type ) => {
    let data = axios.post(`/api/product`, {title, description, size, img_url, price, product_type}).then(res => res.data)
    return{
        type: SAVE_PRODUCT,
        payload: data
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
        case GET_ALL_PRODUCTS + '_REJECTED':
            return {...state, error: payload}
        case SAVE_PRODUCT + '_FULFILLED':
            return {...state, products: payload}
        case DELETE_PRODUCT + '_FULFILLED':
            return {...state, products: payload}
        case EDIT_PRODUCT + '_FULFILLED':
            return {...state, product: payload}
        default:
            return state
    }
}