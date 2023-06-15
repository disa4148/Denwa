import Button from '../button/Button'
import Input from '../input/Input'

export const SignUpForm = () => {
  return (
    <form >
    <h1>Регистрация</h1>
    <h2>Присоединяйтесь к нашей команде!</h2>
    <p>Эл-почта:</p>
    <Input type="text" placeholder="Эл-почта" />
    <p>Пароль:</p>
    <Input type="password" placeholder="Пароль" />
    <Button text='Создать' type='filledDark'/>
  </form>
  )
}
export default SignUpForm