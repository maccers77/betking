import OddsButton from "../ui/OddsButton";
import style from "./Banners.module.css";
import Jersey from "./Jersey";

function Banners() {
  return (
    <div className={style.banners}>
      <div className={`${style.banner} ${style.headToHead}`}>
        <div className={`${style.slideInner} ${style.cyanGradientDarkToLight}`}>
          <div className={style.teams}>
            <div className={`${style.team} ${style.team1}`}>
              Liverpool
              <div className={style.jerseyContainer}>
                <Jersey main="#C20026"  edges="#FA3B3D"/>
              </div>{" "}
            </div>
            <div className="versus">v</div>
            <div className={`${style.team} ${style.team2}`}>
              <div className={style.jerseyContainer}>
                <Jersey main="#B6E7F2"  edges="#ffffff"/>
              </div>{" "}
              Man. City
            </div>
          </div>
          <div className={style.market}>
            <div className={style.selection}>
              Home (1)
              <button className="odds">3.15</button>
            </div>
            <div className={style.selection}>
              Draw (X)
              <button className="odds">3.15</button>
            </div>
            <div className={style.selection}>
              Away (2)
              <button className="odds">3.15</button>
            </div>
          </div>
        </div>
      </div>

      <a className={style.prev}>
        <span className="material-icons-round">navigate_before</span>
      </a>
      <a className={style.next}>
        <span className="material-icons-round">navigate_next</span>
      </a>
    </div>
  );
}

export default Banners;
