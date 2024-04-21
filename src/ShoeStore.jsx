import { useEffect, useState } from "react";
import ProductList from "./component/ProductList";
import ProductItem from "./component/ProductItem";
import Modal from "./component/Modal/Modal";
import PaymentModalContent from "./component/Modal/PaymentModalContent";
import ProductModalContent from "./component/Modal/ProductModalContent";
import ButtonCart from "./component/ButtonCart";
import Toast from "./component/Toast";

import data from "../data-backup.json";
const products = data;

const ShoeStore = () => {
  const [contentModal, setContentModal] = useState({
    key: "cart",
    data: [],
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState({
    status: "",
    content: "",
  });

  useEffect(() => {
    toggleModal(false);
    let configContentModal = {
      key: "payment",
      data: cart,
    };
    setContentModal(configContentModal);
  }, [cart]);

  const toggleModal = (isShow) => {
    setModalVisible(isShow);
  };

  const handleProductDetail = (product) => {
    toggleModal(true);
    let configContentModal = {
      key: "product",
      data: product,
    };
    setContentModal(configContentModal);
  };

  const handleButtonCart = () => {
    if (cart.length === 0) {
      setToast({
        status: "danger",
        content: "Empty Cart",
      });
      return;
    }

    toggleModal(true);
    let configContentModal = {
      key: "payment",
      data: cart,
    };
    setContentModal(configContentModal);
  };

  const handleAddToCart = (item) => {
    let cloneCart = [...cart];
    const idxProduct = cloneCart.findIndex((prod) => prod.info.id === item.id);

    if (idxProduct !== -1) cloneCart[idxProduct].quantity += 1;
    else {
      const newItem = {
        info: item,
        quantity: 1,
      };
      cloneCart.push(newItem);
    }
    setCart([...cloneCart]);
  };

  const handleCart = (action) => {
    setCart([]);
    setToast({
      status: action === "purchase" ? "success" : "primary",
      content: action === "purchase" ? "Thank you" : "Clear Cart",
    });
  };

  return (
    <div className="container">
      <h1 className="text-center py-2 mb-3">Shoes Shop</h1>

      {/* Product List */}
      <ProductList>
        {products.map((prod) => {
          return (
            <div key={prod.id} className="col-12 col-md-4 col-lg-3 mb-4">
              <ProductItem
                prod={prod}
                handleProductDetail={handleProductDetail}
                handleAddToCart={handleAddToCart}
              />
            </div>
          );
        })}
      </ProductList>

      {/* Modal */}
      {modalVisible && (
        <Modal modalVisible={modalVisible}>
          {contentModal.key === "payment" ? (
            <PaymentModalContent
              listProd={contentModal.data}
              handleCart={handleCart}
              toggleModal={toggleModal}
            />
          ) : (
            <ProductModalContent
              prod={contentModal.data}
              handleAddToCart={handleAddToCart}
              toggleModal={toggleModal}
            />
          )}
        </Modal>
      )}

      {/* Button Cart */}
      <div className="position-fixed top-50 end-0 translate-middle" style={{width: '50px', height: '50px'}}>
        <ButtonCart count={cart.length} handleButtonCart={handleButtonCart} />
      </div>

      {/* Toast component */}
      <Toast config={toast} />
    </div>
  );
};

export default ShoeStore;
