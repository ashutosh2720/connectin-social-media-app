import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const postContext = createContext();

const PostProvider = ({ children }) => {
    const [postsData, setPostsData] = useState([])
    console.log(postsData)

    const Posts = async () => {
        try {
            const { data } = await axios.get(`/api/posts`);
            setPostsData(data.posts)

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        Posts()
    }, [])

    return (
        <postContext.Provider
            value={{
                postsData

            }}
        >
            {children}
        </postContext.Provider>
    );
};

const useGlobalPost = () => useContext(postContext);

export { PostProvider, useGlobalPost };
