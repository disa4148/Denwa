import { headerItems } from "src/entities/headerItems/HeaderItems"
import styles from "./HeaderLinks.module.scss"
// import { Link } from "react-router-dom"
const HeaderLinks: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      {headerItems.map(item => (
        // <Link to={item.path}>
          <div className={styles.wrapper}>{item.title}</div>
        // </Link>
      ))}
    </div>
  )
}

export default HeaderLinks
