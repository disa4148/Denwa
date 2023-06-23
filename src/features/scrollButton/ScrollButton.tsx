
import Button from "src/shared/UI/button/Button"

interface IScrollButtonSettings {
   type: "filledLight" | "Ghost" | "filledDark" | "notAllowedDark"
   text: string
   path: string
}

export const ScrollButton = ({ type, text, path }: IScrollButtonSettings) => {
   const scrollTo = (path: string) => {
      console.log(path)
      
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
