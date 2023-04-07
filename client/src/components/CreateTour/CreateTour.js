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

    const [formError,  setFormErrors] = useState({
        destination: '',
        imageUrl: '',
        description: ''
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

        if(tourInfo.destination.length < 3){
            setFormErrors(state => ({...state, destination: 'Destination should be atleast 3 charachters long'}))
        }
        
        if(tourInfo.imageUrl.length < 11 && !tourInfo.imageUrl.startsWith('https://')){
            setFormErrors(state => ({...state, imageUrl: "Invalid email address"}))
        }
        
        if(tourInfo.description.length < 10){
            setFormErrors(state => ({...state, description: "Description should be atleast one sentence"}))
        }

        console.log(tourInfo.destination)
        // if(!data.imageUrl.startsWith('https://')){
        //     alert("Invalid url adress");
        // }
        if(formError.description || formError.imageUrl || formError.destination){
            try {
            service.createPost({...tourInfo, ownerId}, token)
                .then(() => {
                    navigate('/tours');
                    console.log(tourInfo)
                })
            } catch (error) {
                alert(error)
            }
        }
    }
    
    return(
        <>
            <div className={styles["create-whole"]}>
                <div className={styles["create-form-wrapper"]}>
                        <form className={styles["create-form"]} onSubmit={(e) => onSubmitHandler(e, data)}>
                            <h2>Tell us about your last trip</h2>
                            <div className={styles["destination-div-wrapper"]}>
                                <label className={styles["e-destination-label"]} htmlFor="destination">Destination</label>
                                <input
                                type="text"
                                name="destination"
                                id="destination"
                                onChange={(e) => changeHandler(e)}
                                value={data.destination}
                                required
                                />

                                
                            </div>
                            {formError.destination && 
                                    <p className={styles["error-p"]}>
                                        {formError.destination}
                                    </p>
                            }

                            <label className={styles["e-imageUrl-label"]} htmlFor="imageUrl">Image Url</label>
                            <input
                            type="text"
                            name="imageUrl"
                            id="imageUrl"
                            onChange={(e) => changeHandler(e)}
                            value={data.imageUrl}
                            required
                            />

                            {formError.imageUrl && 
                                    <p className={styles["error-p"]}>
                                        {formError.imageUrl}
                                    </p>
                            }

                            <label className={styles["e-description-label"]} htmlFor="description-label" >Description</label>
                            <textarea
                            name="description"
                            col="2000"
                            rows="5"
                            value={data.description}
                            onChange={(e) => changeHandler(e)}
                            required
                            ></textarea>  
                            {formError.description && 
                                    <p className={styles["error-p"]}>
                                        {formError.description}
                                    </p>
                            }

                            <button className={styles["submit-button"]}>Submit</button>
                        </form>  
                    
                </div>
            </div>
        </>
        
    )
}