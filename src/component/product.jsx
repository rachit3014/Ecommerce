import { useState } from "react";
import styles from"../css/product.module.css"
import { Link } from "react-router-dom";
import UpdateProduct from "./updateproduct";
import { useDispatch } from "react-redux";
import{deleteProduct} from "../redux/reducer/productreducer";
import {action as actions} from "../redux/reducer/productItem";
import ReactStars from 'react-stars'

import {action } from"../redux/reducer/productreducer";
import  {toast} from "react-toastify"

export default function Product(props)
{
    const [isUpdate,setIsUpdate]=useState(false)

    const dispatch=useDispatch()
    function toUpdateState()
    {
        setIsUpdate(false)
    }

    // function for adding item to cart
    function addtocart(products)
    {
    
        dispatch(actions.addcart(products))
        toast("Add to cart!!")
    }
    
    // function to delete the product 

     function deletehandler(id)
    {
//         await fetch(`https://my-json-server.typicode.com/rachit3014/Product/products/${id}`, {
//   method: 'DELETE',
// });
        // dispatch(action.deleteItem(id))
        dispatch(deleteProduct(id))
        toast.error("Product Deleted!!")

    }

    return(
        <>
                {isUpdate?<UpdateProduct id={props.item.id} key={props.key}change={toUpdateState}/>:<>                       
                               
                               
                                         <div className={styles.product}>
                                    <div className={styles.Image_Title_Rating}>
                                   <img src={props.item.image} alt="" />
                                    <div className={styles.Title_Rating_Price}>
                                        <div className={styles.Title}>
                                    <h4>{props.item.title}</h4>
                                            
                                        </div>
                                        <div className={styles.product_category}>({props.item.category})</div>
                                        <div className={styles.Price}>
                                        <p>$ {props.item.price}</p>  
                                        </div>
                                        <div className={styles.Rating}>
                                            <div className={styles.rate}>
                                                <ReactStars
                                                     count={5}
                                                     value={props.item.rating.rate}
                                                     size={18}
                                                     color2={'#ffd700'}
                                                />
                                            </div>
                                            <div className="rating_count">
                                            {props.item.rating.count} ratings
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className={styles.section_two}>
                                    <div className={styles.description}>
                                    <Link to={`items/${props.item.id}`}> <p>{props.item.description}</p></Link>
                                    </div>
                                    <div className={styles.actionContainer}>
                                        <div className={styles.actionIcon} onClick={()=>setIsUpdate(true)}>
                                            <img
                                            src="https://cdn-icons-png.flaticon.com/512/2919/2919592.png"
                                            alt="edit"

                                        />
                                        </div>
                                        <div className={styles.actionIcon}onClick={()=>deletehandler(props.item.id)}>
                                            <img
                                            src="https://cdn-icons-png.flaticon.com/512/1632/1632602.png"
                                            alt="delete"
                                            />
                                        </div>
                                        <div className={styles.actionIcon} onClick={()=>addtocart(props.item)} >
                                            <img
                                            src="https://cdn-icons-png.flaticon.com/512/9376/9376776.png"
                                            alt="addToCart"
                                            />
                                        </div>

                                    </div>
                                </div>

                              </div>
                               
                              </>} 
                                                     
                                            
        </>
    )
}


