import styles from './Advantages.module.scss'
import List from 'src/shared/UI/list/List'

import { ListItems } from 'src/entities/listItems/ListItems'



export const Advantages = () => {
  return (
    <div className={styles.wrapper}>
        <h2>Streamline Your Job 
            with Advanced
        </h2>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam
        </h4>
        {ListItems.map((item) => (
          <List text={item}/>
        ))}
        
    </div>
  )
}

export default Advantages