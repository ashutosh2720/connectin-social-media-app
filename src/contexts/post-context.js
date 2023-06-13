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
    const NewPost = async (postData) => {

        const encodedToken = localStorage.getItem("anixCartUserToken");
        try {
            const { data } = await axios.post(
                `/api/posts`,
                { postData },
                { headers: { authorization: encodedToken } }
            );
            setPostsData(data.posts)

            // notifySuccess("Item added to cart");
        } catch (err) {
            // navigate('/sign')
            // notifyWarn('please login to add items')
        }

    };
    const DeletePost = async (postId) => {


        const encodedToken = localStorage.getItem("anixCartUserToken");
        try {
            const res = await axios.delete(`/api/posts/${postId}`, {
                headers: { authorization: encodedToken }
            });
            console.log(res)
            // setPostsData(data.posts)


            // notifySuccess("Item added to cart");
        } catch (err) {
            console.log(err)
            // navigate('/sign')
            // notifyWarn('please login to add items')
        }

    };



    useEffect(() => {
        Posts()
    }, [])

    return (
        <postContext.Provider
            value={{
                postsData,
                NewPost,
                DeletePost

            }}
        >
            {children}
        </postContext.Provider>
    );
};

const useGlobalPost = () => useContext(postContext);

export { PostProvider, useGlobalPost };
