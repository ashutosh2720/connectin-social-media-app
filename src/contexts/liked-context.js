import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const likedContext = createContext();

const LikeProvider = ({ children }) => {
    const [likePost, setLikePost] = useState([]);

    const addToLike = async (postId) => {
        const encodedToken = localStorage.getItem("anixCartUserToken");
        console.log(encodedToken)

        try {
            const { data } = await axios.post(`/api/posts/like/${postId}`, {}, {
                headers: { authorization: encodedToken },
            });
            console.log(data.posts)
            setLikePost(data.posts);

        } catch (error) {
            console.log(error);
        }
    };


    return (
        <likedContext.Provider
            value={{
                addToLike,
                likePost,

            }}
        >
            {children}
        </likedContext.Provider>
    );
};

const useGlobalLike = () => useContext(likedContext);

export { LikeProvider, useGlobalLike };
