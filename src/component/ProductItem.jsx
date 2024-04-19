const ProductItem = (props) => {
  const { item, setProductDetail } = props;

  return (
    <div className="card h-100">
      <img className="card-img-top img-fluid" src={item.image} alt="Title" />
      <div className="card-body d-flex flex-column justify-content-between">
        <h4 className="card-title">{item.name}</h4>
        <div>
          <p className="card-text">$<span className='fs-4'>{item.price}</span></p>
          <p className="card-text text-truncate">{item.shortDescription}</p>
        </div>
      </div>
      <div className="card-footer py-2">
        <button
          type="button"
          className="btn btn-primary w-100"
          data-bs-toggle="modal"
          data-bs-target="#modalId"
          onClick={() => {
            setProductDetail(item);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
