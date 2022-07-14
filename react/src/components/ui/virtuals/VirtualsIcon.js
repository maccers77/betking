import { useEffect, useState } from "react";
import style from "./VirtualsIcon.module.css";

import VirtualsLogo from "./VirutalsLogo";
import Button from "../Button";

function VirtualsIcon(props) {
  const circumfrence = 25.1327;
  const waitTime = 180;
  const [status, setStatus] = useState("");
  const [countdown, setCountdown] = useState(parseInt(props.startTime));
  const [clock, setClock] = useState(circumfrence);
  const minutes = Math.floor(countdown / 60);
  const seconds = countdown - minutes * 60;

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countdown - 1);
      let percent = ((waitTime - countdown) / waitTime) * 100;
      setClock(circumfrence - (percent / 100) * circumfrence);
      if (countdown <= 30) {
        setStatus("live");
        if (countdown <= 0) {
          setCountdown(waitTime);
          setStatus("");
        }
      } else {
        setStatus("");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [countdown]);

  if (props.variant === "instant") {
    return (
      <div
        className={`${style.gameIcon} ${style[props.game]} ${style.instant}`}
      >
        {props.text}
        <VirtualsLogo game={props.game} variant="instant" />
        <Button variant="secondary">Play</Button>
      </div>
    );
  }

  return (
    <div className={`${style.gameIcon} ${style[props.game]} ${props.style} ${style[status]} ${style[props.variant]}`}>
      {props.text}
      <VirtualsLogo game={props.game} />
      <div>
        <div className={style.liveContainer}>
          <span>Live</span> <div className={style.liveRing}></div>
        </div>

        <div className={style.progressContainer}>
          <span>{minutes}:{seconds < 10 ? "0" : ""}{seconds}</span>
          <svg className={style.progressRing} height="18" width="18">
            <circle
              className={style.progressRing__track}
              strokeWidth="8"
              fill="transparent"
              r="4"
              cx="8"
              cy="8"
            ></circle>
            <circle
              className={style.progressRing__circle}
              strokeWidth="8"
              fill="transparent"
              r="4"
              cx="8"
              cy="8"
              strokeDasharray={`${circumfrence} ${circumfrence}`}
              strokeDashoffset={clock}
            ></circle>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default VirtualsIcon;
