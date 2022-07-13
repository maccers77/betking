import style from "./InnerLayout.module.css";

function InnerLayout(props) {
  return (
    <main className={style.main}>
      <div className={style.articleContainer}>
        <article>{props.children}</article>
      </div>
    </main>
  );
}

export default InnerLayout;
