import { Link } from 'react-router-dom';
import styles from './styles/register.module.css'

export const Register = () => {
  return (
    <div className={styles["whole"]}>
      <div className={styles["form-wrapper"]}>
        <form>
          <div className={styles["firstName-div"]}>
            <label htmlFor="fName" className={styles["first-name-lbl"]}>First Name</label>
            <input type="text" id={styles["fName"]} name="fName" />
          </div>
          <div className={styles["lastName-div"]}>
            <label htmlFor="last-name" className={styles["last-name-lbl"]}>Last Name</label>
            <input type="text" id={styles["last-name"]} name="last-name" />
          </div>
          <div className={styles["email-div"]}>
            <label htmlFor="email" className={styles["email-lbl"]}>Email</label>
            <input type="email" id={styles["email"]} name="email" />
          </div>
          <div className={styles["password-div"]}>
            <label htmlFor="password" className={styles["password-lbl"]}>Password</label>
            <input type="password" id={styles["password"]} name="password" />
          </div>
          <div className={styles["conf-password-div"]}>
            <label htmlFor="confPassword" className={styles["conf-password-lbl"]}>Confirm Password</label>
            <input type="password" id={styles["confPassword"]} name="confPassword" />
          </div>
          <button className={styles["register-button"]}>Register</button>
          <p className={styles['have-account']}>
            Do you have account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
