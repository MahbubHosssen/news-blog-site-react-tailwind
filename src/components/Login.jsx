import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/ProviderAuth';

const Login = () => {
    const {SignIn, setUser} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value; 
        const password = e.target.password.value;

        SignIn(email, password)
        .then(result => {
            console.log("success",result.user)
            setUser(result.user)
        })
        .catch(error => {
            alert("error", error.message)
        })

    }

    return (
        <div className='flex justify-center items-center'>
            <div className="card bg-base-100 p-6 pt-8 text-center w-full max-w-md shrink-0 rounded-none">
                    <h1 className="text-2xl font-bold">Login your account</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p>Dont't Have An Account ? <Link className='text-red-600 font-semibold' to={"/auth/register"}>Register</Link></p>
                </div>
        </div>                
    );
};

export default Login;