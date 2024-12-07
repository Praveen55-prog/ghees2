import {configureStore,combineReducers} from '@reduxjs/toolkit'

import { thunk } from 'redux-thunk'

import gheeReducer from './slices/gheeSlice'


const reducer=combineReducers({
    gheeState:gheeReducer


})

const store=configureStore({
    reducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(thunk)
})

export default store