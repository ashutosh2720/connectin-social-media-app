import React from 'react'
import { useGlobalTheme } from '../../contexts/Theme-context'
import WhatshotIcon from '@mui/icons-material/Whatshot';

const RightSidebar = () => {
    const { theme } = useGlobalTheme()
    return (
        <div className="right-side  flex justify-around flex-col">
            <div className='navigation flex justify-around gap-5  p-5 max-w-50 item-center  '>
                <h1 className='border p-2 rounded cursor-pointer hover:bg-cyan-900 transition ease-in-out delay-15 hover:text-white text-center' > Tranding</h1>
                <h1 className='border p-2 rounded w-20 cursor-pointer hover:bg-cyan-900 transition ease-in-out delay-15 hover:text-white text-center'>Latest</h1>
            </div>
            <div className={`${theme === 'dark-theme' ? 'bg-neutral-900	 text-white' : 'bg-white text-black border-2 border-black-800'}suggestion  flex justify-around items-start p-5 gap-5 flex-col`}>
                <h1>Suggestion for you</h1>
                <div className="suggestion-items flex justify-center items-center flex-col gap-5">
                    <div className="users flex justify-center items-start gap-">
                        <div className="img flex gap-5">
                            <img src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png" alt="" className='rounded-full max-w-[30%] w-28' /><h1>John</h1>
                        </div>

                        <div className="follow">
                            <button className='bg-cyan-800 rounded-full pl-2 pr-2' >+follow</button>
                        </div>
                    </div>
                </div>
                <hr className='w-full' />
                <div className="suggestion-items flex justify-center items-center flex-col gap-5">
                    <div className="users flex justify-center items-start gap-">
                        <div className="img flex gap-5">
                            <img src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png" alt="" className='rounded-full max-w-[30%] w-28' /><h1>Jeni</h1>
                        </div>

                        <div className="follow">
                            <button className='bg-cyan-800 rounded-full pl-2 pr-2' >+follow</button>
                        </div>
                    </div>
                </div>
                <hr className='w-full' />
                <div className="suggestion-items flex justify-center items-center flex-col gap-5">
                    <div className="users flex justify-center items-start gap-">
                        <div className="img flex gap-5">
                            <img src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png" alt="" className='rounded-full max-w-[30%] w-28' /><h1>Amila</h1>
                        </div>

                        <div className="follow">
                            <button className='bg-cyan-800 rounded-full pl-2 pr-2' >+follow</button>
                        </div>
                    </div>
                </div>
                <hr className='w-full' />
                <div className="suggestion-items flex justify-center items-center flex-col gap-5">
                    <div className="users flex justify-center items-start gap-">
                        <div className="img flex gap-5">
                            <img src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png" alt="" className='rounded-full max-w-[30%] w-28' /><h1>John</h1>
                        </div>

                        <div className="follow">
                            <button className='bg-cyan-800 rounded-full pl-2 pr-2' >+follow</button>
                        </div>
                    </div>
                </div>
                <hr className='w-full' />

            </div>
        </div>
    )
}

export default RightSidebar
