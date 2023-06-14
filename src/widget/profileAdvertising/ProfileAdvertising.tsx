import styles from "./ProfileAdvertising.module.scss";

import denwaIcon from "/public/assets/images/denwa-icon.svg";
export const ProfileAdvertising = () => {
  return (
    <div className={styles.wrapper}>
      <img src={denwaIcon} alt='залупа' />
      <div className={styles.Container}>
        <h4>LoremAirbnb</h4>
        <p>Category - 2021-2022</p>
      </div>
    </div>
  );
};

export default ProfileAdvertising;
