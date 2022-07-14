import Breadcrumb from "../ui/Breadcrumb";
import style from "./InnerLayout.module.css";

function InnerLayout(props) {
  return (
    <main className={style.main}>
      <div className={style.articleContainer}>
        {props.children}
      </div>
    </main>
  );
}

export default InnerLayout;
