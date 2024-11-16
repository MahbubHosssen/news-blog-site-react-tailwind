import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/ProviderAuth';

const Register = () => {
    const {createUser, user, setUser} = useContext(AuthContext)
    
    const handleRegister = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email, password)
        .then(credentialUser => {
            // console.log(credentialUser.user)
            setUser(credentialUser.user)
        })
        .catch(error => {
            console.log("ERROPo.. ", error.message)
        })
    }

    return (
        <div className='flex justify-center items-center'>
            <div className="card bg-base-100 p-6 pt-8 text-center w-full max-w-md shrink-0 rounded-none">
                <h1 className="text-2xl font-bold">Register your account</h1>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo-Url</span>
                        </label>
                        <input type="text" name='photo-url' placeholder="photo-url" className="input input-bordered" required />
                    </div>

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
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p>Already Have an account ? <Link className='text-red-600 font-semibold' to={"/auth/login"}>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;