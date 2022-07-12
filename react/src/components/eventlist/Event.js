import { NavLink } from "react-router-dom";
import Moment from "moment";
import seoFriendlyURL from "../../features/seoFriendlyURL";

import Market from "./Market";
import style from "./Event.module.css";

function Event(props) {
  const markets = [];

  for (const key in props.event.markets) {
    const market = {
      key: key,
      ...props.event.markets[key],
    };

    markets.push(market);
  }

  markets.map((market) => {
    market["eventDate"] = props.event.eventDate;
    market["eventName"] = props.event.eventName;
    market["eventId"] = props.event.eventId;
  });

  function formatDate(dt) {
    return Moment(dt).format("Do MMM HH:mm");
  }

  return (
    <div className={style.event}>
      <div className={style.dateAndComp}>
        <span className={style.date}>{formatDate(props.event.eventDate)}</span>{" "}
        {props.event.competitionName}
      </div>
      <div className={style.details}>
        <div className={style.name}>
          <div className={style.stats}>
            <span className="material-icons-round">bar_chart</span>
          </div>
          <div className={style.details}>
            <div className={style.teams}>
              <NavLink
                to={seoFriendlyURL({
                  string:
                    "/sports/football/events/" +
                    props.event.eventId +
                    "/" +
                    props.event.eventDate +
                    "/" +
                    props.event.eventName.replace("/", ''),
                })}
              >
                <div>{props.event.participant1}</div>
                <div>{props.event.participant2}</div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className={style.markets}>
          {markets.map((market) => (
            <Market key={market.marketId} market={market} />
          ))}
        </div>
        <div className={style.icon}>
          <NavLink
            to={seoFriendlyURL({
              string:
                "/sports/football/events/" +
                props.event.eventId +
                "/" +
                props.event.eventDate +
                "/" +
                props.event.eventName.replace("/", ''),
            })}
          >
            <span className="material-icons-round">chevron_right</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Event;
