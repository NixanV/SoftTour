import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../contexts/authContext";
import * as service from '../../services/tourService'


export const Delete = () => {
    const {tourId} = useParams();
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);

    useEffect(() => {
        service.deletePost(tourId, user.accessToken)
            .then(() => {
                navigate('/tours')
            })
    }, [tourId, user.accessToken, navigate])
}