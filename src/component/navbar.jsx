import { Outlet,Link} from "react-router-dom";
import styles from "../css/navbar.module.css";
import {ItemSelector} from "../redux/reducer/productItem"
import { useSelector } from "react-redux";

export default function Navbar()
{
    const cartItem=useSelector(ItemSelector)
    // getting no. of item in cart
    const size =cartItem.length;

    return(
        <>
            <div className ={styles.navbar}>
                <div className ={styles.section_one}>
                    <Link className={styles.navlink} to ="/Ecommerce">
                      <h1 className={styles.logo_name}>E Commerce</h1>
                      </Link>
                       < Link className={styles.navlink} to="addproduct"> Add Product</Link>
                </div>
                 <div className={styles.section_Two}>
                    <div className={styles.cartContainer}>
                 <Link className={styles.navLinks} to="cart"> <img className={styles.bag} src="https://cdn-icons-png.flaticon.com/128/2326/2326980.png"/><span className={styles.count}>{size}</span>
                </Link>
                </div>
                <div className={styles.navItem}>
                <img className={styles.logo}
                    src="https://cdn-icons-png.flaticon.com/512/547/547420.png"
                    alt="unable to load"/>
                </div>
            </div>
        </div>
        <Outlet/>
        </>
    );
} 