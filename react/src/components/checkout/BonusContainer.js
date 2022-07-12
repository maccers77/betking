import { useState } from "react";
import style from "./BonusContainer.module.css";

import Modal from "../ui/modal/Modal";
import Button from "../ui/Button";

function BonusContainer(props) {
  const [animate, setAnimate] = useState(false);

  function showModalHandler() {
    setAnimate(!animate);
  }
  function closeModalHandler() {
    setAnimate(false);
  }

  return (
    <>
      <div className={`${style.bonusContainerButton} ${props.animate && style.show}`} onClick={showModalHandler}>
        <div>
          <div className={style.percentageContainer}>
            <span className="material-icons-round">verified</span>
          </div>

          <div className={style.bonusContainerButtonDetails}>
            Acca Bonus Applied
            <div className={style.details}>5% added to winnings</div>
          </div>
        </div>
        <div>Change</div>
      </div>
      <Modal onClose={closeModalHandler} animate={animate} title="Offer Picker" primary="Done" tertiary="Cancel">
        <div className={style.bonusList}>
          <div className={`${style.bonus} ${style.selected}`}>
            <div>
              <h3>Acca Bonus</h3>
              {"Our most popular Bonus.  Add an additional 5% to your winnings for each selection you add to your acca (Min 5 selections)"}
            </div>
          </div>
          <div className={style.bonus}>
            <div>
                <h3>1x MegaBoost</h3>
                {"You have one MegaBoost remain.  Apply this to a bet of your choosing"}
              </div>
          </div>
          <div className={style.bonus}>
            <div>
              <h3>3x Free Bets</h3>
              {"You have three FREE bets remaining.  You can use this on any multiple containing over 3 selections"}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
export default BonusContainer;
