import { Link, useParams } from "react-router-dom";
import style from "./breadcrumb.module.css";

function Breadcrumb(props) {
  return (
    <div className={style.breadcrumb}>
      <ul>
        <li>
          <Link to={"/"}>
            <span className="material-icons-round">home</span>
          </Link>
        </li>
        {props.path.map((item) => (
          <li key={item.key}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Breadcrumb;
