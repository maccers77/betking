import classNames from 'classnames';

import style from './Backdrop.module.css'

function Backdrop(props) {
    return <div className={classNames(style.backdrop, props.animate && style.show)} onClick={props.onClose} ></div>
}

export default Backdrop;