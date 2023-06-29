import { useDispatch } from "react-redux"
import { createAlert } from "src/app/store/slices/alertSlice"
import Button from "src/shared/UI/button/Button"

interface IScrollButtonSettings {
   type: "filledLight" | "Ghost" | "filledDark" | "notAllowedDark"
   text: string
   path: string
}

export const ScrollButton = ({ type, text, path }: IScrollButtonSettings) => {
   const dispatch = useDispatch()
   const scrollTo = (path: string) => {
      console.log(path)
      const target = document.getElementById(`${path}`)
      if (target) {
         window.scrollTo({ top: target.offsetTop, behavior: "smooth" })
      }else {
         dispatch(createAlert({type: "error", message: "Элемент не найден"}))
      }
   }

   return (
      <div>
         <div onClick={() => scrollTo(path)}>
            <Button type={type} text={text} />
         </div>
      </div>
   )
}

export default ScrollButton
