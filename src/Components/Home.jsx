/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../providers/authProvider';

const Home = () => {

    const {user}= useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <p>home</p>
            <p>
                {
                    user && <span>{user.displayName}</span>
                }
            </p>
        </div>
    );
};

export default Home;