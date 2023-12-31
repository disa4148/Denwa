import { createRoot } from "react-dom/client"
import App from "./app"
import "src/app/index.scss"

const container = document.getElementById("root")

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!)
root.render(<App />)
