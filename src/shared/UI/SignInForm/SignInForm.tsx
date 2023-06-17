import Button from "../button/Button"
import Input from "../input/Input"
import { useForm, FormProvider } from "react-hook-form"

export const SignInForm = () => {
   const methods = useForm()
   const onSubmit = (data: any, event: any) => {
      event.preventDefault()

      console.log(data)
   }

   return (
      <FormProvider {...methods}>
         <form onSubmit={methods.handleSubmit(onSubmit)}>
            <h1>Авторизация</h1>
            <h2>Получите доступ к своему профилю</h2>
            <p>Эл-почта:</p>
            <Input type='email' placeholder='Email' name='email' />
            <p>Пароль:</p>
            <Input type='password' placeholder='Пароль' name='password'/>
            <Button type='filledLight' text='Войти' />
         </form>
      </FormProvider>
   )
}

export default SignInForm
