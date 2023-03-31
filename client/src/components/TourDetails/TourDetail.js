import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";
import * as tourService from '../../services/tourService';
import styles from "./styles/details.module.css"
import eifel from './images/Eiffel-tower.jpg'

export const TourDetail = () => {
    //const [author, setAuthor] = useState('');
    const { tourId } = useParams();
    const [tour, setTour] = useState({})

    const navigate  = useNavigate();

    useEffect(() => {
        tourService.getOne(tourId)
            .then(result => {
                setTour(result)
            })
    }, [tourId])



    return (
        <div className={styles["all-info-wrapper"]}>
        <div className={styles["image-wrapper"]}>
          <img src={tour.imageUrl} alt="" className={styles["image"]} />
        </div>
        <div className={styles["info-wrapper"]}>
          <h2 className={styles["heading"]}>Tour in {tour.destination}</h2>
          <p className={styles["paragraph-description"]}>
            {tour.description}
          </p>
          <h4 className={styles["author"]}>{tour.author}</h4>
          <button className={styles["back-button"]} onClick={() => navigate(-1)}>
            <i className="fas fa-chevron-circle-left"/>
            Back
          </button>
        </div>
      </div>

    )
}