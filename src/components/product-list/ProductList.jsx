import React, { useEffect, useState } from "react";
import storeApi from "../../api/storeApi";
import ProductItem from "../product-item/ProductItem";
import "./product-list.scss";
const ProductList = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    storeApi.getProducts().then((item) => setProductList(item));
  }, []);

  return (
    <div>
      {productList.length > 0 ? (
        <div className="row">
          {productList.map((pro) => (
            <ProductItem key={pro.id} item={pro} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ProductList;
