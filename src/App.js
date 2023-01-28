import{BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Mid from "./Mid";
import pic from './Apple-12.jpg'
import Mid2 from "./Mid2";
import Mid3 from './Mid3';
import ProductCreate from './ProductCreate';
import Singlepage from './Singlepage';
import { CartContext } from './CartContext';
import { useEffect, useState } from 'react';
import Cart from './Cart';


export default function App(){
    const [cart, setCart]=useState({})
   
    useEffect(()=>{
       const cart= window.localStorage.getItem('cart');
       setCart(JSON.parse(cart));
    },[])
   
    useEffect(()=>{
        window.localStorage.setItem('cart',JSON.stringify(cart))
    },[cart])
   
    return(
        <Router>
            <CartContext.Provider value={{cart,setCart}}>
        <div>
        <Header/>
        <Routes>
       
        <Route path='/' element={<Mid3/>}></Route>
        <Route path='/about' element={<Mid img={pic}
                                     title='Iphone-12 64GB'
                                     desc="Rs. 60000"/>}></Route>
        
      
        <Route path='/contact' element={<Mid2/>}></Route> 
        <Route path='/create' element={<ProductCreate/>}></Route> 
        <Route path='/singlepage/:id' element={<Singlepage/>}></Route> 
        <Route path='/cart' element={<Cart/>}></Route> 
        </Routes>
         <Footer/>
        </div>
        </CartContext.Provider>
        </Router>

    );
}