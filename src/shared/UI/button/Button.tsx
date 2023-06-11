import styles from "./Button.module.scss";

interface IButton {
  type: "filledLight" | "Ghost" | "filledDark" | "notAllowedDark";
  text: string;
}

export const Button = ({ type, text }: IButton) => {
  return (
    <div>
      {type === "filledLight" && (
        <button className={styles.BtnfilledLight}>{text}</button>
      )}

      {type === "Ghost" && (
      <button className={styles.BtnGhost}>{text}</button>
      )}

      {type === "filledDark" && (
        <button className={styles.BtnfilledDark}>{text}</button>
      )}

      {type === "notAllowedDark" && (
        <button className={styles.BtnnotAllowedDark}>{text}</button>
      )}
    </div>
  );
};

export default Button;
