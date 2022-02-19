import React from 'react'
import { Link } from 'react-router-dom';
import "./product-item.scss";
const ProductItem = ({item}) => {
  return (
      <div className="col-lg-3">
        <div className='product-item p-5'>
                <img className='img-fluid' src={item.image} alt="" />
                <b>{item.price} azn</b>
                <p>{item.category}</p>
                <h6><Link to={`/products/${item.id}`}>{item.title}</Link> </h6>
            </div>
      </div>
    
  )
}

export default ProductItem