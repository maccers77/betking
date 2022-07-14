import { useEffect, useState } from "react";

import style from "./JackpotTicker.module.css";

function JackpotTicker(props) {
  const [counter, setCounter] = useState(props.value);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(parseInt(counter) + parseInt(props.tickAmount));
    }, props.tick);
    return () => clearInterval(interval);
  }, [counter]);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className={`${style[props.style]} ${style.jackpotValue} ticker`}>
      <span>{props.currency}</span> {numberWithCommas(counter)}
    </div>
  );
}

export default JackpotTicker;
