import { useEffect } from 'react';

const Toast = (props) => {
  const { config } = props;
  
  useEffect(() => {
    if(config.status && config.content) {
      let toastEle = document.getElementById("liveToast");
      let toast = new window.bootstrap.Toast(toastEle);
      toast.show();
    }
  },[config])

  return (
    <div>
      <div className="toast-container position-fixed bottom-0 end-0 p-3 ">
        <div
          id="liveToast"
          className={`toast border-2 border-${config.status}`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header align-items-center">
            <img src="/vite.svg" className="rounded me-1 img-fluid" alt="..." />
            <strong className="me-auto fs-5">Shoes Shop</strong>
            <span className='d-inline-block fs-5 me-3'>{(new Date()).getHours()} : {(new Date()).getMinutes()}</span>
            <button
              type="button"
              className="btn-close m-0"
              data-bs-dismiss="toast"
              aria-label="Close"
            />
          </div>
          <div
            className={`toast-body fs-5 text-${config.status}`}
          >
            {config.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toast;
