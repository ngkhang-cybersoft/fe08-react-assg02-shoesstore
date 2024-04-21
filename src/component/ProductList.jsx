const ProductList = (props) => {
  const {children } = props;

  return (
    <div className="container">
    <h3 className="text-center mb-5">Feature Product</h3>
      <div className="row mb-5">
        {children}
      </div>
    </div>
  );
};

export default ProductList;
