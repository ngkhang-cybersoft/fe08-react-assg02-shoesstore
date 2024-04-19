const Modal = (props) => {
  const { content } = props;

  return (
    <div
      className="modal fade"
      id="modalId"
      tabIndex={-1}
      data-bs-keyboard="false"
      role="dialog"
      aria-labelledby="modalTitleId"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalTitleId">
              Product Detail
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <h3 className="text-center mb-5">{content.name}</h3>
            <div className="row">
              <div className="col-4">
                <img
                  src={content.image}
                  alt={content.name}
                  className="img-fluid"
                />
              </div>
              <div className="col-8 fs-5">
                <p>
                  Price: $<span className="fs-3 fw-bold">{content.price}</span>
                </p>
                <p>Quantity: {content.quantity}</p>
                <p>{content.description}</p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
