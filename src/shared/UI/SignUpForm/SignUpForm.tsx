import { useAppDispatch } from "src/app/store/hooks/redux"
import Button from "../button/Button"
import Input from "../input/Input"
import { useForm, FormProvider } from "react-hook-form"
import { createAlert } from "src/app/store/slices/alertSlice"
export const SignUpForm = () => {
   const methods = useForm()
   const dispatch = useAppDispatch()
   const onSubmit = (data: any, event: any) => {
      event.preventDefault()
      console.log(data)
      dispatch(createAlert({ message: "Успешно", type: "success" }))
      console.log("alert created")
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
