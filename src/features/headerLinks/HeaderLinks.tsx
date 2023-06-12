import { headerItems } from "src/entities/headerItems/HeaderItems"
// import { Link } from "react-router-dom"
const HeaderLinks: React.FC = () => {
  return (
    <div>
      {headerItems.map(item => (
        // <Link to={item.path}>
          <div>{item.title}</div>
        // </Link>
      ))}
    </div>
  )
}

export default HeaderLinks
