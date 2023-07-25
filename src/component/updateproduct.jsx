import styles from"../css/product.module.css";
import { useDispatch, useSelector } from "react-redux";
import {productSelector} from"../redux/reducer/productreducer"
import { useState } from "react";
import  {toast} from "react-toastify"
import { updatetheproduct } from "../redux/reducer/productreducer";
import "react-toastify/dist/ReactToastify.css";

export default function UpdateProduct(props){
    const {id}=props;
    
    const products =useSelector(productSelector)
    // taking out id from url
    // const {id}=useParams()
    //  finding product from id
    const item=products.find((item)=>item.id==id)

    const dispatch =useDispatch()
    // Initail State of product details
    // console.log(item)
    const [formdata,setFormdata]=useState({id:id,title:item.title,price:item.price,category:item.category,image:item.image,description:item.description,rate:item.rating.rate,count:item.rating.count})
    //  function for update product
    function updateproductitem(e)
    {
        e.preventDefault();
   
        // dispatch(action.updateitem(formdata))
        dispatch(updatetheproduct(formdata))
        toast.success("Product Updated !!")
        props.change()

     

    }
    return(
        <>
        <div className={styles.product}>
            <div className={styles.Image_Title_Rating}>
                Image Url &nbsp;
                 <input type="text" value={formdata.image} name="image"onChange={(e)=>setFormdata({id:id,title:formdata.title,price:formdata.price,category:formdata.category,image:e.target.value,description:formdata.description,rate:formdata.rate,count:formdata.count})} placeholder="Image"/>
                
                <div className={styles.Title_Rating_Price}>
                    <div className={styles.Title}>
                        Title &nbsp;
                       <input type="text" value={formdata.title} name="title"onChange={(e)=>setFormdata({id:id,title:e.target.value,price:formdata.price,category:formdata.category,image:formdata.image,description:formdata.description,rate:formdata.rate,count:formdata.count})} placeholder="TItle"/>

                    </div>
                    <div className={styles.product_category}>
                    Category &nbsp;
                     <input type="text"value={formdata.category}name="category" onChange={(e)=>setFormdata({id:id,title:formdata.title,price:formdata.price,category:e.target.value,image:formdata.image,description:formdata.description,rate:formdata.rate,count:formdata.count})}placeholder="Text"/>
                     </div>
                    <div className={styles.Price}>
                        $ &nbsp;
                         <input type="text" value={formdata.price} name="price" onChange={(e)=>setFormdata({id:id,title:formdata.title,price:e.target.value,category:formdata.category,image:formdata.image,description:formdata.description,rate:formdata.rate,count:formdata.count})} placeholder="Price"/>
                        
                    </div>
                    <div className={styles.Rating}>
                        <div className={styles.rate}>
                            <input type="text" value={formdata.rate} name="price" onChange={(e)=>setFormdata({id:id,title:formdata.title,price:formdata.price,category:formdata.category,image:formdata.image,description:formdata.description,rate:e.target.value,count:formdata.count})} />
                        </div>
                        <div className="rating_count">
                            <input type="text" value={formdata.count} name="price" onChange={(e)=>setFormdata({id:id,title:formdata.title,price:formdata.price,category:formdata.category,image:formdata.image,description:formdata.description,rate:formdata.rate,count:e.target.value})} />
                             
                        </div>
                    </div>

                </div>
            </div>
            <div className={styles.section_two}>
                <div className={styles.description}>
                Description :-&nbsp;
                  <textarea  value={formdata.description} onChange={(e)=>setFormdata({id:id,title:formdata.title,price:formdata.price,category:formdata.category,image:formdata.image,description:e.target.value,rate:formdata.rate,count:formdata.count})}name="description" id="" cols="30" rows="4"></textarea>

                </div>
                <div className={styles.actionContainer}>
                    <div className={styles.actionIcon} onClick={updateproductitem}>
                        <img
                        src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                        alt="save"
                      />
                    </div>
                    <div className={styles.actionIcon}onClick={()=>props.change()}>
                        <img
                        src="https://cdn-icons-png.flaticon.com/512/391/391247.png"
                        alt="cancel"
                      />
                      </div>


                </div>
            </div>

        </div>


        </>
    )
}