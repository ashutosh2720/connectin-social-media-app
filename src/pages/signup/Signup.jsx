import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { useGlobalLogin } from '../../contexts/login-context';
import { useEffect } from 'react';
import { useGlobalTheme } from '../../contexts/Theme-context';

const Signup = () => {

    const { input, setInput, dummyData, loginAction, userToken, signupHandler } = useGlobalLogin()
    const { theme } = useGlobalTheme()

    const navigate = useNavigate()

    useEffect(() => {
        if (userToken) {
            navigate('/home');
        }
    }, [userToken])
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        signupHandler()
        // Handle form submission logic here

    };

    return (
        <div className="signup">
            <div className={`${theme === "dark-theme"
                ? "bg-neutral-900	 text-white"
                : "bg-white text-black border-2 border-black-800"
                } signup-form-container`}>
                <h2>Create an account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" >signup</button>
                </form>

                <p >  Already have an account ➡️<Link to={'/'}>
                    Signin</Link></p>
            </div>
        </div>
    );
};

export default Signup;
