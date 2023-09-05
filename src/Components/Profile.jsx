/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../providers/authProvider';

// eslint-disable-next-line react/prop-types
const Profile = ({children}) => {
    const {user}=useContext(AuthContext);

    return (
        <div>
            <p>User Profile</p>
        </div>
    );
};

export default Profile;