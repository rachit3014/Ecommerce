import axios from "axios";
const {createSlice,createAsyncThunk} =require ("@reduxjs/toolkit");
// initial state
const initalState= {
    product:[],
    isSorted:false
}
//  Fetching product details from api
export const getinitalstate= createAsyncThunk("product/getinitalstate" ,
      async   ()=>{
        try{
            const response= await axios.get("https://my-json-server.typicode.com/rachit3014/Product/products");
            return response

        }
        catch (err) {
            console.log("Error In fetching");
          }
            
        }


);
export const deleteProduct= createAsyncThunk("product/deleteProduct",async(payload)=>{
    try {
        console.log(payload)
        const response= await fetch(`https://my-json-server.typicode.com/rachit3014/Product/products/${payload}`, {
            method: 'DELETE',       
          });
          return payload;
        
    } catch (error) {
        console.log(error)

        
    }


}
    
)

export const updatetheproduct=createAsyncThunk("product"/"updatetheproduct",async (payload)=>{
    try {
        console.log(payload)
        const {id,title,price,category,image,description,rate,count}=payload
    
        const response= await fetch(`https://my-json-server.typicode.com/rachit3014/Product/products/${payload.id}`,{
            method: 'PUT',
            headers: {
               'Content-type': 'application/json',
           },
           body: JSON.stringify({
            id,
            title,
            price,
            category,
            image,
            description,
            rating:{rate:rate,count:count}
           })
    
        })
        return response.json();
    
        
    } catch (error) {
        console.log(error)
        
    }

})
// to addproduct
export const addproduct=createAsyncThunk("product/addproduct",async(payload)=>{
    try {
        console.log(payload)
        const {id,title,price,category,image,description,rate,count}=payload
        const response= await fetch("https://my-json-server.typicode.com/rachit3014/Product/products",{
            method:"POST",
            headers:{
                "content-type":"application/json"
    
            },
            body:JSON.stringify({
                
                id,
                title,
                price,
                category,
                image,
                description,
                rating:{rate:rate,count:count}
    
            })
        })
        return response.json();

    } catch (error) {
        console.log(error)
        
    }
  
})
// Creating Reducer using Redux Toolkit
const productSlice= createSlice({
    name:"product",
    initialState:initalState,
    reducers:{
        // to sort the product
        productSorted:(state,action)=>{
            state.product.sort((a,b)=>a.price-b.price)
            state.isSorted=true
        },
        // to unsort the product
        productInital:(state,action)=>{
            state.product.sort((a,b)=>a.id-b.id)
            state.isSorted=false
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(getinitalstate.fulfilled, (state, action)=>{
            // state.isloading=false;
            state.product=[...action.payload.data]
        })
        // to add product
        .addCase(addproduct.fulfilled,(state,action)=>{
            const {id,title,price,category,image,description,rating}=action.payload
            state.product.push({ 
                id,
                title,
                price,
                description,
                category,
                image,
                rating
            })

        })
        // to update the product
        .addCase(updatetheproduct.fulfilled,(state,action)=>{
             const {id,title,price,category,image,description,rating}=action.payload
            state.product.map((products)=>{
                if(products.id==id)
                {
                    products.title=title
                    products.price=price
                    products.category=category
                    products.image=image
                    products.description=description
                    products.rating=rating
                   
                }
                return products
            })
            
        })
        // to delete the product
        .addCase(deleteProduct.fulfilled,(state,action)=>{
            console.log(action.payload)
            const newarray=state.product.filter((prod)=> {
                if(prod.id!=action.payload){
                
                   return prod
                   
                }
             
                
             })
            //  console.log([...newarray])
             state.product=[...newarray]

        })

    }
})
      
export const productReducer =productSlice.reducer;
//  action for productSlice
export const action =productSlice.actions;
// selector for products
export const productSelector= (state)=> state.productReducer.product
// selector for  sorted
export const isSortedSelector=(state)=>state.productReducer.isSorted
