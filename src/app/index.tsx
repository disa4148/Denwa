import Header from "src/widget/header/Header"
import "./index.scss"
import Home from "src/page/home/Home"
import Testingpage from "src/page/testingpage/Testingpage"
import { Routes, Route, BrowserRouter } from "react-router-dom"
function App() {
  const Errrrror = <h1>404</h1>;
   return (
      <div>
         <BrowserRouter>
            <Header />
            <Routes>
              <Route element={Errrrror} path="*"/>
               <Route element={<Home />} path='/' />
            </Routes>
         </BrowserRouter>
      </div>
   )
}

export default App
