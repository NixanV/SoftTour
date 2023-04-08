import styles from './styles/profile.module.css'

export const UserTourItem = ({
    destination,
    imageUrl
}) => {
    return (
        <div className={styles["tour-item-profile"]}>
            <img className={styles["image-tour-profile"]}  src={imageUrl} alt="" />
            <h2 className={styles["profile-destination"]}>{destination}</h2>
        </div>
    )
}