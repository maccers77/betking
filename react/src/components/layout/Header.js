import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { toggleMenuState } from '../../features/menuStateSlice'

import style from "./Header.module.css";
import Button from "../ui/Button";
import JoinButton from "../buttons/joinButton/JoinButton";
import TextField from "../ui/TextField";
import Modal from '../ui/modal/Modal';

function Header(props) {
  const dispatch = useDispatch();
  const [animate, setAnimate] = useState(false);


  function showModalHandler() {
    setAnimate(!animate);
  }
  function closeModalHandler() {
    setAnimate(false);
  }
  function toggleMenu() {
    dispatch(toggleMenuState())
  }


  return (
    <>
    <header className={style.header}>
      <div className={style.headerInnerContent}>
        <div className={style.left}>
          <span className={[style.hamburgerMenu, "material-icons-round"].join(" ")} onClick={toggleMenu}>
            menu
          </span>
          <svg width="88" height="32" viewBox="0 0 88 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M37.7884 0L41.48 2.31565L45.172 0L48.8638 2.31565L52.5554 0V6.21986H37.7884V0Z" fill="#FFC400"></path>
              <path d="M41.9338 25.3104H37.7884V8.29309H41.9338V25.3104Z" fill="white"></path>
              <path d="M42.3483 16.8017L47.6826 8.29309H52.5553L47.221 16.8017L52.5553 25.3104H47.6826L42.3483 16.8017Z" fill="white"></path>
              <path d="M53.216 11.801H57.3616V25.3105H53.216V11.801Z" fill="white"></path>
              <path d="M68.1059 17.9844C68.1059 16.1415 67.0876 15.123 65.5118 15.123C63.9363 15.123 62.9179 16.1415 62.9179 17.9844V25.3102H58.7723V11.8009H62.9179V13.5954C63.7424 12.4556 65.1967 11.6555 67.0149 11.6555C70.1424 11.6555 72.2271 13.7893 72.2271 17.4266V25.3102H68.1059V17.9844Z" fill="white"></path>
              <path d="M80.4672 15.2201C78.9157 15.2201 77.5098 16.384 77.5098 18.5421C77.5098 20.7002 78.9157 21.9126 80.4672 21.9126C82.043 21.9126 83.4249 20.7244 83.4249 18.5664C83.4249 16.4083 82.043 15.2201 80.4672 15.2201ZM79.2552 11.6071C81.243 11.6071 82.6976 12.5042 83.4249 13.7167V11.8011H87.5705V25.3075C87.5705 28.9204 85.4854 32.0001 80.8068 32.0001C76.7823 32.0001 74.1642 29.9632 73.8006 26.7382H77.8976C78.1642 27.7565 79.1825 28.4114 80.6129 28.4114C82.1884 28.4114 83.4249 27.5869 83.4249 25.3075V23.3918C82.6734 24.5801 81.243 25.5258 79.2552 25.5258C75.9338 25.5258 73.2915 22.81 73.2915 18.5421C73.2915 14.2744 75.9338 11.6071 79.2552 11.6071Z" fill="white"></path>
              <path d="M8.80932 21.4925C9.1886 21.1775 9.37878 20.7212 9.37878 20.1228C9.37878 19.5252 9.18068 19.056 8.78502 18.7171C8.38881 18.3776 7.84374 18.2077 7.14913 18.2077H4.14409V21.9651H7.1975C7.8921 21.9651 8.42948 21.8077 8.80932 21.4925ZM4.14409 15.1777H6.85822C7.53689 15.1777 8.05789 15.0283 8.42146 14.7295C8.78502 14.4308 8.96685 13.99 8.96685 13.408C8.96685 12.8268 8.78502 12.3819 8.42146 12.075C8.05789 11.768 7.53689 11.6146 6.85822 11.6146H4.14409V15.1777ZM12.6747 18.0502C13.2722 18.8183 13.5715 19.6951 13.5715 20.6803C13.5715 22.1023 13.0746 23.2296 12.0809 24.0622C11.0872 24.8948 9.70169 25.3104 7.92462 25.3104H0V8.29309H7.658C9.38669 8.29309 10.7396 8.68983 11.7175 9.48155C12.6947 10.2734 13.1836 11.3476 13.1836 12.7052C13.1836 13.7076 12.9208 14.5394 12.3961 15.2022C11.8707 15.865 11.1721 16.3254 10.2998 16.5834C11.285 16.794 12.0768 17.2829 12.6747 18.0502Z" fill="white"></path>
              <path d="M23.6118 17.2381C23.6118 16.527 23.3695 15.9622 22.8847 15.5418C22.4002 15.1214 21.7943 14.9108 21.0671 14.9108C20.3724 14.9108 19.7865 15.1133 19.3102 15.5173C18.8335 15.9214 18.5384 16.4952 18.4256 17.2381H23.6118ZM27.7802 19.5408H18.4013C18.4658 20.3816 18.7365 21.0241 19.2131 21.4681C19.6895 21.913 20.2755 22.135 20.9702 22.135C22.0039 22.135 22.7232 21.6984 23.1271 20.8257H27.5378C27.3113 21.7147 26.9036 22.5145 26.314 23.2256C25.7242 23.9375 24.9849 24.4948 24.0965 24.8981C23.2078 25.3023 22.2141 25.5047 21.1157 25.5047C19.7907 25.5047 18.6111 25.2215 17.5775 24.6558C16.5433 24.0899 15.7355 23.2826 15.1539 22.2321C14.5722 21.1815 14.2815 19.953 14.2815 18.5475C14.2815 17.1409 14.5682 15.9133 15.1419 14.8627C15.7151 13.8121 16.5189 13.0048 17.5532 12.4383C18.587 11.8734 19.7744 11.5901 21.1157 11.5901C22.4243 11.5901 23.5876 11.8652 24.6055 12.4146C25.6234 12.9639 26.4189 13.7476 26.9926 14.7656C27.5659 15.7834 27.8529 16.9719 27.8529 18.3295C27.8529 18.7172 27.8287 19.1213 27.7802 19.5408Z" fill="white"></path>
              <path d="M36.4609 21.7955V25.3105H34.3524C32.85 25.3105 31.6783 24.9432 30.8386 24.2077C29.9983 23.4722 29.5783 22.2722 29.5783 20.6077V15.2259H27.9303V11.801H29.5783V8.29309H33.7225V11.801H36.4369V15.2259H33.7225V20.6559C33.7225 21.0599 33.8194 21.3513 34.0131 21.5286C34.2072 21.7072 34.5302 21.7955 34.9827 21.7955H36.4609Z" fill="white"></path>
          </svg>
        </div>
        <div className={style.center}>
        <ul className={`${style.verticalNav}`}>
          <NavLink className={(navData) => navData.isActive ? style.active : "" } to="/"><li>Sports</li></NavLink>
          <NavLink className={(navData) => navData.isActive ? style.active : "" } to="/jackpots"><li>Jackpots</li></NavLink>
          <NavLink className={(navData) => navData.isActive ? style.active : "" } to="/virtuals"><li>Virtuals</li></NavLink>
          <NavLink className={(navData) => navData.isActive ? style.active : "" } to="/casino"><li>Casino</li></NavLink>
          <NavLink className={(navData) => navData.isActive ? style.active : "" } to="/promos"><li>Promos</li></NavLink>
        </ul>
        </div>

        <div className={style.right}>
          <Button variant="tertiaryOnDark">Login</Button>
          <JoinButton onClick={showModalHandler} />
        </div> 
      </div>
    </header>

      <Modal onClose={closeModalHandler} animate={animate} title="Join">
        <TextField placeholder="0000 000000" label="Mobile Number" variant="phoneNumber" />
        <div>
          <Button>Next</Button>
        </div>
      </Modal>
    </>
  );
}

export default Header;
