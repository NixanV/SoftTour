import styles from './styles/profile.module.css'

export const UserTourItem = ({
    destionation,
    imageUrl
}) => {
    return (
        <div className={styles["tour-item-profile"]}>
            <img src={imageUrl} alt="" />
            <h2 className={styles["profile-destination"]}>{destionation}</h2>
        </div>
    )
}