import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useGlobalLogin } from "./login-context";

const userContext = createContext();

const UserProvider = ({ children }) => {
    // const [userData, setUserdata] = useState([]);
    const { notifySuccess, setUserDetail, userData, setUserdata, Users } = useGlobalLogin();
    const { userDetail } = useGlobalLogin();

    // const Users = async () => {
    //     try {
    //         const { data } = await axios.get(`/api/users`);
    //         setUserdata(data.users);
    //         console.log(data.users);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

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
            notifySuccess("profile updated successfully");
            Users();
            console.log(data.user);
        } catch (err) {
            console.log(err);
        }
    };

    const FollowUser = async (userId) => {
        const encodedToken = localStorage.getItem("anixCartUserToken");

        try {
            const { data } = await axios.post(
                `/api/users/follow/${userId}`,
                {},
                {
                    headers: { authorization: encodedToken },
                }
            );
            Users();

            setUserDetail(data.user);

            notifySuccess("followed user");
        } catch (error) {
            console.log(error);
        }
    };

    const UnfollowUser = async (userId) => {
        const encodedToken = localStorage.getItem("anixCartUserToken");
        try {
            const { data } = await axios.post(
                `/api/users/unfollow/${userId}`,
                {},
                {
                    headers: { authorization: encodedToken },
                }
            );
            Users();
            setUserDetail(data.user);
            notifySuccess("unfollowed user ");
        } catch (error) {
            console.log(error);
        }
    };

    const isFollow = (username) => {
        return (
            userDetail?.followers?.some((user) => user?.username === username) ||
            userDetail?.following?.some((user) => user?.username === username)
        );
    };

    useEffect(() => {
        Users();
    }, []);

    return (
        <userContext.Provider
            value={{ userData, EditProfile, FollowUser, UnfollowUser, isFollow }}
        >
            {children}
        </userContext.Provider>
    );
};

const useGlobalUser = () => useContext(userContext);

export { UserProvider, useGlobalUser };
