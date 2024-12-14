import { Link } from "react-router-dom"

function Lien({link, children, className }) {
  return (
       <Link to={link} className={className}>
        {children}
       </Link>
  )
}

export default Lien