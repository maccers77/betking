import { Link } from "react-router-dom";
import style from "./breadcrumb.module.css";

function Breadcrumb() {
  return (
    <div className={style.breadcrumb}>
      <ul>
        <li>
          <Link to={"/"}>
            <span className="material-icons-round">arrow_back</span>
          </Link>
        </li>
        <li data-page-url="/">
          Home
        </li>
        <li>Football</li>
      </ul>
    </div>
  );
}

export default Breadcrumb;
