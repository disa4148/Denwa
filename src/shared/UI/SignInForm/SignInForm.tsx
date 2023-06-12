import React from 'react'

import Button from '../button/Button'
import Input from '../input/Input'


export const SignInForm = () => {
  return (
    <form>
        <h2>Авторизация</h2>
        <h3>Получите доступ к своему профилю</h3>
        <p>Эл-почта:</p>
      <Input type='text' placeholder='Эл-почта'/>
      <p>Пароль:</p>
      <Input type='password' placeholder='Пароль'/>
      <Button type='filledLight' text='Войти'/>
    </form>
  )
}

export default SignInForm