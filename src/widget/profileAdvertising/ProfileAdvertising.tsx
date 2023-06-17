import styles from "./ProfileAdvertising.module.scss";

import { ProfileAdverItems } from "src/entities/profileAdverItems/ProfileAdverItems";

export const ProfileAdvertising = () => {
  return (
    <div className={styles.wrapper}>
      {ProfileAdverItems.map (item => (
        <div className={styles.flexDiv}>
          <img src = {item.image} alt={item.image}/>
          <div className={styles.container}> 
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </div>
        ))}

    </div>
    
  );
};

export default ProfileAdvertising;
