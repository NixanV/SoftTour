import computer from "./images/draw2.webp"
import styles from './styles/login.module.css'
import * as service from '../../services/authService'
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export const Login = () => {
    
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const onChangeHandler = (ev) => {
        setData(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    };

    const submitHandler = (ev, userInfo) => {
        ev.preventDefault();

        if(userInfo.email === "" && userInfo.password === ""){
            alert("Should fill inputs!")
        }
        else{
            const pattern = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$");

            if(pattern.test(userInfo.email)){
                service.login(userInfo)
                    .then(res => {
                        if(!res.message){
                            
                        }
                    })
            }
        }
    }


    return (
        <section className={styles["section-wrapper"]}>
        <div className={styles["wrapper-div"]}>
            <div className={styles["image-div"]}>
                <img src={computer} alt="Sample" />
            </div>
            <div className={styles["form-div"]}>
                <form>

                    <div className={styles["email-div"]}>
                        <input
                            type="email"
                            id="email"
                            className={styles["email-input"]}
                            name="email"
                            placeholder="Enter
                            email"
                            required
                            value={data.email}
                            onChange={onChangeHandler}/>

                        <label className={styles["form-label"]} htmlFor="email">Email address</label>
                    </div>

                
                    <div className={styles["password-div"]}>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter
                            password"
                            name="password"
                            required
                            value={data.password}
                            onChange={onChangeHandler}/>

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