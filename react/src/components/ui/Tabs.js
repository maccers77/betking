import { useState, useRef, useEffect } from 'react';


import style from './Tabs.module.css';

function Tabs(props) {
  const [activeTab, setActiveTab] = useState(props.activeTab);
  const [indicatorStyle, setIndicatorStyle] = useState({width:"0px",left:"0px"});
  const selectedElement = useRef(null);


  useEffect(() => {
    if(selectedElement.current) {
      setIndicatorStyle({
        width: selectedElement.current.offsetWidth+'px',
        left: selectedElement.current.offsetLeft+'px'
      });
    }
  }, [])


  if(!props.tabs){
    return null; 
  }

  function clickHandler(event, i) {
    setActiveTab(i);
    setIndicatorStyle({
      width: event.currentTarget.offsetWidth+'px',
      left: event.currentTarget.offsetLeft+'px'
    });
  }


  return <ul className={[style.tabs, style[props.variant]].join(' ')} >
    {props.variant ? "" : <span className={style.selector} style={indicatorStyle}></span>}
    {props.tabs.map((tab) => (
          <li ref={activeTab === tab.name ? selectedElement : null} key={tab.name} className={activeTab === tab.name ? style.selected : ""} onClick={event => clickHandler(event, tab.name)}>{tab.icon ? (<span className="material-icons-round">{tab.icon}</span>) : null} {tab.name} {tab.new ? (<span className={style.new}>NEW</span>) : null}</li>
    ))}
  </ul>
}

export default Tabs;