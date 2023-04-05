import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as tourService from "../../services/tourService";
import styles from "./styles/details.module.css";
import { AuthContext } from "../../contexts/authContext";


export const TourDetail = () => {
  //const [author, setAuthor] = useState('');
    const { tourId } = useParams();
    const [tour, setTour] = useState({});
    const {user} = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        tourService.getOne(tourId).then((result) => {
        setTour(result);
        });
    }, [tourId]);


    return (
        <div className={styles["all-info-wrapper"]}>
        <div className={styles["image-wrapper"]}>
            <img src={tour.imageUrl} alt="" className={styles["image"]} />
        </div>
        <div className={styles["info-wrapper"]}>
            <h2 className={styles["heading"]}>Tour in {tour.destination}</h2>
            <p className={styles["paragraph-description"]}>{tour.description}</p>
            <h4 className={styles["author"]}>{tour.author}</h4>
            {user.accessToken ? 
            <button className={styles["edit-btn"]}><i className="fas fa-edit" />Edit</button> : 
            null}

            {user.accessToken ? 
            <button className={styles["delete-btn"]}><i className="fas fa-trash-alt" />Delete</button> : 
            null}

            <button className={styles["back-button"]} onClick={() => navigate(-1)}>
            <i className="fas fa-chevron-circle-left" />
            Back
            </button>
        </div>
        </div>
    );
};
