import Header from "src/widget/header/Header"
import "./index.scss"
import Home from "src/page/home/Home"
import { Routes, Route, BrowserRouter } from "react-router-dom"

import { store } from "./store/store"
import { Provider } from "react-redux"

function App() {
   const Errrrror = <h1>404</h1>
   return (
      <div>
         <Provider store={store}>
            <BrowserRouter>
               <Header />
               <Routes>
                  <Route element={Errrrror} path='*' />
                  <Route element={<Home />} path='/' />
                
               </Routes>
            </BrowserRouter>
         </Provider>
      </div>
   )
}

export default App
