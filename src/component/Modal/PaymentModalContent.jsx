const PaymentModalContent = (props) => {
  const {listProd, toggleModal, handleCart} = props;

  const handleTotal = (list) =>
  list.reduce(
    (total, item) => (total = total + item.info.price * item.quantity),
    0
  );
  return (
    <>
      <div className="modal-header">
        <h5 className="modal-title fs-4" id="modalTitleId">
          Payment
        </h5>
        <button
          type="button"
          className="btn-close"
          onClick={() => toggleModal(false)}
        />
      </div>
      <div className="modal-body fs-5">
        <div className="table-responsive-md">
          <table className="table table-primary text-center">
            <thead>
              <tr>
                <th>STT</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {listProd.map((item, index) => {
                return (
                  <tr key={item.info.id}>
                    <td>{index + 1}</td>
                    <td className="text-start">{item.info.name}</td>
                    <td>{item.info.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.quantity * item.info.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="modal-footer d-block">
        <div className="text-end fs-4">
          <p>
            Quantity: <span className="fs-3 fw-bold">{listProd.length}</span>
          </p>
          <p>
            Total: $
            <span className="fs-3 fw-bold">{handleTotal(listProd)}</span>
          </p>
        </div>
        <div className="row justify-content-end">
          <button
            type="button"
            className="btn btn-success col-12 col-md-3 me-md-3"
            onClick={() => handleCart('purchase')}
          >
            Purchase
          </button>
          <button
            type="button"
            className="btn btn-secondary col-12 col-md-3"
            onClick={() => handleCart('clear')}
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
}

export default PaymentModalContent;
