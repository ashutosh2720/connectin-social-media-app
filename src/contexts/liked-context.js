import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const likedContext = createContext();

const LikeProvider = ({ children }) => {
    const [likePost, setLikePost] = useState([]);

    const addToLike = async (postId) => {
        const encodedToken = localStorage.getItem("anixCartUserToken");
        console.log(encodedToken)
        console.log('post id', postId)
        try {
            const data = await axios.post(`/api/posts/like/${postId}`, {}, {
                headers: { authorization: encodedToken },
            });
            console.log(data);
            // setLikePost(data.posts);
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
