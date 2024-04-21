const ButtonCart = (props) => {
  const { count, handleButtonCart } = props;
  return (
    <div className='w-100 h-100'>
      <button
        type="button"
        className="btn btn-primary w-100 h-100 position-relative d-flex justify-content-center align-items-center p-2"
        onClick={() => handleButtonCart()
        }
      >
        <i className="fa-solid fa-cart-shopping fs-4"></i>
        <span className="h-50 w-50 position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger fs-6" style={{lineHeight: 'normal'}}>
          {count}
        </span>
      </button>
    </div>
  );
};

export default ButtonCart;
