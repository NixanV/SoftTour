import { useContext, useState } from 'react'
import styles from './styles/createTour.module.css'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/authContext';
import * as service from '../../services/tourService'

export const Create = () => {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    const token = user.accessToken;
    const ownerId = user._id;
    const [data, setData] = useState({
        destination: "",
        imageUrl: "",
        description: "",
    })

    const changeHandler = (e) => {
        setData(state => ({
            ...state,
            [e.target.name]: e.target.value
            })
        )
    }

    const onSubmitHandler = (e, tourInfo) => {
        e.preventDefault();
        if(data.imageUrl)
        try {
            service.createPost({...tourInfo, ownerId}, token)
                .then(() => {
                    navigate('/tours')
                    console.log(tourInfo)
                })
        } catch (error) {
            alert(error)
        }
    }
    
    return(
        <>
            <div className={styles["create-whole"]}>
                <div className={styles["create-form-wrapper"]}>
                        <form className={styles["create-form"]} onSubmit={(e) => onSubmitHandler(e, data)}>
                            <h2>Tell us about your last trip</h2>
                            <label className={styles["destination-label"]} htmlFor="destination">Destination</label>
                            <input
                            type="text"
                            name="destination"
                            id="destination"
                            onChange={(e) => changeHandler(e)}
                            value={data.destination}
                            required
                            />

                            <label className={styles["imageUrl-label"]} htmlFor="imageUrl">Image Url</label>
                            <input
                            type="url"
                            name="imageUrl"
                            id="imageUrl"
                            onChange={(e) => changeHandler(e)}
                            value={data.imageUrl}
                            required
                            />

                            <label className={styles["destination-label"]} htmlFor="description-label" >Description</label>
                            <textarea
                            name="description"
                            col="2000"
                            rows="5"
                            value={data.description}
                            onChange={(e) => changeHandler(e)}
                            required
                            ></textarea>  

                            <button className={styles["submit-button"]}>Submit</button>
                        </form>  
                    
                </div>
            </div>
        </>
        
    )
}