import pic from './logo.svg';
import { CartContext } from './CartContext';
import { useContext ,useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Cart() {
   const {cart,setCart}= useContext(CartContext);
    const [products, setProduct ]=useState([])
    const navigate= useNavigate()
   useEffect(()=>{
       if(!cart.items){
           return;
       }
       fetch('/api/products',{
            method: 'POST',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({ids:Object.keys(cart.items)})
       })
       .then((res)=>{ return res.json()})
       .then((data)=>{
           console.log(data);
           setProduct(data);
       })
   },[])
   function handlequantity(id){
      return cart.items[id];
   }

   function handledecreament(id){
    let exsistingqty= cart.items[id]
    if(exsistingqty===1){
        return;
    }
    const _cart={...cart}
    _cart.items[id]=exsistingqty-1;
    _cart.totalItems -=1
    setCart(_cart)
   }

   function handleincrement(id){
       let exsistingqty=cart.items[id]
       const _cart={...cart}
       _cart.items[id]=exsistingqty+1;
       _cart.totalItems +=1
       setCart(_cart)
   }

   function handlePrice(id,price){
      const finalPrice=  price*handlequantity(id)
      // total +=finalPrice
      return finalPrice;
       
   }

   function handleDelete(id){
       const _cart ={...cart}
      const qty= _cart.items[id]
      delete _cart.items[id]
      _cart.totalItems -=qty
      setCart(_cart)
      setProduct(products.filter((product)=> product._id !==id))
    }

    function handleCheckout(){
        window.alert("Want to placed your order?");
        fetch('/',{
            method:'POST',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(cart)
        })
        setCart({});
        setProduct([]);
        navigate('/');
    }
   
    return ( 
            products.length?
        <div>
            <table className="table table-striped table-hover">
                <tr>
                    <th>Image</th>
                    <th>Product name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                {products.map((result)=>(
                   
                    
                    <tr key={result._id}>
                    <td><img src={pic} alt='..' /></td>
                    <td>{result.name}</td>
                    <td><button className='btn btn-primary' onClick={()=>{handledecreament(result._id)}}>-</button>
                        <din>{handlequantity(result._id)}</din>
                        <button className='btn btn-primary' onClick={()=>{handleincrement(result._id)}}>+</button>
                    </td>
                    <td>{handlePrice(result._id,result.price)}</td>
                    <td><button className='btn btn-danger' onClick={()=>{handleDelete(result._id)}}>Delete</button></td>
                    
                </tr>
                    ))}
                 </table>
           
            <div>Total Amount Rs.</div>
          
            <div style={{float:'right'}}><button className='btn btn-warning mb-5' onClick={handleCheckout}>Checkout</button></div>
       </div>
       :<div className='text-center text-primary fs-1 ' >Empty cart....</div>
     );
}

export default Cart;