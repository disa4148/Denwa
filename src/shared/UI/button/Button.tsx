import styles from "./Button.module.scss";

interface IButton {
  type: "filledLight" | "Ghost" | "filledDark" | "notAllowedDark";
  text: string;
  disabled?: boolean;
}

export const Button = ({ type, text, disabled}: IButton) => {
  return (
    <div>
      {type === "filledLight" && (
        <button type="submit" disabled={disabled} className={styles.BtnfilledLight}>{text}</button>
      )}

      {type === "Ghost" && (
      <button type="submit" className={styles.BtnGhost}>{text}</button>
      )}

      {type === "filledDark" && (
        <button type="submit" className={styles.BtnfilledDark}>{text}</button>
      )}

      {type === "notAllowedDark" && (
        <button type="submit" className={styles.BtnnotAllowedDark}>{text}</button>
      )}
    </div>
  );
};

export default Button;
