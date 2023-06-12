import HeaderLinks from "src/features/headerLinks/HeaderLinks"

import LogotypeAnimation from "src/features/logotypeAnimation/LogotypeAnimation"

import Button from "src/shared/UI/button/Button"

import styles from "./Header.module.scss"

import ToggleModal from "src/features/toggleModal/ToggleModal"
import SignInForm from "src/shared/UI/SignInForm/SignInForm"
import SignUpForm from "src/shared/UI/SignUpForm/SignUpForm"

export const Header: React.FC = () => {

  return (
    <div className={styles.wrapper}>
      <LogotypeAnimation />
      <HeaderLinks />
      <div className={styles.buttonsWrapper}>
       <ToggleModal type="Ghost" text="Войти" form={<SignInForm/>}/>
       <ToggleModal type="filledLight" text="Создать аккаунт" form={<SignUpForm/>}/>

      </div>
    </div>
  )
}

export default Header