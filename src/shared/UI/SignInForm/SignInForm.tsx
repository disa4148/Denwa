import Button from "../button/Button"
import Input from "../input/Input"
import { useForm, Controller } from "react-hook-form"


export const SignInForm = () => {
   const { handleSubmit, register, reset, control } = useForm()
   const onSubmit = (data: any) => {
      console.log(data);
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <h1>Авторизация</h1>
         <h2>Получите доступ к своему профилю</h2>
         <p>Эл-почта:</p>
         <Controller name="email" control={control} render={() => <Input type='text' placeholder='Эл-почта' />}/>
         
         <p>Пароль:</p>
         <Input type='password' placeholder='Пароль' />
         <Button type='filledLight' text='Войти' />
      </form>
   )
}

export default SignInForm
