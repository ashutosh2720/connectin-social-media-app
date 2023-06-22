import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { useGlobalTheme } from "./Theme-context";

const bookMarkContext = createContext();

const BookMarkProvider = ({ children }) => {
    const [bookMark, setBookMark] = useState([]);
    const { notifySuccess } = useGlobalTheme()

    const addToBooksMark = async (postId) => {
        const encodedToken = localStorage.getItem("anixCartUserToken");
        try {
            const { data } = await axios.post(
                `/api/users/bookmark/${postId}`,
                {},
                {
                    headers: { authorization: encodedToken },
                }
            );

            setBookMark(data.bookmarks);
            notifySuccess('post added to bookmark')
        } catch (error) {
            console.log(error);
        }
    };

    const getBookMark = async (postId) => {
        const encodedToken = localStorage.getItem("anixCartUserToken");
        try {
            const { data } = await axios.post(
                `/api/users/bookmark/${postId}`,
                {},
                {
                    headers: { authorization: encodedToken },
                }
            );

            setBookMark(data.bookmarks);
        } catch (error) {
            console.log(error);
        }
    };
    const removeBookMark = async (postId) => {
        const encodedToken = localStorage.getItem("anixCartUserToken");
        try {
            const { data } = await axios.post(
                `/api/users/remove-bookmark/${postId}`,
                {},
                {
                    headers: { authorization: encodedToken },
                }
            );


            setBookMark(data.bookmarks);
            notifySuccess('post removed  from bookmark')
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <bookMarkContext.Provider
            value={{
                addToBooksMark,
                bookMark,
                getBookMark,
                removeBookMark,
            }}
        >
            {children}
        </bookMarkContext.Provider>
    );
};

const useGlobalBookMark = () => useContext(bookMarkContext);

export { BookMarkProvider, useGlobalBookMark };
