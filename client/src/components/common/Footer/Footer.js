import { Link } from "react-router-dom";
import styles from './footer.module.css'

export const Footer = () => {
    return(
        <footer>
            <section className={styles["upper-footer"]}>
                <div>
                    <h3>
                        GET IN TOUCH
                    </h3>
                    <h4>
                        We're social and we'd love to hear from you!
                    </h4>
                    <div className={styles["icons"]}>
                        <ul className={styles["social"]}>
                            <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href=""><i className="fab fa-instagram"></i></a></li>
                            <li><a href=""><i className="fab fa-twitter"></i></a></li>
                        </ul>
                    </div>

                </div>
            </section>


            <section className={styles["down-footer"]}>
                <p>SoftTour &copy; 2023 - All rights reserved: Site by Nikolay Petrov</p>
            </section>

        </footer>
    )
}