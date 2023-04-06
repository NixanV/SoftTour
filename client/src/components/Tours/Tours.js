import { useEffect, useState } from 'react'
import { TourItem } from './TourItem'
import * as service from '../../services/tourService'
import styles from './styles/tour.module.css'

export const Tours = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        service.getAll()
            .then(res => setData(Object.values(res))); 
    }, [])

    return (
        <section>
            <h1 className={styles["all-tours-heading"]}>All Tours</h1>

            {data[0] === 404 || data.length === 0 ? 
            (<h3 className={styles["no-articles"]}>No articles yet</h3>) : 
            (data.map(x => <TourItem key={x._id} {...x}/>))}
        </section>
    )
}