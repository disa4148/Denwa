import Header from "src/widget/header/Header"
import "./index.scss"
import Home from "src/page/home/Home"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import Alert from "src/shared/UI/alert/Alert"
import { setupStore } from "./store/store"
import NotFound from "src/page/notfound/NotFound"

function App() {
   const store = setupStore()
   return (
      <div>
         <Provider store={store}>
            <BrowserRouter>
               <Header />
               <Alert />
               <Routes>
                  <Route element={<NotFound/>} path='*' />
                  <Route element={<Home />} path='/' />
               </Routes>
            </BrowserRouter>
         </Provider>
      </div>
   )
}

export default App
