import { useSelector, useDispatch } from 'react-redux'
import { toggleMenuState } from '../../features/menuStateSlice'

import style from "./Nav.module.css";
import TextField from "../ui/TextField";


function Nav(props) {
  const dispatch = useDispatch()
  const menuState = useSelector((state) => state.menuState.value)

  function toggleMenu() {
    dispatch(toggleMenuState())
  }

  return (
    <nav className={`${style.nav} ${style[menuState]}`}>
      <div className={style.navContents}>
      <div className={style.searchContainer}>
        <TextField
          icon="search"
          label="Search"
          placeholder="Looking for something?"
          variant="small"
        />
      </div>
      {props.navData.map((group) => (
        <div key={group.key}>
          {group.title ? (
            <span className={style.subHeading}>{group.title}</span>
          ) : (
            ""
          )}
          <ul>
            {group.items.map((item) => (
              <li key={item.key}>
                <div className={style.listItem}>
                  <span className="material-icons-round">{item.icon}</span>
                  <span className={style.text}>{item.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
      </div>
      <div className={style.background} onClick={toggleMenu}></div>
    </nav>
  );
}

export default Nav;
