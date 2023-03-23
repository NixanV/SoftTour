import styles from './styles/tour.module.css'
import {Link} from 'react-router-dom'

export const TourItem = ({
    _id,
    destination,
    description,
    author,
    imageUrl
}) => {
    return(
    <>
    
        <div className={styles["item"]}>
            <div className={styles["catalog-img-wraper"]}>
                <img src={imageUrl} alt="" />
                <div className={styles["information"]}>
                    <h2>
                        {destination}
                    </h2>
                    <p>
                        For more information click "See more" button
                    </p>
                    <p>
                        <span>
                           {author}
                        </span>
                    </p>
                    <Link to={`/tours/${_id}`} className={styles["details-button"]}>See more</Link>
            </div>
        </div>
    </div>
    </>
    )
}