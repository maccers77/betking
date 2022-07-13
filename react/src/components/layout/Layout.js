import style from "./Layout.module.css";
import Header from "./Header";
import Nav from "./Nav";
import Checkout from "../checkout/Checkout";
import InnerLayout from "./InnerLayout";

function Layout(props) {
  return (
    <div className={style.contentContainer}>
      <Header />
      <div className={style.mainContent}>
      {/* <Nav />
        <InnerLayout> */}
              {props.children}
              {/* </InnerLayout> */}
        <aside className={style.aside}>aside</aside>
      </div>
      <Checkout val="0.00" />
    </div>
  );
}

export default Layout;
