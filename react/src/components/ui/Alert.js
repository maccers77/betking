import { useState } from 'react';
import classNames from 'classnames';

import style from './Alert.module.css';


function Alert(props) {
  const [animate, setAnimate] = useState(false);
  
  return (
    <div className={classNames(style.alert, props.animate && style.show)}>
      <span className="material-icons-round">error_outline</span>
      {props.text}
    </div>
  );
}

export default Alert;
