import { useEffect, useState } from 'react'
import { TourItem } from './TourItem'
import * as service from '../../services/tourService'


export const Tours = ({tours}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        service.getAll()
            .then(res => setData(Object.values(res)));
            
    })

    return (
        <>
            <h1>All Tours</h1>

            {data.map(x => <TourItem key={x._id} {...x}/>)}

            {data.length === 0 && (<h3 className="no-articles">No articles yet</h3>)}
        </>
    )
}