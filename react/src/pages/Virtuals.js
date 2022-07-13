import InnerLayout from "../components/layout/InnerLayout";
import Nav from "../components/layout/Nav";
import JackpotTicker from "../components/ui/JackpotTicker";
import VirtualsIcon from "../components/ui/virtuals/VirtualsIcon";
import style from "./Virtuals.module.css";

function Virtuals() {
  return (
    <>
      <Nav />
      <InnerLayout>
        <div className={style.virtualsLobby}>
          <div className={style.jackpots}>
            <div className={style.jackpotsInner}>
              <div className={style.jackpot}>
                The KingMaker
                <JackpotTicker
                  tick="1000"
                  tickAmount="8"
                  value="891876"
                  currency="₦"
                  style="kingmaker"
                />
                <div className={style.winner}>
                  Last won 2 days ago by Nwankwo O.
                </div>
              </div>
              <div className={style.supportingText}>
                <div>
                  <div>Virtual Jackpots</div>
                  Every Virtual Football bet has a chance of winning one of our
                  Virtual Jackpots
                </div>
              </div>
              <div className={style.jackpot}>
                The Duke
                <JackpotTicker
                  tick="1000"
                  tickAmount="1"
                  value="7308"
                  currency="₦"
                  style="duke"
                />
                <div className={style.winner}>
                  Last won 28 minutes ago by Emma O.
                </div>
              </div>
            </div>
          </div>

          <div className={style.jackpotGames}>
            <div className={style.leagueContainer}>
              <h2>Scheduled Virtual Football</h2>
              <div className={style.description}>
                Kick-off is every 3 mins, get your bets on and enjoy the fun
              </div>
              <div className={style.leagues}>
                <VirtualsIcon game="kingsLeague" startTime="30" />
                <VirtualsIcon game="kingsLiga" startTime="180" />
                <VirtualsIcon game="kingsItaliano" startTime="60" />
                <VirtualsIcon game="kingsBundliga" startTime="120" />
              </div>
            </div>
            <div className={style.leagueContainer}>
              <h2>Instant Play Virtual Football</h2>
              <div className={style.description}>
                Games kick-off as soon as you've placed your bet. Stick around
                and watch the action or skip straight to the results
              </div>
              <div className={style.leagues}>
                <VirtualsIcon game="kingsLeague" variant="instant" />
                <VirtualsIcon game="kingsLiga" variant="instant" />
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
      </InnerLayout>
    </>
  );
}

export default Virtuals;
