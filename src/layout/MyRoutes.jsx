import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import ProductDetail from '../pages/ProductDetail'
import Product from '../pages/ProductDetail'

const MyRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/products" element={<Product/>}/> */}
        <Route path="/products/:id/" element={<ProductDetail/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default MyRoutes