import ProductItem from "./ProductItem";

const ProductList = (props) => {
  const { productsData, setProductDetail } = props;

  return (
    <div className="container">
    ` <h3 className="text-center mb-5">Feature Product</h3>
      <div className="row mb-5">
        {productsData.map((product) => {
          return (
            <div key={product.id} className="col-12 col-md-4 col-lg-3 mb-4">
              <ProductItem item={product} setProductDetail={setProductDetail} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
