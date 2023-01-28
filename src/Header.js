import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext';

export default function Header() {
    const {cart}= useContext(CartContext)
    return (
        <section className='header'>
            
        <div className='container-fluid '>
            <div className='row'>
                <div className='col-md-1'>
                <Link className='link' to="/"><img src='./Amazon.jpg' alt='amazon logo'/></Link>
                </div>
                <div className='col-md-11 '>
                    <ul>

                        <li><Link className='link' to="/">Home</Link></li>
                        <li><Link className='link' to="about">About</Link></li>
                        <li><Link className='link' to="/contact">Contact</Link></li>
                        <li><Link className='link' to="create">Product Create</Link></li>
                        <li><Link className='link' to="/cart">Cart-{cart.totalItems}</Link></li>
                        

                    </ul>

                </div>
            </div>
        </div>
        </section>
    

    );
}