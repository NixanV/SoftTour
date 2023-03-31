import styles from './styles/register.module.css'

export const Register = () => {
  return (
    <div className={styles["whole"]}>
      <div className={styles["form-wrapper"]}>
        <form>
          <div className={styles["firstName-div"]}>
            <label htmlFor="fName">First Name</label>
            <input type="text" id="fName" name="fName" />
          </div>
          <div className={styles["lastName-div"]}>
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" />
          </div>
          <div className={styles["email-div"]}>
            <label htmlFor="email">Email</label>
            <input type="email" id={styles["email"]} name="email" />
          </div>
          <div className={styles["password-div"]}>
            <label htmlFor="password">Password</label>
            <input type="password" id={styles["password"]} name="password" />
          </div>
          <div className={styles["conf-password-div"]}>
            <label htmlFor="confPassword">Confirm Password</label>
            <input type="password" id={styles["confPassword"]} name="confPassword" />
          </div>
          <button>Register</button>
          <p>
            Do you have account? <a href="">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};
