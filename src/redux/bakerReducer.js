import axios from 'axios'
import { LOGIN, SIGNUP, LOGOUT, GET_USER, EDIT_PROFILE} from './actionTypes'

const initialState = {
    user: {}, 
    redirect: false,
    error: false
}

export const login = (username, password) => {
    let data = axios
        .post('/api/login', {username, password})
        .then(res => res.data)
    return {
        type: LOGIN,
        payload: data
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
        payload: axios.delete('/api/logout')
    }
}

export const signup = (username, password) => {
    let data = axios
        .post('/api/signup', {username, password})
        .then(res => res.data)
    return {
        type: SIGNUP,
        payload: data
    }
}

export const getUser = () => {
    let data = axios.get('/api/baker').then(res => res.data)
    return {
        type: GET_USER,
        payload: data
    }
}

export const editProfile = (id, username, brandName, firstName, lastName, locationPickup, city, state, zip, email, phone, image) => {
    let data = axios
        .put(`/api/profile/${id}`, {username, brandName, firstName, lastName, locationPickup, city, state, zip, email, phone, image})
        .then(res => res.data)
    return {
        type: EDIT_PROFILE,
        payload: data
    }
}

export default function(state = initialState, action) {
    let {type, payload} = action
    switch (type) {
        case LOGIN + '_FULFILLED':
            console.log("login redux", payload)
            return {
                ...state, 
                user: payload,
                redirect: false,
                error: false
            }
        case LOGIN + '_REJECTED':
            return {...state, error: payload}
        case LOGOUT + '_FULFILLED':
            return {...state, user: {}, redirect: true, error: false}
        case SIGNUP + '_FULFILLED':
            return {...state, user: payload, error: false}
        case EDIT_PROFILE + '_FULFILLED': 
            return {...state, user: payload}
        default: 
            return state
    }
}