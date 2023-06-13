import Header from "src/widget/header/Header"
import "./index.scss"
import Home from "src/page/home/Home"
import Carousel from "src/shared/UI/carousel/Carousel"
function App() {
  return (
    <>
      <div>
        <Header />
        <Home />
        <Carousel/>
      </div>
    </>
  )
}

export default App
