/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../providers/authProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user}=useContext(AuthContext);
    if(user){
        return children;
    }
    
    return <Navigate to='/login' replace={true}></Navigate>
};

export default PrivateRoute;