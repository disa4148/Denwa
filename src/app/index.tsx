import Header from "src/widget/header/Header"
import "./index.scss"
import Home from "src/page/home/Home"
import { CarouselItems } from "src/entities/carouselItems/CarouselItems"
function App() {
  return (
    <>
      <div>
        <Header />
        <Home />
        <CarouselItems />
      </div>
    </>
  )
}

export default App
