import { useState } from "react";
import styles from"../css/addproduct.module.css";
import { useDispatch } from "react-redux";
import { action } from "../redux/reducer/productreducer";
import { toast } from "react-toastify";
import { addproduct } from "../redux/reducer/productreducer";
export default function AddProduct(){
    // const id=Date.now()
    const dispatch=useDispatch()
    const [addProduct,setAddProduct]= useState({id:"",title:"",price:"",image:"",category:"",description:"",rate:"",count:""})
    // function to add product in db
    function toaddproduct(e)
    {
        e.preventDefault();
        dispatch(addproduct(addProduct))
        setAddProduct({id:"",title:"",price:"",image:"",category:"",description:"",rate:"",count:""})
        toast("Product added to DB")
        // console.log(addProduct)

    }
    return(
        <>

            <div className={styles.container}>
                <form onSubmit={toaddproduct}>
                    <input value={addProduct.title} type="text" onChange={(e)=>{setAddProduct({id:Date.now(),title:e.target.value,price:addProduct.price,image:addProduct.image,category:addProduct.category,rate:addProduct.rate,count:addProduct.count,description:addProduct.description})}} name="title" placeholder="TItle"/>
                    <input value={addProduct.price} type="text" onChange={(e)=>{setAddProduct({id:Date.now(),title:addProduct.title,price:e.target.value,image:addProduct.image,category:addProduct.category,rate:addProduct.rate,count:addProduct.count,description:addProduct.description})}} name="price" placeholder="Price"/>
                    <input value={addProduct.category} type="text" onChange={(e)=>{setAddProduct({id:Date.now(),title:addProduct.title,price:addProduct.price,image:addProduct.image,category:e.target.value,rate:addProduct.rate,count:addProduct.count,description:addProduct.description})}} name="category" placeholder="Text"/>
                    <input value={addProduct.image} type="text" onChange={(e)=>{setAddProduct({id:Date.now(),title:addProduct.title,price:addProduct.price,image:e.target.value,category:addProduct.category,rate:addProduct.rate,count:addProduct.count,description:addProduct.description})}} name="image" placeholder="Image"/>
                    <input value={addProduct.rate} type="text" onChange={(e)=>{setAddProduct({id:Date.now(),title:addProduct.title,price:addProduct.price,image:addProduct.image,category:addProduct.category,rate:e.target.value,count:addProduct.count,description:addProduct.description})}} name="image" placeholder="Rate"/>
                    <input value={addProduct.count} type="text" onChange={(e)=>{setAddProduct({id:Date.now(),title:addProduct.title,price:addProduct.price,image:addProduct.image,category:addProduct.category,rate:addProduct.rate,count:e.target.value,description:addProduct.description})}} name="image" placeholder="Count"/>
                    
                    <textarea value={addProduct.description} name="description"onChange={(e)=>{setAddProduct({id:Date.now(),title:addProduct.title,price:addProduct.price,image:addProduct.image,category:addProduct.category,rate:addProduct.rate,count:addProduct.count,description:e.target.value})}} id="" cols="30" rows="4"></textarea>
                    <button type="submit"> Submit</button>
                </form>
            </div>
        </>
    )
}