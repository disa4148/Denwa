import React from "react"
import ReactDOM from "react-dom/client"

import App from "./app"

import "src/app/index.scss"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <div className="HELPING DIV" style={{background: "green", height:"5000px", }}></div>
  </React.StrictMode>
)
