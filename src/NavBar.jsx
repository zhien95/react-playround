import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <div className={"navbar"}>
      <h2><Link to={"/"}>Home</Link></h2>
      <h2><Link to={"/tab1"}>Tab 1</Link></h2>
      <h2><Link to={"/tab2"}>Tab 2</Link></h2>
    </div>
  )
}

export default NavBar