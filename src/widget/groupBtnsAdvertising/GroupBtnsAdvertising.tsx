import Button from "src/shared/UI/button/Button";

import { ProfileAdverItems } from "src/entities/profileAdverBtnsItems/ProfileAdverBtnsItems";

import styles from "./GroupBtnsAdvertising.module.scss"
export const GroupBtnsAdvertising = () => {
  return (
    <div className={styles.wrapper}>
       {ProfileAdverItems.map (item => (
        <Button text={item.text} type={'filledDark'} disabled={true}/>
       ))}
    </div>
  )
}
