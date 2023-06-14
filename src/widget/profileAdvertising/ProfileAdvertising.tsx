import styles from "./ProfileAdvertising.module.scss";

interface IProfileAdvertising {
    img: string;
    title: string;
    text: string;
}

export const ProfileAdvertising = ({img, title, text}: IProfileAdvertising) => {
  return (
    <div className={styles.wrapper}>
      <img src={img} alt={img} />
      <div className={styles.Container}>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ProfileAdvertising;
