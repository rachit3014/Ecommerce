import {  configureStore} from "@reduxjs/toolkit";
import {combineReducers}from "redux"
import { productReducer } from "./reducer/productreducer";
import { ItemReducers } from "./reducer/productItem";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from "redux-thunk";

const persistConfig ={
    key:"root238798rachit",
    storage
}
// combinig reducer
const combinereducer =combineReducers({
    productReducer,
    ItemReducers

})

const persistedReducer = persistReducer(persistConfig,  combinereducer)

export const store =configureStore({
    reducer: persistedReducer, middleware: [thunk]
   
})
export const persistor = persistStore(store);