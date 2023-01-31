import React, {useContext} from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../contexts/auth.context';

const LogoutPage = () => {
    const { logout } = useContext(AuthContext);

    logout();

    return (
        <Navigate to="/" replace />
    );
}

export default LogoutPage;