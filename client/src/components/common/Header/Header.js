import styles from "./header.module.css"
import {Link} from "react-router-dom"

export const Header = () => {
    return(
        <header>
            <nav className={styles["nav-bar"]}>
                <h2 className={styles["header-title"]}>SoftTour</h2>
                <ul className={styles["ul-nav"]}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/tours">Tours</Link>
                    </li>
                    <li>
                        <a href="">Your Tours</a>
                    </li>
                    <li>
                        <a href="">Profile</a>
                    </li>
                    <li>
                        <a href="">Login</a>
                    </li>
                    <li>
                        <a href="">Logout</a>
                    </li>
                    <li>
                        <a href="">Register</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}