import pic from './Apple-12.jpg'
import { Link } from 'react-router-dom';
import { useState ,useContext} from 'react';
import { CartContext } from './CartContext';


function Products(props) {

 const {cart,setCart}=useContext(CartContext)
  
  let [name,SetName] = useState(0);
    
  function nameChange(){
      SetName(name=name+1);
  }
  function nameSub(){
      SetName(name=name-1);
  }
  function addtocart(e,props){
    console.log(props)
    const _cart={...cart};

    if(!_cart.items){
      _cart.items={}
    }

    if(_cart.items[props.id]){
      _cart.items[props.id] +=1;
    }else{
      _cart.items[props.id] =1;
    }

    if(!cart.totalItems){
      _cart.totalItems=0;
    }

    _cart.totalItems +=1;
    setCart(_cart);
  }


  return (
    <div className='container' id='card'>
      <div className='row'> 
        <div className='col-md-12'>
        <div className="card shadow bg-body  rounded " >
        <img src={pic} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.disc}</p>
          <p>Rs {props.price}</p>
          <p><button onClick={(e)=>{addtocart(e,props)}} className="btn btn-primary form-control">Add to Cart</button></p>
         
        <pre>Add Product<button className='btn btn-primary ms-1' onClick={nameSub}>-</button>
        <span className='ms-3'>{name}</span>
        <button className='btn btn-primary ms-3' onClick={nameChange}>+</button></pre>
        
     
          <Link to={`/Singlepage/${props.id}`} className='btn btn-success form-control' >Product Details...</Link>
        </div>
    </div>
          
        </div>
      </div>
    </div>
         
  );
}

export default Products;