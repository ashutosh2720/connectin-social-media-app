import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalPost } from '../../contexts/post-context';
import { useGlobalTheme } from '../../contexts/Theme-context';

const SearchBox = ({ searchInput, setSearchInput }) => {
    const { theme } = useGlobalTheme()
    const { users } = useGlobalPost();
    console.log(users)

    let searchData = users.filter(({ username }) => username.includes(searchInput))

    if (searchData.length === 0) {
        searchData = []
    }

    return (
        <div className={`${theme === "dark-theme"
            ? "bg-neutral-900 text-white"
            : "bg-white text-black border-2 border-black-800"
            }search-model absolute  top-[50px]  w-[15%] z-300 overflow-y-auto shadow-md rounded-md text-lg`}>
            {
                searchInput ?
                    searchData.length !== 0 ?
                        <div className="search-data flex flex-col overflow-y-auto max-h-full ">
                            {
                                searchData.map(({ username }) => (
                                    <Link className='ind-search-product ' onClick={() => setSearchInput('')}>
                                        <div className="seacrh-item flex flex-col justify-around items-center">
                                            <h1>{username}</h1>

                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                        :
                        <p className='no-data-found'>No data found</p> : null
            }
        </div>
    )
}

export default SearchBox
