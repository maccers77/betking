import classNames from "classnames";
import Button from "../Button";
import Backdrop from "./Backdrop";
import style from "./Modal.module.css";

function Modal(props) {
  return (
    <div className={style.modalContainer}>
      <Backdrop onClose={props.onClose} animate={props.animate} />
      <div className={classNames(style.modal, props.animate && style.show)}>
        <div className={style.modalHeader}> 
          <span>{props.title}</span>
          <span onClick={props.onClose} className="material-icons-round">close</span>
        </div>
        <div className={style.modalContent}>
          {props.children}

          <div className={style.actions}>
            <Button variant="tertiary">{props.tertiary}</Button>
            <Button>{props.primary}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
