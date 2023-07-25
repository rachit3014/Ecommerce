import { useDispatch, useSelector } from "react-redux";
import styles from"../css/addtoCart.module.css";
import {ItemSelector, action} from "../redux/reducer/productItem";
import  {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function AddProductToCart()
{

    const cartItem=useSelector(ItemSelector)
    const dispatch=useDispatch()
    // function for getting total amount 
    function getnetamount()
    {
        let total=0;
        cartItem.forEach(element => {
            total=total+element.price
        });
        return total
    }
    //  function for remove item from cart
    function removecart(k)
    {
        // console.log(k)
        dispatch(action.deletecart(k))
        toast("Product Remove From Cart !!")


    }
    return(
        <>
             <div className={styles.container}>
                {cartItem.map((item,k)=>{
                    return(
                        
                            <div key={k} className={styles.cart_container}>
                                <div className={styles.cartItem}>
                                    <div className={styles.productImage}>
                                        <img src={item.image} alt="unable to load"/>
                                    </div>
                                    <div >
                                        <div className={styles.productTitle}>
                                        {item.title}
                                        </div>
                                        <div className={styles.productPrice}>
                                        $ {item.price}

                                        </div>
                                    </div>
                                    
                                </div>
                                <div className={styles.productDelete}>
                                            <button onClick={()=>removecart(k)}>
                                                <i className="fa fa-trash" aria-hidden="true"></i>
                                            </button>
                                </div>

                            </div>
                           
                        
                        
                    )
                })}
                 <div className={styles.totalAmount}>Total : $ {getnetamount()}</div>
            </div>

        </>
    )

}