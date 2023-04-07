import { useContext } from 'react'
import user_photo from './user-photo.png'
import { AuthContext } from '../../contexts/authContext'
import styles from './styles/profile.module.css'

export const Profile = () => {
    const {user} = useContext(AuthContext)

    return(
        <div className={styles["whole-info-wrapper"]}>
            <div className={styles["div-profile-wrapper"]}>
                <div className={styles["user-photo-div"]}>
                    <img src={user_photo} alt="user_photo" className={styles["image-style"]}/>
                </div>
                <div className={styles['information-div']}>
                    <div className={styles["names"]}>
                        <h3>{user.first_name}</h3>
                        <h3>{user.last_name}</h3>
                    </div>
                        

                    <h5 className={styles["email-h5"]}>{user.email}</h5>

                </div>
            </div>

        </div>
        
    )
}