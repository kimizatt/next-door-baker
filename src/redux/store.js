import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import bakerReducer from './bakerReducer'
import productReducer from './productReducer'
import orderReducer from './orderReducer'

const rootReducer = combineReducers({
    user: bakerReducer,
    product: productReducer,
    order: orderReducer
})

export default createStore(rootReducer, (applyMiddleware(promiseMiddleware)))