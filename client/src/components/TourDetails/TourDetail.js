import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import * as tourService from '../../services/tourService';
import styles from "./styles/details.module.css"

export const TourDetail = () => {
    //const [author, setAuthor] = useState('');
    const { tourId } = useParams();
    //const [tour, setTour] = useState({})


    useEffect(() => {
        tourService.getOne(tourId)
            .then(result => {
                console.log(Object.values(result))
            })
    }, [tourId])


    return (
        
    )
}