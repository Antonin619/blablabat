import React, {useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/auth.context';

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useContext(AuthContext);

    console.log('isAuthenticated :>> ', isAuthenticated);

    if (!isAuthenticated) return <Navigate to="/login" replace />;
    
    return (
        <Component {...rest} />
    );
}

export default AuthenticatedRoute;