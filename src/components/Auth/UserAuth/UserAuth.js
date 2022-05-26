import axios from 'axios';
import { sendEmailVerification } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../../firebase.init';

const UserAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return;
    }

    if (user) {
        const email = user.email;
        const token = async () => {
            const { data } = await axios.post('https://shoelace13.herokuapp.com/login', { email })
            localStorage.setItem(email, data.accessToken)
        }
        token();

        return <Navigate to="/home" state={{ from: location }} replace />
    }

    if (user)
        return <Navigate to="/home" state={{ from: location }} replace />
    else
        return children;
};

export default UserAuth;