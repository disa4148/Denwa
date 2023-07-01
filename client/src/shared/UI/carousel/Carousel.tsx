import Marquee from "react-fast-marquee"

import styles from "./Carousel.module.scss"

interface ICarouselItems {
   items: string[]
}

export const Carousel = ({ items }: ICarouselItems) => {
   return (
      <div className={styles.wrapper}>
         <Marquee
            className={styles.marquee}
            autoFill={true}
            pauseOnClick={true}
            speed={100}
            gradient={true}
            gradientWidth={15}
         >
            <div className={styles.content}>
               {items.map(item => (
                  <div className={styles.imageContainer}>
                     <img
                        key={item}
                        className={styles.image}
                        src={item}
                        alt='Icon'
                     />
                  </div>
               ))}
            </div>
         </Marquee>
      </div>
   )
}

export default Carousel
