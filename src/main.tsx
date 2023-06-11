import React from "react"
import ReactDOM from "react-dom/client"
import App from "./app"
import ButtonFilled from "./shared/buttons/ButtonFilled"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <ButtonFilled text="Абоба" color="red"/>
  </React.StrictMode>
)
