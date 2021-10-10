import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div className="">
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="email"placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-Enter Your Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an Account? <Link to="/login">Login</Link></p>
                <div className="">----------- OR -----------</div>
                <br />
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;