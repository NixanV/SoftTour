import { useContext, useState } from 'react'
import styles from './styles/edit.module.css'
import { AuthContext } from '../../contexts/authContext';
import { useNavigate, useParams } from 'react-router-dom';
import * as service from '../../services/tourService'

export const Edit = () => {
    const {user} = useContext(AuthContext);
    const {tourId} = useParams();
    const navigate = useNavigate();
    const token = user.accessToken;
    const [data, setData] = useState({
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

    const submitHandler = (e, data) => {
        e.preventDefault();
        if(!data.imageUrl.startsWith('https://')){
            alert("Invalid url adress");
        }
        try {
            service.editPost(tourId, token, {...data, likes:[]})
                .then(() => {
                    navigate('/tours');
                    console.log(data)
                })
        } catch (error) {
            alert(error)
        }
    }

    return(
        <div className={styles['edit-form-wrapper']}>
            <form className={styles["edit-form"]} onSubmit={(e) => submitHandler(e, data)}>
                <h2>Edit your Tour</h2>
                <label htmlFor="destination">Destination</label>
                <input
                type="text"
                name="destination"
                id="destination"
                className={styles["input-dest"]}
                value={data.destination}
                required
                onChange={(e) => changeHandler(e)}
                />

                <label htmlFor="imageUrl">Image Url</label>
                <input
                type='Url'
                name='imageUrl'
                id="imageUrl"
                className={styles["input-imageUrl"]}
                value={data.imageUrl}
                required
                onChange={(e) => changeHandler(e)}
                />

                <label htmlFor="description" className={styles["desc-label"]}>Description</label>
                <textarea
                col="2000"
                row="5"
                name='description'
                value={data.description}
                required
                onChange={(e) => changeHandler(e)}
                >
                </textarea>

                <button className={styles['edit-submit-btn']}>Submit</button>
            </form>
        </div>
        
    )
}