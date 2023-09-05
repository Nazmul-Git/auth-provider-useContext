/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/authProvider';

const Header = () => {
    const { user, logOutUser} = useContext(AuthContext);

    const logOutAction=()=>{
        logOutUser()
        .then(()=>{})
        .catch(error=>console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Auth Tailwind-daisyUI</a>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Home</Link>
                <Link to="/orders" className="btn btn-ghost normal-case text-xl">Orders</Link>
                <Link to="/login" className="btn btn-ghost normal-case text-xl">Login</Link>
                <Link to="/register" className="btn btn-ghost normal-case text-xl">Register</Link>
                {
                    user ? <>
                        <span>{user.email}</span>
                        <button onClick={logOutAction} className='btn btn-xs'>Sign Out</button>
                    </> :
                        <>
                            <Link to="/login">Log In</Link>

                        </>

                }

            </div>
        </div>
    );
};

export default Header;