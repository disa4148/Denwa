import styles from "./DownArrow.module.scss"
import { BiDownArrowAlt } from 'react-icons/bi';

interface IDownArrow {
  marginTop: string;
}

const DownArrow = ({marginTop}: IDownArrow) => {
  return (
    <div className={styles.wrapper} style={{height:marginTop}}>
      <BiDownArrowAlt size="2em"/>
    </div>
  )
}

export default DownArrow
