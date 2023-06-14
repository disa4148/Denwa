import styles from "./ProfileAdvertising.module.scss";

interface IProfileAdvertising {
    img: string;
    title: string;
    description: string;
}

export const ProfileAdvertising = ({img, title, description}: IProfileAdvertising) => {
  return (
    <div className={styles.wrapper}>
      <img src={img} alt={img} />
      <div className={styles.container}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProfileAdvertising;
