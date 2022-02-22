import React from 'react'
import {Link} from "react-router-dom";
import { useBasket } from '../context/BasketContext';

const Cart = () => {
  const {items}=useBasket();
  return (
    <div className='my-5 container'>
     <h3 className='text-center'>Cart Items</h3> 
     {items.length<1 && (<div className='alert alert-warning my-5'>Cart is Empty.</div>)}
     {items.length>0 && (
        <ul className='list-group'>
          {items.map(item=>(
            <li className='list-group-item'>
              <Link to={`/products/${item.id}`}>
                <h5>{item.title} - {item.price} azn</h5>
                <img width={130} src={item.image} alt={item.title}/> 
                </Link>
                <button className='btn btn-outline-danger'>Remove from Cart</button>
              </li>
          ))}
        </ul>
     )}
    </div>
  )
}

export default Cart