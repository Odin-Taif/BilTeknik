import { useEffect } from "react";

import style from "./loginModal.module.scss";
import Login from "./loginIn";

function LoginModal(props) {
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanUp() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  });

  if (!props.show) {
    return null;
  }
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };
  return (
    <div className={style.modal} onClick={props.onClose}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={style.modalBody}>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
