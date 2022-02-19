import React from 'react'
import { Link } from 'react-router-dom';
import "./header.scss";
import {useBasket} from '../../context/BasketContext';
const Header = () => {
    const { items }=useBasket()
  return (
    <header>
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-3">
                    <div className="logo">
                        <h4>Logo</h4>
                    </div>
                </div>
                <div className="col-auto">
                    <nav className="menu">
                        <ul className='m-0 p-0 d-flex list-unstyled'>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/products">Products</Link>
                            </li>
                            <li>
                                <Link to="/cart">Basket  {items.length>0? (items.length):null}</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header