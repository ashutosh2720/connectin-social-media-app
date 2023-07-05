import React, { useState } from "react";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import "./Signup.css";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useGlobalLogin } from "../../contexts/login-context";
import { useEffect } from "react";
import { useGlobalTheme } from "../../contexts/Theme-context";

const Signup = () => {
    const { input, setInput, dummyData, loginAction, userToken, signupHandler } =
        useGlobalLogin();
    const { theme } = useGlobalTheme();

    const navigate = useNavigate();

    useEffect(() => {
        if (userToken) {
            navigate("/home");
        }
    }, [userToken]);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        signupHandler();
        // Handle form submission logic here
    };

    return (
        <div className="signup">
            <div
                className={`${theme === "dark-theme"
                    ? "bg-neutral-900	 text-white"
                    : "bg-white text-black border-2 shadow-md"
                    } signup-form-container min-w-[30%]`}
            >
                <div className="text-cyan-500 flex gap-3 justify-center items-center font-bold text-6xl italic xs:hidden sm:hidden md:hidden md:inline ">
                    {" "}
                    <div className="connect text-6xl">
                        <ConnectWithoutContactIcon fontSize="" className="" />
                    </div> <p>ConnectIn </p>
                </div>
                <h2>Create an account</h2>
                <form onSubmit={handleSubmit} className="w-[100%]">
                    <div className="form-group">
                        <label htmlFor="name">First name</label>
                        <input
                            className={` ${theme === 'dark-theme' ? 'bg-neutral-900 text-white' : 'bg-white text-black'} w-full border border-gray-700 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500`}
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Last name</label>
                        <input
                            className={` ${theme === 'dark-theme' ? 'bg-neutral-900 text-white' : 'bg-white text-black'} w-full border border-gray-700 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500`}
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">user name</label>
                        <input
                            className={` ${theme === 'dark-theme' ? 'bg-neutral-900 text-white' : 'bg-white text-black'} w-full border border-gray-700 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500`}
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            className={` ${theme === 'dark-theme' ? 'bg-neutral-900 text-white' : 'bg-white text-black'} w-full border border-gray-700 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500`}
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
                            className={` ${theme === 'dark-theme' ? 'bg-neutral-900 text-white' : 'bg-white text-black'} w-full border border-gray-700 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500`}
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" onClick={() => signupHandler(formData.firstName, formData.lastName, formData.username, formData.email, formData.password)}>signup</button>
                </form>

                <p>
                    {" "}
                    Already have an account ➡️<Link to={"/"}>Signin</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
