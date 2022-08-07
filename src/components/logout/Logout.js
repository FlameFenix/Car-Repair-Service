import { useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/authContext';
import * as userService from '../../services/userService';

export const Logout = () => {
    const navigate = useNavigate();
    const { user, onLogout } = useContext(AuthContext);

    useEffect(() => {
        console.log(user.userData.accessToken);
        userService.logoutUser(user.userData.accessToken);
        onLogout();
        navigate('/');
    })

    return null
}