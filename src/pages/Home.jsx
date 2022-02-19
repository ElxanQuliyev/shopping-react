import React, { useEffect, useState } from 'react'
import storeApi from '../api/storeApi'
import ProductList from '../components/product-list/ProductList'

const Home = () => {
  
  return (
    <div>
        <div className="container">
            <ProductList/>
        </div>
    </div>
  )
}

export default Home