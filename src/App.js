import {RouterProvider, createBrowserRouter,Route} from"react-router-dom";
import ProductPage from "../src/component/product_item";
import Navbar from "./component/navbar";
import Home from "./component/home";
import AddProduct from "./component/addProduct";
import AddProductToCart from"./component/addtoCart";
import UpdateProduct from "./component/updateproduct";
import Error404 from "./component/Error"
import { ToastContainer } from "react-toastify";

function App() {
  // creating routes
  const router= createBrowserRouter([
    {path:"/",element:<Navbar/>,
    errorElement:<Error404/>,

    children:[
      {index:true,element:<Home/>},
      {path:"addproduct",element:<AddProduct/>},
      {path:"items/:id",element:<ProductPage/>},
      {path:"cart",element:<AddProductToCart/>},

      {path:"updateproduct/:id",element:<UpdateProduct/>}

    ]
  }

  ])
  return (
  <>
  <RouterProvider router={router}/>
  <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
  </>
  );
}

export default App;
