import styles from "./DownArrow.module.scss"
import { BiDownArrowAlt } from 'react-icons/bi';


const DownArrow = () => {
  return (
    <div className={styles.wrapper}>
      <BiDownArrowAlt size="2em"/>
    </div>
  )
}

export default DownArrow
