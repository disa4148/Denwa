import React from 'react'

import Marquee from "react-fast-marquee"

import styles from './Carousel.module.scss'

import ReactIcon from '/public/assets/images/reactjs-icon.svg'
import TsIcon from '/public/assets/images/typescriptl-icon.svg'
import HtmlIcon from '/public/assets/images/html5-icon.svg'
import NodeJsIcon from '/public/assets/images/nodejs-icon.svg'
import MongoDbIcon from '/public/assets/images/mongodb-icon.svg'

export const Carousel = () => {
    const items = [ReactIcon, TsIcon, HtmlIcon, NodeJsIcon, MongoDbIcon]
  return (
    <div className={styles.wrapper}>
        <Marquee autoFill={true} pauseOnClick={true} speed={100} gradientWidth={200}>
          <div className={styles.content}>
            {items.map(item => (
                <img className={styles.image} src={item} alt='Icon' />
            ))}
          </div>
        </Marquee>
    </div>
  )
}

export default Carousel