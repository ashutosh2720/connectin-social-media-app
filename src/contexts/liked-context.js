import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useGlobalPost } from "./post-context";



const likedContext = createContext();

const LikeProvider = ({ children }) => {
    const [likePost, setLikePost] = useState([]);
    const { Posts } = useGlobalPost()

    const addToLike = async (postId) => {
        const encodedToken = localStorage.getItem("anixCartUserToken");
        console.log(encodedToken)

        try {
            const { data } = await axios.post(`/api/posts/like/${postId}`, {}, {
                headers: { authorization: encodedToken },
            });
            console.log(data.posts)
            Posts()

        } catch (error) {
            console.log(error);
        }
    };
    const disLike = async (postId) => {
        const encodedToken = localStorage.getItem("anixCartUserToken");
        console.log(encodedToken)

        try {
            const { data } = await axios.post(`/api/posts/dislike/${postId}`, {}, {
                headers: { authorization: encodedToken },
            });
            console.log(data.posts)
            Posts()

        } catch (error) {
            console.log(error);
        }
    };


    return (
        <likedContext.Provider
            value={{
                addToLike,
                likePost,
                disLike

            }}
        >
            {children}
        </likedContext.Provider>
    );
};

const useGlobalLike = () => useContext(likedContext);

export { LikeProvider, useGlobalLike };
