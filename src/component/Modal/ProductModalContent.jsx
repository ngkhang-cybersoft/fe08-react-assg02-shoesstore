const ProductModalContent = (props) => {
  const { prod, toggleModal, handleAddToCart } = props;
  return (
    <>
      <div className="modal-header">
        <h5 className="modal-title fs-4" id="modalTitleId">
          Product Detail
        </h5>
        <button
          type="button"
          className="btn-close"
          onClick={() => toggleModal(false)}
        />
      </div>
      <div className="modal-body">
        <h3 className="text-center mb-5">{prod.name}</h3>
        <div className="row">
          <div className="col-4">
            <img src={prod.image} alt={prod.name} className="img-fluid" />
          </div>
          <div className="col-8 fs-5">
            <p>
              Price: $<span className="fs-3 fw-bold">{prod.price}</span>
            </p>
            <p>Quantity: {prod.quantity}</p>
            <p>{prod.description}</p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => handleAddToCart(prod)}
        >
          Add to Cart
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => toggleModal(false)}
        >
          Close
        </button>
      </div>
    </>
  );
};

export default ProductModalContent;
