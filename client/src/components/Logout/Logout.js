import { useContext } from "react"
import { AuthContext } from "../../contexts/authContext"
import { useNavigate } from "react-router-dom";
import * as service from '../../services/userService'

export const Logout = () => {
    const {user, userLogout} = useContext(AuthContext);
    const navigate = useNavigate();

    service.logout(user.accessToken)
        .then(() => {
            userLogout();
            navigate('/')
        })
    
}