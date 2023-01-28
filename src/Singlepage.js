import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pic from './logo.svg';

function Singlepage() {
    const [product ,setProduct]=useState('');
    const {id}= useParams();

    useEffect(()=>{
        fetch(`/api/${id}`)
        .then((res)=>{return res.json()})
        .then((product)=>{
           // console.log(data);
            setProduct(product);
        })
    },[]) //eslint-disable-line react-hooks/exhaustive-deps
    return ( 
        <div className="container">
        
      <div className="card shadow p-3 mb-5 bg-body rounded" style={{ width: '18rem' }}>
        <img src={pic} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.disc}</p>
          <p><a href="/" className="btn btn-primary form-control">{product.price}</a></p>
        </div>
      </div>
 
        </div>
     );
}

export default Singlepage;