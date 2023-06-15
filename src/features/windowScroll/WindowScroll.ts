import { useEffect } from "react"

const WindowScroll = () => {
   const handleScroll = (event: WheelEvent) => {
      event.preventDefault()
      const deltaY = Math.sign(event.deltaY)
      const nextScrollPosition = window.scrollY + window.innerHeight * deltaY
      window.scrollTo({
         top: nextScrollPosition,
         behavior: "smooth",
      })
   }

   useEffect(() => {
      window.addEventListener("wheel", handleScroll, { passive: false })
      return () => {
         window.removeEventListener("wheel", handleScroll)
      }
   }, [])

   return null
}

export default WindowScroll
