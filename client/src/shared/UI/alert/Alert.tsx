import { useEffect } from "react"
import styles from "./Alert.module.scss"
import { BiCommentCheck } from "react-icons/bi"
import { BiCommentDots } from "react-icons/bi"
import { BiCommentError } from "react-icons/bi"
import { BiCommentX } from "react-icons/bi"
import { nullifyAlert } from "src/app/store/slices/alertSlice"
import { useAppDispatch, useAppSelector } from "src/app/store/hooks/redux"

const Alert = () => {
   const alert = useAppSelector((state => state.alertReducer))
   const dispatch = useAppDispatch()
   useEffect(() => {
      const timer = setTimeout(() => {
         clearTimeout(timer)
         dispatch(nullifyAlert())
         console.log("alert nullified")
      }, 3000)
   }, [alert])

   return (
      <>
         {alert.type === "success" && (
            <div className={styles.wrapper}>
               <div className={styles.centered}>
                  <div className={styles.content}>
                     <BiCommentCheck size='4em' color='rgb(53, 117, 226)' />
                     <h1>Ура, заработало!</h1>
                     <h2>{alert.message}</h2>
                  </div>
               </div>
            </div>
         )}
         {alert.type === "information" && (
            <div className={styles.wrapper}>
               <div className={styles.centered}>
                  <div className={styles.content}>
                     <BiCommentDots size='4em' color='rgb(53, 117, 226)' />
                     <h1>{alert.type}</h1>
                     <h2>{alert.message}</h2>
                  </div>
               </div>
            </div>
         )}
         {alert.type === "warning" && (
            <div className={styles.wrapper}>
               <div className={styles.centered}>
                  <div className={styles.content}>
                     <BiCommentError size='4em' color='rgb(53, 117, 226)' />
                     <h1>{alert.type}</h1>
                     <h2>{alert.message}</h2>
                  </div>
               </div>
            </div>
         )}
         {alert.type === "error" && (
            <div className={styles.wrapper}>
               <div className={styles.centered}>
                  <div className={styles.content}>
                     <BiCommentX size='4em' color='rgb(53, 117, 226)' />
                     <h1>Упс, что то не так</h1>
                     <h2>{alert.message}</h2>
                  </div>
               </div>
            </div>
         )}
      </>
   )
}

export default Alert
