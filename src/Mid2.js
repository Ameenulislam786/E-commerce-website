import { CartContext } from './CartContext';
import {useContext} from 'react';

function Mid2() {
    const {name,address}= useContext(CartContext)
    return ( 
       <h1>{name} {address}</h1>
     );
}

export default Mid2;