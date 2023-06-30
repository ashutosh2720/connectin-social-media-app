import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const userContext = createContext();

const UserProvider = ({ children }) => {
    const [userData, setUserdata] = useState([]);

    const Users = async () => {
        try {
            const { data } = await axios.get(`/api/users`);
            setUserdata(data.users);
        } catch (error) {
            console.log(error);
        }
    };

    const EditProfile = async (userData) => {
        const encodedToken = localStorage.getItem("anixCartUserToken");
        try {
            const { data } = await axios.post(
                `/api/users/edit`,
                { userData: userData },
                {
                    headers: { authorization: encodedToken },
                }
            );

            Users();
            console.log(data.user)

        } catch (err) {
            console.log(err);
        }
    };

    const FollowUser = async (userId) => {
        const encodedToken = localStorage.getItem("anixCartUserToken");

        try {
            const { data } = await axios.post(`/api/users/follow/${userId}`, {
                headers: { authorization: encodedToken },
            });

            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const UnfollowUser = async (userId) => {
        const encodedToken = localStorage.getItem("anixCartUserToken");
        try {
            const { data } = await axios.post(`/api/users/unfollow/${userId}`, {
                headers: { authorization: encodedToken },
            });
            setUserdata(data.users);
            console.log(data.users);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        Users();
    }, []);

    return (
        <userContext.Provider
            value={{ userData, EditProfile, FollowUser, UnfollowUser }}
        >
            {children}
        </userContext.Provider>
    );
};

const useGlobalUser = () => useContext(userContext);

export { UserProvider, useGlobalUser };
