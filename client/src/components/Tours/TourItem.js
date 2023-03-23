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
                        {description}
                    </p>
                    <p>
                        <span>
                           {author}
                        </span>
                    </p>
                    <Link to="#" className={styles["details-button"]}>See more</Link>
            </div>
        </div>
    </div>
    </>
    )
}