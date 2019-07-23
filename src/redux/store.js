import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import bakerReducer from './bakerReducer'
import productReducer from './productReducer'

const rootReducer = combineReducers({
    user: bakerReducer,
    product: productReducer

})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))