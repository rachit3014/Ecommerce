import { useEffect } from "react";
import styles from"../css/product.module.css"
import { getinitalstate } from "../redux/reducer/productreducer"
import {useDispatch, useSelector} from "react-redux";
import {productSelector,isSortedSelector} from"../redux/reducer/productreducer"
import {action } from"../redux/reducer/productreducer";
import  {toast} from "react-toastify"
import Product from "./product"
import "react-toastify/dist/ReactToastify.css";
export default function Home(){
    const products= useSelector(productSelector)
    const isSorted=useSelector(isSortedSelector)
    const dispatch=useDispatch()
     useEffect(()=>{
        if(!(window.localStorage["persist:root238798rachit"]))
        {
         dispatch(getinitalstate()) 
        }
    },[])
    //  function to sort the product by price or Unsort the product 
    function tosort()
    {
       isSorted? dispatch(action.productInital())
       :dispatch(action.productSorted()) 
       isSorted? toast("Unsort!!"):toast.info("Sort By price!!")
       
    }
    console.log(products)
 

   
    return(
        <>
        
            <div className={styles.product_conatiner}>
                    <div className={styles.sortWrapper}>

                        <button onClick={tosort} >
                       { isSorted?"X Sort By Price": "Sort By Price"}
                        </button>

                    </div> 
                    {products.map((item,k)=>{
                        return(
                             <> 
                                <Product item={item} key={k}/>
                              </>      
                        )
                    })}

            </div>
           
        </>

    )
}