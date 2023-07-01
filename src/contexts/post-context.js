import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useGlobalLogin } from "./login-context";


const postContext = createContext();

const PostProvider = ({ children }) => {
    const { notifySuccess } = useGlobalLogin()


    const [postsData, setPostsData] = useState([]);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [users, setUsers] = useState([]);
    // const notifySuccess = (content) => toast.success(content, toastify);
    const Profilehandler = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    const Posts = async () => {
        try {
            const { data } = await axios.get(`/api/posts`);
            setPostsData(data.posts);
        } catch (error) {
            console.log(error);
        }
    };
    const Users = async () => {
        try {
            const { data } = await axios.get(`/api/users`);
            setUsers(data.users);
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
            notifySuccess('post created sucessfully')

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
            notifySuccess('post deleted sucessfully')

            // notifySuccess("Item added to cart");
        } catch (err) {
            console.log(err);
            // navigate('/sign')
            // notifyWarn('please login to add items')
        }
    };
    const EditPost = async (post, postId) => {
        const encodedToken = localStorage.getItem("anixCartUserToken");
        try {
            const { data } = await axios.post(
                `/api/posts/edit/${postId}`,
                { postData: post },
                {
                    headers: { authorization: encodedToken },
                }
            );
            console.log(data);

            setPostsData(data.posts);
            notifySuccess('post edited sucessfully')
        } catch (err) {
            console.log(err);
        }
    };
    const EditProfile = async (userData) => {
        const encodedToken = localStorage.getItem("anixCartUserToken");
        try {
            const { data } = await axios.post(
                `/api/users/edit`,
                { postData: userData },
                {
                    headers: { authorization: encodedToken },
                }
            );
            console.log(data);

            setPostsData(data.posts);
            notifySuccess('profile updated sucessfully')
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        Posts();
        Users();
    }, []);

    return (
        <postContext.Provider
            value={{
                postsData,
                NewPost,
                Posts,
                DeletePost,
                EditPost,
                users,
                Users,
                isProfileOpen,
                setIsProfileOpen,
                Profilehandler,
            }}
        >
            {children}
        </postContext.Provider>
    );
};

const useGlobalPost = () => useContext(postContext);

export { PostProvider, useGlobalPost };
