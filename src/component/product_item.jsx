import { useParams } from "react-router-dom";
import styles from "../css/product_item.module.css";
import { useDispatch, useSelector } from "react-redux";
import {action} from "../redux/reducer/productItem"
import { productSelector } from "../redux/reducer/productreducer";
import  {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
export default  function ProductPage(){
    const dispatch =useDispatch()
    // taking out id from url
    const {id}=useParams()
    //  finding product  
    const items =useSelector(productSelector)
        const item= items.filter((item)=>
            id==item.id)
    
       
        
  

    //  function for adding product to cart
    function addtocart(product)
    {
        dispatch(action.addcart(product))
        toast("Add to cart!!")
    }
    return(
        <>
            <div className={styles.product_conatiner}>
          
                <div  className={styles.product_image} >
                    <img src={item[0].image} alt=""/>
                </div>
                <div className={styles.product_details} >
                    <div className={styles.product_title}>
                        {item[0].title}
                    </div>
                    <div className={styles.ratings}>
                        <div className={styles.rate}>
                            <i className="fa-solid fa-star"></i> {item[0].rating.rate}
                        </div>
                        <div className={styles.rating_count}>
                            {item[0].rating.count} ratings
                        </div>

                    </div>

                    <div className={styles.price}>
                        $ {item[0].price}
                    </div>
                    <div className={styles.description}>
                        {item[0].description}
                    </div>
                    <button className={styles.addtocart}onClick={()=>{addtocart(item[0])}}>
                        ADD TO CART
                    </button>
                </div> 
         

                
            </div>
        </>
    );
}