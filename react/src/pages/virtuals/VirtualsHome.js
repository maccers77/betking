import { NavLink } from "react-router-dom";

import JackpotTicker from "../../components/ui/JackpotTicker";
import VirtualsIcon from "../../components/ui/virtuals/VirtualsIcon";
import style from "./VirtualsHome.module.css";

function VirtualsHome() {
  return (
    <>
      <article>
        <div className={style.virtualsLobby}>
          <div className={style.jackpots}>
            <div className={style.jackpotsInner}>
              <div className={style.jackpot}>
                <div className={style.supportingText}>The KingMaker</div>
                Virtual Football Jackpot
                <JackpotTicker
                  tick="1000"
                  tickAmount="8"
                  value="891876"
                  currency="₦"
                  style="kingmaker"
                />
                <div className={style.winner}>
                  Won on average every 2.5 days
                </div>
              </div>

              <div className={style.jackpot}>
                <div className={style.supportingText}>The Duke</div>
                Virtual Football Jackpot
                <JackpotTicker
                  tick="1000"
                  tickAmount="1"
                  value="7308"
                  currency="₦"
                  style="duke"
                />
                <div className={style.winner}>
                  Won on average every 32 minutes
                </div>
              </div>
            </div>
          </div>

          <div className={style.jackpotGames}>
            <div className={style.leagueContainer}>
              <h2>Instant Play Virtual Football</h2>
              <div className={style.description}>
                Games kick-off as soon as you place your bet. Stick around
                and watch the action or skip straight to the results
              </div>
              <div className={style.leagues}>
                <NavLink to="/virtuals/kings-instaleague">
                  <VirtualsIcon game="kingsLeague" variant="instant" />
                </NavLink>
                <NavLink to="/virtuals/kings-instaliga">
                  <VirtualsIcon game="kingsLiga" variant="instant" />
                </NavLink>
              </div>
            </div>
            <div className={style.leagueContainer}>
              <h2>Scheduled Virtual Football</h2>
              <div className={style.description}>
                Kick-off is every 3 mins, get your bets on and enjoy the fun
              </div>
              <div className={style.leagues}>
                <NavLink to="/virtuals/kings-league">
                  <VirtualsIcon game="kingsLeague" startTime="30" />
                </NavLink>
                <NavLink to="/virtuals/kings-liga">
                  <VirtualsIcon game="kingsLiga" startTime="180" />
                </NavLink>
                <NavLink to="/virtuals/kings-italiano">
                  <VirtualsIcon game="kingsItaliano" startTime="60" />
                </NavLink>
                <NavLink to="/virtuals/kings-bundliga">
                  <VirtualsIcon game="kingsBundliga" startTime="120" />
                </NavLink>
              </div>
            </div>
          </div>
          <div className={style.moreContainer}>
            <div className={style.leagueContainer}>
              <h2>More Games</h2>
              <div className={style.leagues}>
                <VirtualsIcon
                  game=""
                  variant="instant"
                  text="Virtual Greyhounds"
                />
                <VirtualsIcon game="" variant="instant" text="Spin 2 Win" />
                <VirtualsIcon game="" variant="instant" text="Keno" />
                <VirtualsIcon game="" variant="instant" text="Colour Colour" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default VirtualsHome;
