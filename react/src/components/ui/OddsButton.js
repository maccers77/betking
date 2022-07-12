import { ref, onValue, set, remove, serverTimestamp } from "firebase/database";
import { useSelector, useDispatch } from 'react-redux'

import db from "../firebase/Firebase";

import style from "./OddsButton.module.css";

function OddsButton(props) {
  const checkoutRef = ref(db, "checkout/" + props.selection.selectionId + "/");
  const checkoutSelections = useSelector((state) => state.checkoutSelections.value)
  const lessThan = useSelector((state) => state.lessThan.value.to)
  const moreThan = useSelector((state) => state.lessThan.value.from)

  function addToBasket(event) {
    if (checkoutSelections.includes(props.selection.selectionId)) {
      remove(checkoutRef);
    } else {
      fetch('/addSelection',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(props.selection)
      }).then(
        // response => console.log(response)
      );
    }
  }

  function unavailable() {
    alert('There are currently no odds available for this selection');
  }

  return (
    <button
      className={`${style.odds} ${props.selection.was && style.boost} ${
        props.selection.was && "boost"
      } ${!props.selection.selectionOdds && style.disabled} ${checkoutSelections.includes(props.selection.selectionId) && style.selected} ${props.selection.selectionOdds >= lessThan  && style.noMatch} ${props.selection.selectionOdds <= moreThan  && style.noMatch}  `}
      onClick={props.selection.selectionOdds ? (
        addToBasket
      ) : unavailable}
      data-selection-id={props.selection.selectionId}
    >
      {props.selection.selectionOdds ? (
        props.selection.selectionOdds.toFixed(2)
      ) : "-"}
      {props.selection.was ? (
        <span className={style.was}>{props.selection.was.toFixed(2)}</span>
      ) : null}
    </button>
  );
}

export default OddsButton;
