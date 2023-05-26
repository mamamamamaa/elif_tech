import style from "./NotFound.module.css";

export default function NotFound() {
  return (
    <>
      <div className={style.messageWrapper}>
        <h1 className={style.message}>Oops, you've wandered off somewhere</h1>
      </div>
    </>
  );
}
