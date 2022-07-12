import { useState, useEffect } from "react";
import {
  ref,
  onValue,
  onChildRemoved,
  orderByChild,
  query,
} from "firebase/database";
import { useDispatch } from 'react-redux'
import { addToBasket, clearBasket } from '../../features/checkoutSlice'

import db from "../firebase/Firebase";
import TextField from "../ui/TextField";
import style from "./Checkout.module.css";
import Selection from "./Selection";
import Button from "../ui/Button";
import IncrementalValues from "../ui/IncrementalValues";
import Alert from "../ui/Alert";
import Tabs from "../ui/Tabs";
import BonusContainer from "./BonusContainer";

function Checkout(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedSelections, setLoadedSelections] = useState([]);
  const [stakeValue, setStakeValue] = useState(100);
  const [errorInSelections, setErrorInSelections] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [betTypes, setBetTypes] = useState(false);

  const checkoutRef = query(ref(db, "checkout"), orderByChild("added"));

  const dispatch = useDispatch()

 

  useEffect(() => {
    onValue(checkoutRef, (snapshot) => {
      const selections = [];
      const selectionIds = [];
      setErrorInSelections(false);
      setAlertText("");

      dispatch(clearBasket());

      snapshot.forEach(function (child) {
        selectionIds.push(child.val().eventId);
        dispatch(addToBasket(child.val().selectionId));
      });

      snapshot.forEach(function (child) {
        
        let counter = 0;
        selectionIds.forEach(function (selectionId) {
          if (selectionId == child.val().eventId) {
            counter++;
          }
        });

        let related = false;
        if (counter > 1) {
          related = true;
          setErrorInSelections(true);
          setAlertText("Some of your selections cannot be combined");
        }

        const selection = {
          key: child.val().selectionId,
          related: related,
          ...child.val(),
        };

        selections.push(selection);

        // document
        //   .querySelectorAll(
        //     '[data-selection-id="' + selection.selectionId + '"]'
        //   )
        //   .forEach(function (sel) {
        //     sel.classList.add("oddsSelected");
        //   });
      });

      setIsLoading(false);
      setLoadedSelections(selections);

      if (selections.length > 1) {
        if (selections.length > 4) {
          setBetTypes([
            { name: "Singles"},
            { name: "Multiple"},
            { name: "FlexiCut", new: true },
          ]);
        } else {
          setBetTypes([
            { name: "Singles" },
            { name: "Multiple" },
          ]);
        }
      } else {
        setBetTypes(false);
      }
    });

    onChildRemoved(checkoutRef, (snapshot) => {
      const removeData = snapshot.val();
      document
        .querySelectorAll(
          '[data-selection-id="' + removeData.selectionId + '"]'
        )
        .forEach(function (sel) {
          sel.classList.remove("oddsSelected");
        });
    });
  }, []);


  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  let checkoutIsEmpty;
  const totalSelectionHeight = {
    height:
      loadedSelections.length * 57 +
      24 +
      (loadedSelections.length - 1) * 12 +
      "px",
  };
  if (loadedSelections.length === 0) {
    checkoutIsEmpty = style.empty;
  }

  function incrementHandler(event, val) {
    setStakeValue(parseFloat(stakeValue) + parseFloat(val));
  }
  function changeHandler(event) {
    setStakeValue(event.target.value);
  }

  let showBonusContainer = "";
  if (loadedSelections.length > 4) {
    showBonusContainer = <BonusContainer animate={true} />;
  }

  return (
    <div className={[style.checkout, checkoutIsEmpty].join(" ")}>
      <div className={style.header}>
        <div>
          <div className="label">Your Balance</div>
          <div>₦ 0.00</div>
        </div>
        <span className="material-icons-round close">expand_more</span>
      </div>
      <div
        className={`${style.selections} ${
          errorInSelections && style.selectionError
        }`}
        style={totalSelectionHeight}
      >
        {loadedSelections.map((selection) => (
          <Selection key={selection.key} selection={selection} />
        ))}
      </div>

      <Alert text={alertText} animate={alertText} />

      <div className={style.totals}>
        <Tabs tabs={betTypes} activeTab="Multiple" />

        {showBonusContainer}

        <div className={style.stakeContainer}>
          <IncrementalValues onClick={incrementHandler} />
          <TextField
            placeholder="0.00"
            label=""
            variant="currency"
            preText="₦"
            val={stakeValue.toFixed(2)}
            onChange={changeHandler}
          />
        </div>

        <div className={style.winningsContainer}>
          <span className="label">
            Potential Winnings{" "}
            <div className="material-icons-round info">info</div>
          </span>
          <div className={style.winningsInnerContainer}>
            <div className={style.winnings}>
              <div className="symbol">₦</div>
              <div className="amount">10,417.00</div>
            </div>
          </div>
        </div>
        <div className={style.actions}>
          <Button variant="tertiary">Share/Book</Button>
          <Button>Place Bet</Button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
