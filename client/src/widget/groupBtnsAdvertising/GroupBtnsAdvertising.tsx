import Button from "src/shared/UI/button/Button";

import { ProfileAdverItems } from "src/entities/profileAdverBtnsItems/ProfileAdverBtnsItems";

import styles from "./GroupBtnsAdvertising.module.scss"
export const GroupBtnsAdvertising = () => {
  return (
    <div className={styles.wrapper}>
       {ProfileAdverItems.map ((item,index) => (
        <Button key={index} text={item.text} type={'filledDark'} disabled={true}/>
       ))}
    </div>
  )
}
