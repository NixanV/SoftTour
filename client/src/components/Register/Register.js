import { Link, useNavigate } from "react-router-dom";
import styles from "./styles/register.module.css";
import { useState } from "react";

export const Register = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        conf_password: ''
    })

    const changeHandler = (ev) => {
        setData(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    };


    return (
        <div className={styles["whole"]}>
            <div className={styles["form-wrapper"]}>
                <form >
                    <div className={styles["firstName-div"]}>
                        <label htmlFor="fName" className={styles["first-name-lbl"]}>
                        First Name
                        </label>
                        <input
                        type="text"
                        id={styles["fName"]}
                        name="fName"
                        value={data.first_name}
                        onChange={(e) => changeHandler(e)} />
                    </div>
                    <div className={styles["lastName-div"]}>
                        <label htmlFor="last-name" className={styles["last-name-lbl"]}>
                        Last Name
                        </label>
                        <input
                        type="text"
                        id={styles["last-name"]}
                        name="last-name" 
                        value={data.last_name}
                        onChange={(e) => changeHandler(e)}/>
                    </div>
                    <div className={styles["email-div"]}>
                        <label htmlFor="email" className={styles["email-lbl"]}>
                        Email
                        </label>
                        <input
                        type="email"
                        id={styles["email"]}
                        name="email"
                        value={data.email} 
                        onChange={(e) => changeHandler(e)}/>
                    </div>
                    <div className={styles["password-div"]}>
                        <label htmlFor="password" className={styles["password-lbl"]}>
                        Password
                        </label>
                        <input
                        type="password"
                        id={styles["password"]}
                        name="password" 
                        value={data.email}
                        onChange={(e) => changeHandler(e)}/>
                    </div>
                    <div className={styles["conf-password-div"]}>
                        <label
                        htmlFor="confPassword"
                        className={styles["conf-password-lbl"]}
                        >
                        Confirm Password
                        </label>
                        <input
                        type="password"
                        id={styles["confPassword"]}
                        name="confPassword"
                        value={data.conf_password}
                        onChange={(e) => changeHandler(e)}
                        />
                    </div>
                    <button className={styles["register-button"]}>Register</button>
                    <p className={styles["have-account"]}>
                        Do you have account? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};
