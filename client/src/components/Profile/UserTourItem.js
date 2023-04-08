import styles from './styles/profile.module.css'
import { Link } from 'react-router-dom'
export const UserTourItem = ({
    _id,
    destination,
    imageUrl
}) => {
    return (
        <div className={styles["tour-item-profile"]}>
            <img className={styles["image-tour-profile"]}  src={imageUrl} alt="" />
            <Link className={styles["link-to-details"]} to={`/tours/${_id}`}>{destination}</Link>
            
        </div>
    )
}