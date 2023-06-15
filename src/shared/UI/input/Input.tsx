import styles from "./Input.module.scss";

interface IInput {
  type: "text" | "password";
  placeholder: string;
}

export const Input = ({ type, placeholder }: IInput) => {
  return (
      <input className={styles.Input} type={type} placeholder={placeholder}/>
  );
};

export default Input;
