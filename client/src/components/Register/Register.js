import { Link, useNavigate } from "react-router-dom";
import styles from "./styles/register.module.css";
import { useContext, useState } from "react";
import * as service from '../../services/userService'
import { AuthContext } from "../../contexts/authContext"

export const Register = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        conf_password: ''
    })

    const {userLogin} = useContext(AuthContext);

    const changeHandler = (ev) => {
        setData(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    };

    const submitHandler = (e, userInfo) => {
        e.preventDefault();

        if(userInfo.password.length < 6 || !/[A-Z]/.test(userInfo.password) || !/[0-9]/.test(userInfo.password)){
            alert("Password must be more than 6 letters and must have at least one upper letter and at least one number!")
        }
        else if(userInfo.password !== userInfo.conf_password){

            alert("Difference between password and confirm password")
        } else {

            const pattern = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$")
            try {
                if(pattern.test(userInfo.email)){
                    service.register(userInfo)
                        .then(res => {
                            if(!res.message){
                                userLogin(res)
                                console.log(res);
                                navigate('/')
                            }else{
                                alert("Invalid email and password")
                            }
                        })
                } 
            } catch (error) {
                alert(error)
            }  
        }
    }

    return (
        <div className={styles["whole"]}>
            <div className={styles["form-wrapper"]}>
                <form onSubmit={(e) => submitHandler(e, data)} method="POST">
                    <div className={styles["firstName-div"]}>
                        <label htmlFor="first_name" className={styles["first-name-lbl"]}>
                        First Name
                        </label>
                        <input
                        type="text"
                        id={styles["fName"]}
                        name="first_name"
                        required
                        value={data.first_name}
                        onChange={(e) => changeHandler(e)} />
                    </div>
                    <div className={styles["lastName-div"]}>
                        <label htmlFor="last_name" className={styles["last-name-lbl"]}>
                        Last Name
                        </label>
                        <input
                        type="text"
                        id={styles["last-name"]}
                        name="last_name" 
                        required
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
                        required
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
                        required
                        value={data.password}
                        onChange={(e) => changeHandler(e)}/>
                    </div>
                    <div className={styles["conf-password-div"]}>
                        <label htmlFor="conf_password" className={styles["conf-password-lbl"]}>
                        Confirm Password
                        </label>
                        <input
                        type="password"
                        id={styles["confPassword"]}
                        name="conf_password"
                        required
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
