import logo from "../../logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand" href="home"><img src={logo} alt="logo"/></a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" href="todo" to="/todo">Todo</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="user" to="/user">User</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="signin" to="/signin">Sign in</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="signup" to="/signup">Sign up</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;