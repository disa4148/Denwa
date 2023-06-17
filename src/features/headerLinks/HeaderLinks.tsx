import { headerItems } from "src/entities/headerItems/HeaderItems"
import styles from "./HeaderLinks.module.scss"

import { Link } from "react-router-dom";

const HeaderLinks: React.FC = () => {
   return (
      <div className={styles.wrapper}>
         {headerItems.map(item => (
            <div className={styles.item} key={item.path}>
               <Link className={styles.item} to={item.path}>{item.title}</Link>
            </div>
         ))}
      </div>
   )
}

export default HeaderLinks;
