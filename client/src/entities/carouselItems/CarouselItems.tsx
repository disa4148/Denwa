import Carousel from 'src/shared/UI/carousel/Carousel'

import ReactIcon from '/public/assets/images/reactjs-icon.svg'
import TsIcon from '/public/assets/images/typescriptl-icon.svg'
import HtmlIcon from '/public/assets/images/html5-icon.svg'
import NodeJsIcon from '/public/assets/images/nodejs-icon.svg'
import MongoDbIcon from '/public/assets/images/mongodb-icon.svg'


export const CarouselItems = () => {
    const items = [ReactIcon, TsIcon, HtmlIcon, NodeJsIcon, MongoDbIcon]
  return (
   
    <Carousel items={items}/>
  
  )
}
