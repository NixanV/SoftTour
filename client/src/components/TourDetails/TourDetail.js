import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as tourService from "../../services/tourService";
import styles from "./styles/details.module.css";
import { AuthContext } from "../../contexts/authContext";


export const TourDetail = () => {
  //const [author, setAuthor] = useState('');
    const { tourId } = useParams();
    const [tour, setTour] = useState({});
    const {user} = useContext(AuthContext);
    const token = user.accessToken;
    const [liked, setLiked] = useState(null)
    const [clicked, setClicked] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        tourService.getOne(tourId)
            .then((result) => {
                setTour(result);
            });
    }, [tourId]);

    const onDeleteHandler = (tourId,  token) => {
        tourService.deletePost(tourId, token)
            .then(() => {
                navigate('/tours')
            })
    }


    return (
        <div className={styles["all-info-wrapper"]}>
        <div className={styles["image-wrapper"]}>
            <img src={tour.imageUrl} alt="" className={styles["image"]} />
        </div>
        <div className={styles["info-wrapper"]}>
            <h2 className={styles["heading"]}>Tour in {tour.destination}</h2>
            <p className={styles["paragraph-description"]}>{tour.description}</p>
            <h4 className={styles["author"]}>{tour.author}</h4>
            {user._id === tour._ownerId ? 
            <>
                <Link to={`/edit/${tourId}`} className={styles["edit-btn"]} ><i className="fas fa-edit" />Edit</Link> 
                <button className={styles["delete-btn"]} 
                    onClick={() => onDeleteHandler(tourId, user.accessToken)}>
                    <i className="fas fa-trash-alt" />Delete
                </button>
                
            </>
            : 
            null}

            {token ? 
                <button 
                    className={styles["like-button"]} 
                    onClick={() => {setLiked(!liked); setClicked(true);}} 
                    disabled={liked === true ? true : false}>
                    <i class="fas fa-thumbs-up" />
                    <span>Like</span>
                    {liked && <span className={{ liked }}>d</span>}
                </button>
                :
                null
            }

            <button className={styles["back-button"]} onClick={() => navigate(-1)}>
            <i className="fas fa-chevron-circle-left" />
            Back
            </button>
        </div>
        </div>
    );
};
