import computer from "./images/draw2.webp"
import styles from './styles/login.module.css'
import { Link } from "react-router-dom"

export const Login = () => {
    return (
        <section className={styles["section-wrapper"]}>
        <div className={styles["wrapper-div"]}>
            <div className={styles["image-div"]}>
                <img src={computer} alt="Sample" />
            </div>
            <div className={styles["form-div"]}>
                <form>

                    <div className={styles["email-div"]}>
                        <input type="email" id="email" className={styles["email-input"]} placeholder="Enter email" />
                        <label className={styles["form-label"]} htmlFor="email">Email address</label>
                    </div>

                
                    <div className={styles["password-div"]}>
                        <input type="password" id="password" placeholder="Enter password" />
                        <label className={styles["form-label"]} htmlFor="password">Password</label>
                    </div>

                    <div className="button-div">
                        <button type="button" className={styles["login-button"]}>Login</button>
                        <p className="dont-have-account">Don't have an account? <Link to="/register">Register</Link></p>
                    </div>

                </form>
            </div>
        </div>
    </section>
    )
}