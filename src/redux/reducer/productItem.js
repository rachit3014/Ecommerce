import { createSlice } from "@reduxjs/toolkit";

// inital state of cart items
const initalState={
    items:[]
}
// Creating Reducer using Redux Toolkit
const itemSlice =createSlice({
    name:"item",
    initialState:initalState,
    reducers:{
        // to add product to cart
        addcart:(state,action)=>{
            state.items.push({
                image:action.payload.image,
                title:action.payload.title,
                price:action.payload.price
                
            })
        },
        // to remove the product from cart
        deletecart:(state,action)=>
        {
            state.items.splice(action.payload,1)
        }

    }
})

export const ItemReducers=itemSlice.reducer;
//  action for itemSlice
export const action =itemSlice.actions
// selector for items
export const ItemSelector=(state)=>state.ItemReducers.items
