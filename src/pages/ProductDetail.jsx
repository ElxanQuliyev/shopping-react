import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import storeApi from "../api/storeApi";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { useBasket } from "../context/BasketContext";
import {useQuery} from "react-query";
const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, items }=useBasket();
  const {data,isError,isLoading}  =  useQuery(["products",id],()=>(storeApi.getProduct(id)));
  if(isLoading){
    return (<div className="container">
      <div className="row my-5 justify-content-center align-items-center">
        <div className="col-lg-4">
          <Skeleton count={8}/>
        </div>
        <div className="col-lg-6">
        <Skeleton width={"100%"} />
        <Skeleton width={"45%"}/>
        <Skeleton width={"60%"}/>
        <Skeleton width={"25%"}/>
        </div>
      </div>
    </div>);
  }
  if(isError){
    return (<div>Error...</div>);
  }

  const findBasketItem = items.find((item) => item.id === Number(id));
  return (
    <div className="product-detail py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
                <div className="pro-img">
                     <img className="img-fluid" src={data.image} alt={data.title} />
                </div>
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
    </div>
  );
};

export default ProductDetail;
