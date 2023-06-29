import Button from "src/shared/UI/button/Button"
import styles from "./NotFound.module.scss"
import logo404 from "/assets/images/denwaiconcentered.svg"
import { Link } from "react-router-dom"

const NotFound = () => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.errorWrapper}>
            <h1>4</h1>
            <img src={logo404} alt='' />
            <h1>4</h1>
         </div>
         <div className={styles.paragraph}>
            <p>
               Здесь должен быть ваш фрилансер или заказ, но он исчез в цифровом
               пространстве
            </p>
            <div className={styles.link}>
               <Link to={"/"}>
                  <Button text='Вернуться на главную' type='filledLight' />
               </Link>
            </div>
         </div>
      </div>
   )
}

export default NotFound
