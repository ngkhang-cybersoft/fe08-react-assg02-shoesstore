import Modal from "./component/Modal";
import ProductList from "./component/ProductList";

import data from "../data-backup.json";
import { useState } from "react";
const products = data;

const ShoeStore = () => {
  const [productDetail, setProductDetail] = useState({});

  return (
    <div className="container">
      <h1 className="text-center py-2 mb-3">Shoes Shop</h1>
      <ProductList
        productsData={products}
        setProductDetail={setProductDetail}
      />

      <Modal content={productDetail} />
    </div>
  );
};

export default ShoeStore;
