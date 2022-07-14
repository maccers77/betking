import { useState } from "react";

import style from "./Layout.module.css";
import Header from "./Header";
import Checkout from "../checkout/Checkout";


function Layout(props) {
  return (
    <div className={style.contentContainer}>
      <Header />
      <div className={style.mainContent}>
        {props.children}
        <aside className={style.aside}>aside</aside>
      </div>
      <Checkout val="0.00" />
    </div>
  );
}

export default Layout;
