import { useContext } from 'react'
import styles from './styles/tour.module.css'
import {Link} from 'react-router-dom'
import {AuthContext} from '../../contexts/authContext'


export const TourItem = ({
    _id,
    destination,
    author,
    imageUrl
}) => {
    const {user} = useContext(AuthContext)
    return(
    <>
    
        <div className={styles["item"]}>
            <div className={styles["catalog-img-wraper"]}>
                <img className={styles["image-t"]} src={imageUrl} alt="" />
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
                    {user.accessToken ? <Link to={`/tours/${_id}`} className={styles["details-button"]}>See more</Link> : null}
                    
            </div>
        </div>
    </div>
    </>
    )
}