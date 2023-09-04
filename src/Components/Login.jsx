/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/authProvider';

const Login = () => {
    const {user, signInUser }= useContext(AuthContext);


    const userLogIn=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const pass=form.password.value;
        console.log(email, pass);

        signInUser(email,pass)
        .then(result=>{
            const userLog=result.user;
            console.log(userLog);
        })
        .catch(error=>{
            console.log(error.message);
        })


    }
    return (
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Please Login</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={userLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        
                        <Link to="/register" className='btn btn-link text-white'><small>Are you new in site ?</small>Register now</Link>
                    </div>
                    
                </div>
            </div> 
    );
};

export default Login;