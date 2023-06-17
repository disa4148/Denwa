import Button from "../button/Button"
import Input from "../input/Input"
import { useForm, FormProvider } from "react-hook-form"
export const SignUpForm = () => {
   const methods = useForm()
   const onSubmit = (data: any) => {
      console.log(data)
   }

   return (
      <FormProvider {...methods}>
         <form onSubmit={methods.handleSubmit(onSubmit)}>
            <h1>Регистрация</h1>
            <h2>Присоединяйтесь к нашей команде!</h2>
            <p>Эл-почта:</p>
            <Input type='text' placeholder='Эл-почта' name='email' />
            <p>Пароль:</p>
            <Input type='password' placeholder='Пароль' name='password' />
            <Button text='Создать' type='filledDark' />
         </form>
      </FormProvider>
   )
}
export default SignUpForm
