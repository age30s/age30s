import "./navbar.css"
import { Link } from "react-router-dom"

export default function Navbar(){
    return(
    <div className="navbar">
        <Link to={"/"} style={{ color: "#fb3f00", textDecoration: "none" }}>
            <span className="nav-item">Home</span>
        </Link>
        {/* to={"/experiences"}  */}
        <Link style={{ color: "#fb3f00", textDecoration: "none" }}>
            <span className="nav-item">Experiences</span>
        </Link>
            {/* <Link to={item.path}> */}
            <span className="nav-item">Projects</span>
            {/* </Link> */}
    </div>)
}