const ProductItem = (props) => {
  const { prod, handleProductDetail, handleAddToCart } = props;

  return (
    <div className="card h-100">
      <img
        className="card-img-top img-fluid"
        src={prod.image}
        alt={prod.name}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h4 className="card-title">{prod.name}</h4>
        <div>
          <p className="card-text">
            $<span className="fs-4">{prod.price}</span>
          </p>
          <p className="card-text text-truncate">{prod.shortDescription}</p>
        </div>
      </div>
      <div className="container">
        <div className="card-footer row justify-content-between py-2">
          <button
            type="button"
            className="btn btn-secondary col-12 col-md-5 py-3 mb-3 mb-md-0"
            onClick={() => handleProductDetail(prod)}
          >
            View Detail
          </button>
          <button
            type="button"
            className="btn btn-primary col-12 col-md-5 py-3"
            onClick={() => handleAddToCart(prod)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
