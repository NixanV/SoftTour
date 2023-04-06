import { useContext } from 'react'
import styles from './styles/tour.module.css'
import {Link} from 'react-router-dom'
import {AuthContext} from '../../contexts/authContext'


export const TourItem = ({
    _id,
    destination,
    imageUrl
}) => {
    const {user} = useContext(AuthContext)
    return(
    
    
        <div className={styles["item"]}>
            <div className={styles["catalog-img-wraper"]}>
                <img className={styles["image-t"]} src={imageUrl} alt="" />
                <div className={styles["information"]}>
                    <h2>
                        {destination}
                    </h2>
                    {user.accessToken ? 
                    <p>For more information click "See more" button </p> : 
                    <p>Login or create account to see information about that tour</p>}
                        
                    <p>
                        <span>
                            {user.first_name} {user.last_name}
                        </span> 
                    </p>
                    {user.accessToken ? <Link to={`/tours/${_id}`} className={styles["details-button"]}>See more</Link> : null}
                        
                </div>
            </div>
        </div>
    
    )
}