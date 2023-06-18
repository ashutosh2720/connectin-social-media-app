import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const postContext = createContext();

const PostProvider = ({ children }) => {
    const [postsData, setPostsData] = useState([]);

    const Posts = async () => {
        try {
            const { data } = await axios.get(`/api/posts`);
            setPostsData(data.posts);
        } catch (error) {
            console.log(error);
        }
    };

    const NewPost = async (post) => {
        const encodedToken = localStorage.getItem("anixCartUserToken");
        try {
            const { data } = await axios.post(
                `/api/posts`,
                { postData: post },
                { headers: { authorization: encodedToken } }
            );

            setPostsData(data.posts);

            // notifySuccess("Item added to cart");
        } catch (err) {
            // navigate('/sign')
            // notifyWarn('please login to add items')
        }
    };

    const DeletePost = async (postId) => {
        const encodedToken = localStorage.getItem("anixCartUserToken");
        try {
            const { data } = await axios.delete(`/api/posts/${postId}`, {
                headers: { authorization: encodedToken },
            });

            setPostsData(data.posts);

            // notifySuccess("Item added to cart");
        } catch (err) {
            console.log(err);
            // navigate('/sign')
            // notifyWarn('please login to add items')
        }
    };
    const EditPost = async (postId) => {
        const encodedToken = localStorage.getItem("anixCartUserToken");
        try {
            const { data } = await axios.post(`/api/posts/edit/${postId}`, {
                headers: { authorization: encodedToken },
            });
            console.log(data);

            setPostsData(data.posts);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        Posts();
    }, []);

    return (
        <postContext.Provider
            value={{
                postsData,
                NewPost,
                DeletePost,
                EditPost,
            }}
        >
            {children}
        </postContext.Provider>
    );
};

const useGlobalPost = () => useContext(postContext);

export { PostProvider, useGlobalPost };
