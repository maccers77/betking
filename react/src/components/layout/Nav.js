import style from "./Nav.module.css";
import TextField from "../ui/TextField";

function Nav() {
  return (
    <nav className={style.nav}>
      <div className={style.searchContainer}>
        <TextField
          icon="search"
          label="Search"
          placeholder="Looking for something?"
          variant="small"
        />
      </div>
      <ul>
        <li>
          <div className={style.listItem}>
            <span className="material-icons-round">home</span>
            <span className={style.text}>Sports Home</span>
          </div>
        </li>
      </ul>
      <span className={style.subHeading}>Farourites</span>
      <ul>
        <li>
          <div className={style.listItem}>
            <span className="material-icons-round">sports_soccer</span>
            <span className={style.text}>Football</span>
          </div>
        </li>
        <li>
          <div className={style.listItem}>
            <span className="material-icons-round">sports_basketball</span>
            <span className={style.text}>Basketball</span>
          </div>
        </li>
        <li>
          <div className={style.listItem}>
            <span className="material-icons-round">sports_tennis</span>
            <span className={style.text}>Tennis</span>
          </div>
        </li>
        <li>
          <div className={style.listItem}>
            <span className="material-icons-round">more_horiz</span>
            <span className={style.text}>A-Z Sports</span>
          </div>
        </li>
      </ul>

      <span className={style.subHeading}>Toolbox</span>
      <ul>
        <li>
          <div className={style.listItem}>
            <span className="material-icons-round">format_list_bulleted</span>
            <span className={style.text}>My Bets</span>
          </div>
        </li>
        <li>
          <div className={style.listItem}>
            <span className="material-icons-round">qr_code</span>
            <span className={style.text}>Enter Booking Code</span>
          </div>
        </li>
        <li>
          <div className={style.listItem}>
            <span className="material-icons-round">checklist</span>
            <span className={style.text}>Check Coupon</span>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
