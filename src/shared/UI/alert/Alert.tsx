import styles from "./Alert.module.scss"
import { useSelector } from "react-redux"
import { BiCheckDouble } from "react-icons/bi"

const Alert = () => {
   const alert = useSelector((state: any) => state.alert)

   return (
      <div className={styles.wrapper}>
         <div className={styles.centered}>
            <div className={styles.content}>
               <BiCheckDouble size='4em' color='rgb(53, 117, 226)' />
               <h1>Ура, ебало разьебало</h1>
               <h2>Вы успешно ебнулись с крыши</h2>
            </div>
         </div>
      </div>
   )
}

export default Alert
