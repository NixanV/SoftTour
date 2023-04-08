import { useContext, useEffect, useState } from 'react'
import user_photo from './user-photo.png'
import { AuthContext } from '../../contexts/authContext'
import styles from './styles/profile.module.css'
import * as service from '../../services/tourService'
import { UserTourItem } from './UserTourItem'


export const Profile = () => {
    const {user} = useContext(AuthContext);
    const userId = user._id;
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        service.getAll()
            .then(res => setPosts(res.filter(x => x._ownerId === userId)))
            
    }, [userId])

    console.log(posts);
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
            <div className={styles["post-profile-div"]}>
                {posts.length > 0 ? 
                    posts.map(post => (

                            <li className={styles["li-profile-tours"]} key={post._id}>
                                <UserTourItem {...post}/> 
                            </li>
                        
                    ))
                    :
                    <h4>You don't have any publications</h4>
        
                }
            </div>
            
        </div>
        
    )
}