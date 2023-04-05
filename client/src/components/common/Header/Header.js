import { useContext } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/authContext";

export const Header = () => {
  const { user } = useContext(AuthContext);

  return (
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
          {user.accessToken ? (
            <>
              <li>
                <Link to="/create">Create Tour</Link>
              </li>
              <li>
                <a href="">Profile</a>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>

              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
