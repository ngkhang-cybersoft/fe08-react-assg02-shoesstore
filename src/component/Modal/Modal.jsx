const Modal = (props) => {
  const {children, modalVisible} = props;
  return (
    <div
      className={`modal fade ${modalVisible && 'show d-block'} bg-secondary bg-opacity-75`}
      id="modalId"
      >
      <div
        className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg"
        role="document"

      >
        <div className="modal-content shadow-lg">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
