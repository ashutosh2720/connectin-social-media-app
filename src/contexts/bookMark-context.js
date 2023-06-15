import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const bookMarkContext = createContext();

const BookMarkProvider = ({ children }) => {
    const [bookMark, setBookMark] = useState([])

    const addToBooksMark = async (postId) => {
        const encodedToken = localStorage.getItem("anixCartUserToken");
        try {
            const { data } = await axios.post(`/api/users/bookmark/${postId}`, {}, {
                headers: { authorization: encodedToken },
            });
            console.log(data.bookmarks)
            setBookMark(data.bookmarks);

            // saving the encodedToken in the localStorage
            // localStorage.setItem("token", data.encodedToken);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <bookMarkContext.Provider
            value={{
                addToBooksMark,
                bookMark
            }}
        >
            {children}
        </bookMarkContext.Provider>
    );
};

const useGlobalBookMark = () => useContext(bookMarkContext);

export { BookMarkProvider, useGlobalBookMark };
