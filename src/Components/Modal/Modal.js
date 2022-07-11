import React, { useContext } from "react";
import "./Modal.css";
import { languages } from "../../language";
import ThemeContext from "../../context/ThemeContext";
import { FaWrench } from "react-icons/fa";

const Modal = (props) => {
  const { lang } = useContext(ThemeContext);
  const { children,childrenFooter, modalName, title } = props;
  return (
    <>
      <div
        className="modal fade"
        id={modalName}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content card-web">
            <div className="modal-header">
              <h5 className="card-title card-title-web">{title}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              {childrenFooter}
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
    </>
  );
};



export default Modal;
