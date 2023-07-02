import axios from "axios";
import React, { useState, createContext, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const loginContext = createContext();


const LoginProvider = ({ children }) => {

    const navigate = useNavigate();
    const [userToken, setUserToken] = useState();
    const [userDetail, setUserDetail] = useState();
    const [input, setInput] = useState({
        username: "",
        password: "",
    });

    const toastify = {
        position: "top-right",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    };


    const notifyInfo = (content) => toast.info(content, toastify);
    const notifySuccess = (content) => toast.success(content, toastify);
    const notifyWarn = (content) => toast.warn(content, toastify);
    const notifyError = (content) => toast.error(content, toastify);

    useEffect(() => {
        let token = localStorage.getItem("anixCartUserToken");
        if (token) {
            setUserToken(token);
            setUserDetail(JSON.parse(localStorage.getItem("foundUser")));

        }
        else {
            navigate('/')
        }
    }, [userToken]);

    const dummyData = {
        username: "ashutosh@",
        password: "ashutosh",
    };
    const userLogin = async () => {
        try {
            let { data, status } = await axios.post("/api/auth/login", {
                username: input.username,
                password: input.password,
            });
            console.log(data.foundUser)
            if (status === 200) {
                localStorage.setItem(
                    "anixCartUserToken",
                    JSON.stringify(data.encodedToken)
                );
                localStorage.setItem("foundUser", JSON.stringify(data.foundUser));
                setUserToken(data.encodedToken);
                console.log(data.encodedToken)
                setUserDetail(data.foundUser);
                notifySuccess("Login Successfully");
            }
        } catch (err) {
            console.log(err);
            if (err.response.status === 404) {
                notifyError("User not found");
            } else if (err.response.status === 401) {
                notifyError("Invalid Credential");
            }
        }
    };

    const loginAction = (event) => {
        event.preventDefault();
        userLogin();
        setInput({
            userName: "",
            password: "",
        });
        navigate('/home')

    };

    const logoutUser = () => {
        localStorage.removeItem("anixCartUserToken");
        localStorage.removeItem("userId");
        localStorage.removeItem("foundUser");
        setUserToken("");
        setUserDetail("");
        notifyInfo("Logout Successfull!");
    };

    const signupHandler = async (firstName, lastName, email, password) => {
        try {
            const { data } = await axios.post(`/api/auth/signup`, { firstName, lastName, email, password });
            localStorage.setItem("anixCartUserToken", JSON.stringify(data.encodedToken));
            localStorage.setItem("foundUser", JSON.stringify(data.createdUser));
            setUserToken(data.encodedToken);
            setUserDetail(data.createdUser);
            notifySuccess("signup Successfully");
            console.log(data)


        } catch (error) {
            console.log(error);
        }
    };





    return (
        <loginContext.Provider
            value={{
                input,
                setInput,
                dummyData,
                userDetail,
                setUserDetail,
                userToken,
                loginAction,
                logoutUser,
                signupHandler,
                notifyInfo,
                notifySuccess,
                notifyWarn,
                notifyError
            }}
        >
            {children}
        </loginContext.Provider>
    );
};

const useGlobalLogin = () => useContext(loginContext);

export { LoginProvider, useGlobalLogin };
