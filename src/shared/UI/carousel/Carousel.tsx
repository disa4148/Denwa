import Marquee from "react-fast-marquee"

import styles from './Carousel.module.scss'


interface ICarouselItems {
    items: string[];
}


export const Carousel = ({items}: ICarouselItems) => {
  return (
    <div className={styles.wrapper}>
        <Marquee autoFill={true} pauseOnClick={true} speed={100} gradient={true} gradientWidth={200}>
          <div className={styles.content}>
            {items.map(item => (
                <img key={item} className={styles.image} src={item} alt='Icon' />
            ))}
          </div>
        </Marquee>
    </div>
  )
}

export default Carousel