import { useState } from 'react';

import style from './Button.module.css';

function Button(props) {
    const [left, setLeft] = useState('0px');
    const [top, setTop] = useState('0px');
    const [clicked, setClicked] = useState('');

    function buttonClickedHandler(event) {
        let bounds = event.currentTarget.getBoundingClientRect();
        let x = event.clientX - bounds.left;
        let y = event.clientY - bounds.top;

        setTop(y+'px');
        setLeft(x+'px');
        setClicked(style.clicked);

        setTimeout(() => {setClicked('');},400);

        props.onClick();
    }

    return <button className={[style.button, style[props.variant], props.icon ? style.icon : null].join(' ')}  onClick={buttonClickedHandler}>
        {props.icon ? <span className='material-icons-round'>{props.icon}</span> : null}
        <span className={style.buttonContent}>{props.children}</span>
        <span className={[style.click, clicked].join(' ')} style={{left:left,top:top}}></span> 
    </button>
}

export default Button;