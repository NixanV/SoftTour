import computer from "./images/draw2.webp"
import styles from './styles/login.module.css'
import * as service from '../../services/authService'
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export const Login = () => {
    
    const navigate = useNavigate();
    const [items, setItems] = useState([])
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify())
    }, [items])

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

            if(pattern.test(userInfo.email)){
                service.login(userInfo)
                    .then(res => {
                        if(!res.message){
                            setItems(Object.values(res))
                            console.log(res)
                            navigate('/')
                        }else{
                            alert("Invalid email and password")
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
                <form onSubmit={(ev) => submitHandler(ev, data)}>

                    <div className={styles["email-div"]}>
                        <input
                            type="email"
                            id="email"
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
                            id="password"
                            placeholder="Enter password"
                            name="password"
                            required
                            value={data.password}
                            onChange={(e) => onChangeHandler(e)}/>

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