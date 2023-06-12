import HeaderLinks from "src/features/headerLinks/HeaderLinks"
import LogotypeAnimation from "src/features/logotypeAnimation/LogotypeAnimation"
import Button from "src/shared/UI/button/Button"
import styles from "./Header.module.scss"

export const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <LogotypeAnimation />
      <HeaderLinks />
      <div className={styles.buttonsWrapper}>
        <Button text='Войти' type='Ghost' />
        <Button text='Создать аккаунт' type='filledLight' />
      </div>
    </div>
  )
}
