import { ref, remove } from "firebase/database";
import { NavLink } from "react-router-dom";
import seoFriendlyURL from "../../features/seoFriendlyURL";
import db from "../firebase/Firebase";

import style from "./Selection.module.css";

function Selection(props) {
  const checkoutRef = ref(db, "checkout/" + props.selection.selectionId + "/");

  function removeSelection() {
    remove(checkoutRef);
  }


  return (
    <div
      className={`${style.selectionContainer} ${
        props.selection.related && style.related
      }`}
    >
      <div
        className={`${style.selection} ${props.selection.was && style.boosted}`}
      >
        <div className={style.selectionDetails}>
          <div className={style.selectionAndMarketName}>
            <span className={style.selectionName}>
              {props.selection.selectionName}
            </span>
            <span className={style.marketName}>
              {" "}
              - {props.selection.marketName}
            </span>
          </div>
          <div className={style.eventName}>
            <NavLink
              to={seoFriendlyURL({string:"/sports/football/events/"+props.selection.eventId+"/"+props.selection.eventDate+"/"+props.selection.eventName})}
            >
              {props.selection.eventName}
            </NavLink>
          </div>
        </div>
        <div className={style.right}>
          {props.selection.was ? (
            <span className={style.was}>{props.selection.was.toFixed(2)}</span>
          ) : null}
          {props.selection.selectionOdds.toFixed(2)}
          <span
            className={`${style.remove} ${
              props.selection.related && style.removeRelated
            } ${"material-icons-round"}`}
            onClick={removeSelection}
          >
            delete
          </span>
        </div>
      </div>
    </div>
  );
}

export default Selection;
