import styles from './styles/main.module.css'
import bali from './images/Bali.jpg'
import sydney from './images/sydneys_bridge.jpg'
import cruise from './images/cruise.jpg'
import dubai from './images/dubai.jpg'
import full_bag from './images/full_bag.jpg'
import pointer from './images/vector_pointer.jpg'
import { useNavigate } from 'react-router-dom'



export const Home = () => {
    const navigate = useNavigate();

    const navigateToTours = () => {
        navigate('/tours')
    }


    return (
        <main>
        <img className={styles["sydney"]} src={sydney} alt="" />
        <section className={styles["main-section"]}>
            <h1>
                SoftTour
            </h1>
            <p>
                Site where you can find new place to go or tell us about your last trip.
            </p>
        </section>

        <section className={styles["main-divs"]}>
            <div className={styles["div-tours"]}>
                <div className={styles["image-wrap"]}>
                    <img src={pointer} alt="" />
                </div>
                <h3>
                    All Tours
                </h3>
                <p>
                    Visit all trips on our site and choose where your next trip will be!
                </p>
                <button className={styles["button-tours"]} onClick={navigateToTours}>Let's go</button>
            </div>
            <div className={styles["div-prepare"]}>
                <div className={styles["image-wrap"]}>
                    <img src={full_bag} alt="" />
                </div>
                <h3>
                    How to prepare
                </h3>
                <p>
                    You should be ready for every type of trip. All information about how to be well prepared you can
                    find here!
                </p>
                <button className={styles["button-prepare"]}>Prepare</button>
            </div>
        </section>

        <section className={styles["popular-trips"]}>
            <div className={styles["div-suggestions"]}>
                <h3>
                    Suggestions
                </h3>
                <p>
                    We know how hard is to choose perfect trip, that's why we have some suggestions for you. This
                    destionations are one of
                    the best in the world and you should visit them before the end.
                </p>
            </div>
            <div className={styles["popular-div"]}>
                <div className={styles["img-popular-wrap"]}>
                    <img src={cruise} alt="" />
                </div>
                <h2>
                    Cruise trip
                </h2>
                <p>7 Night Cruise to the Eastern Caribbean</p>
            </div>
            <div className={styles["popular-div"]}>
                <div className={styles["img-popular-wrap"]}>
                    <img src={dubai} alt="" />
                </div>
                <h2>
                    Dubai, United Arab Emirates
                </h2>
                <p>
                    Dubai is a destination that mixes modern culture with history, adventure with world-class shopping
                    and entertainment.
                </p>
            </div>
            <div className={styles["popular-div"]}>
                <div className={styles["img-popular-wrap"]}>
                    <img src={bali} alt="" />
                </div>
                <h2>
                    Bali, Indonesia
                </h2>
                <p>
                    Bali is a living postcard, an Indonesian paradise that feels like a fantasy.
                </p>
            </div>
        </section>
    </main>
    );
}