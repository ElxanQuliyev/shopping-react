import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import storeApi from "../api/storeApi";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { useBasket } from "../context/BasketContext";
import {useQuery} from "react-query";
const ProductDetail = () => {
  // const [pro, setPro] = useState(null);
  
  // useEffect(() => {
  //   storeApi.getProduct(id).then(p=>setPro(p))
  // }, [id]);

  
  const { id } = useParams();
  
  const { addToCart, items }=useBasket();
  
const {data,isError,isLoading}  =  useQuery(["products",id],()=>(storeApi.getProduct(id)));

console.log(data)

  const findBasketItem = items.find(item=>item.id===id);
  
  return (
    <div className="product-detail py-5">
      { !isLoading ? (
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <div className="pro-img">
                    {!isLoading?
                     (<img className="img-fluid" src={data.image} alt={data.title} />):
                     <Skeleton count={3}/>}

                  
                </div>
              </SkeletonTheme>
            </div>
            <div className="col-lg-8 p-5">
              <div className="pro-desc">
                <h4>{data.title}</h4>
                <b>{data.price} azn</b>
                <h6>{data.category}</h6>
                <p>{data.description}</p>
                <button className="btn btn-warning mt-3" onClick={()=>addToCart(data,findBasketItem)}>
                  {findBasketItem ? "Remove from Cart" : "Add to Cart"}
                  </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="loading">
          loading...
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
