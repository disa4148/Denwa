import { useDispatch } from "react-redux"
import { createAlert } from "src/app/store/slices/alertSlice"

interface IToggleAlert {
   type: "success" | "information" | "warning" | "error" | null
   title: string | null
   message: string | null
}

const useAlert = ({ type, title, message }: IToggleAlert) => {
   const dispatch = useDispatch()
   return dispatch(createAlert({ type: type, title: title, message: message }))
}

export default useAlert
