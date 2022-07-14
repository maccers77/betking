import { NavLink, useParams } from "react-router-dom";
import Breadcrumb from "../../components/ui/Breadcrumb";

import VirtualsIcon from "../../components/ui/virtuals/VirtualsIcon";
import style from "./VirtualGame.module.css";

function VirtualGame() {
  const params = useParams();
  return (
    <>
      <Breadcrumb path={[{ key: 1, name: "Virtuals", path: "/virtuals" }]} />
      <article>
        <div>
          <div>
            <ul className={`${style.virtualTabs} ${style[params.game]}`}>
              <NavLink
                className={(navData) => (navData.isActive ? style.active : "")}
                to="/virtuals/kings-league"
              >
                <li>
                  <VirtualsIcon
                    variant="tab"
                    game="kingsLeague"
                    startTime="30"
                    style={style.kingsLeague}
                  />
                </li>
              </NavLink>
              <NavLink
                className={(navData) => (navData.isActive ? style.active : "")}
                to="/virtuals/kings-liga"
              >
                <li>
                  <VirtualsIcon
                    variant="tab"
                    game="kingsLiga"
                    startTime="180"
                    style={style.kingsLiga}
                  />
                </li>
              </NavLink>
              <NavLink
                className={(navData) => (navData.isActive ? style.active : "")}
                to="/virtuals/kings-italiano"
              >
                <li>
                  <VirtualsIcon
                    variant="tab"
                    game="kingsItaliano"
                    startTime="60"
                    style={style.kingsItaliano}
                  />
                </li>
              </NavLink>
              <NavLink
                className={(navData) => (navData.isActive ? style.active : "")}
                to="/virtuals/kings-bundliga"
              >
                <li>
                  <VirtualsIcon
                    variant="tab"
                    game="kingsBundliga"
                    startTime="120"
                    style={style.kingsBundliga}
                  />
                </li>
              </NavLink>
            </ul>
            <div className={`${style.weekSelector} ${style[params.game]}`}>
              <ul>
                <li className={style.selected}>Week 1</li>
                <li>Week 2</li>
                <li>Week 3</li>
                <li>Week 4</li>
              </ul>
              <span className="material-icons-round">bar_chart</span>
            </div>
          </div>
          {params.game}
        </div>
      </article>
    </>
  );
}

export default VirtualGame;
