import React from "react"
import { useController } from "react-hook-form"
import styles from "./Input.module.scss"

interface IInputProps {
   name: string
   type: "text" | "password" | "email"
   placeholder: string
}

const Input: React.FC<IInputProps> = ({ name, type, placeholder }) => {
   const { field } = useController({ name })

   return (
      <div className={styles.inputWrapper}>
         <input
            type={type}
            placeholder={placeholder}
            {...field}
            className={styles.Input}
         />
      </div>
   )
}

export default Input
