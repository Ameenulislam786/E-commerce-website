//import pic from './logo.svg'
import {Link} from 'react-router-dom';

function Mid(props) {
    return ( 
       
        <div className="card shadow p-3 mb-5 bg-body rounded" style={
            {width: '18rem'}}>
        <img src={props.img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <Link to="/" className="btn btn-primary form-control">Buy Now</Link>
          <Link to='/singlepage' className='btn btn-success form-control'>Product more Details...</Link>
        </div>
      </div>
     
     );
}

export default Mid;