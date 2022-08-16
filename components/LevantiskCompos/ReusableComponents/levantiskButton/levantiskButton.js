import style from "./button.module.scss";
function LevantiksButton({ title, action }) {
  return (
    <button onClick={() => action()} className={style.btn}>
      {title}
    </button>
  );
}

export default LevantiksButton;
