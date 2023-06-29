import Carousel from 'src/shared/UI/carousel/Carousel'

import ReactIcon from '/assets/images/reactjs-icon.svg'
import TsIcon from '/assets/images/typescriptl-icon.svg'
import HtmlIcon from '/assets/images/html5-icon.svg'
import NodeJsIcon from '/assets/images/nodejs-icon.svg'
import MongoDbIcon from '/assets/images/mongodb-icon.svg'


export const CarouselItems = () => {
    const items = [ReactIcon, TsIcon, HtmlIcon, NodeJsIcon, MongoDbIcon]
  return (
   
    <Carousel items={items}/>
  
  )
}
