import styles from './List.module.scss'

interface IListItems {
   text : string;
}

export const List = ({text}: IListItems) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.circle}></div>
        <h3>{text}</h3>
    </div>
  )
}

export default List