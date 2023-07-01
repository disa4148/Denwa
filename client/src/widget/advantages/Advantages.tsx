import styles from './Advantages.module.scss'
import List from 'src/shared/UI/list/List'

import { ListItems } from 'src/entities/listItems/ListItems'



export const Advantages = () => {
  return (
    <div className={styles.wrapper}>
        <h2>Оптимизируйте свою работу с Denwa!
        </h2>
        <h4>Проект Denwa - это инновационная фриланс-биржа, созданная
           с целью облегчить процесс поиска работы и нахождения
            талантливых фрилансеров
        </h4>
        {ListItems.map((item, index) => (
          <List text={item} key={index}/>
        ))}
        
    </div>
  )
}

export default Advantages