import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import { useGlobalTheme } from '../../contexts/Theme-context'

const FollowingUsers = ({ user, setFollowingModal }) => {
    const { theme } = useGlobalTheme()
    console.log(user)
    return (
        <div className={` ${theme === "dark-theme"
            ? "bg-neutral-800 shadow-lg 	 text-white"
            : "bg-white text-black border-2 border-black-800"
            } min-w-[300px] min-h-[200px]  shadow-md rounded-md flex justify-start items-start pl-[60px]  flex-col`}>
            <div className="div w-[100%] flex justify-end items-end " onClick={() => setFollowingModal(false)}>
                <CancelIcon />
            </div>
            {
                user?.following?.map((item) =>
                    <div className="followwers flex justify-around  p-1 items-center gap-5 ">
                        <img src={item.avatarUrl} alt="" className='h-[60px] w-[60px] rounded-full' />
                        <div className="name flex justify-center flex-col">
                            <h1 className='text-2xl'>{item.firstName}</h1>
                            <h1 className='text-sm font-semibold'>{item.username}</h1>
                        </div>
                    </div>)
            }
        </div>
    )
}

export default FollowingUsers
