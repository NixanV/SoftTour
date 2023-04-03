import computer from "./images/draw2.webp"
import styles from './styles/login.module.css'
import * as service from '../../services/userService'
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import { AuthContext } from "../../contexts/authContext"

export const Login = () => {
    
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const {userLogin} = useContext(AuthContext);

    const onChangeHandler = (ev) => {
        setData(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    };


    const submitHandler = (ev, userInfo) => {
        ev.preventDefault();

        if(userInfo.email === "" || userInfo.password === ""){
            alert("Should fill inputs!")
        }
        else{
            const pattern = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$");
            try{
                if(pattern.test(userInfo.email)){
                    service.login(userInfo)
                        .then(res => {
                            if(!res.message){
                                userLogin(res)
                                navigate('/')
                            }else{
                                alert("Invalid email and password")
                            }
                        })
                } 
            }
            catch{
                alert('error message')
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
                <form onSubmit={(ev) => submitHandler(ev, data)}>

                    <div className={styles["email-div"]}>
                        <input
                            type="email"
                            id={styles["login-email"]}
                            className={styles["email-input"]}
                            name="email"
                            placeholder="Enter email"
                            required
                            value={data.email}
                            onChange={(e) => onChangeHandler(e)}/>

                        <label className={styles["form-label"]} htmlFor="email">Email address</label>
                    </div>

                
                    <div className={styles["password-div"]}>
                        <input
                            type="password"
                            id={styles["login-password"]}
                            placeholder="Enter password"
                            name="password"
                            required
                            value={data.password}
                            onChange={(e) => onChangeHandler(e)}/>

                        <label className={styles["form-label"]} htmlFor="password">Password</label>
                    </div>

                    <div className="button-div">
                        <input type="submit" className={styles["login-button"]} value="Login"/>
                        <p className="dont-have-account">Don't have an account? <Link to="/register">Register</Link></p>
                    </div>

                </form>
            </div>
        </div>
    </section>
    )
}