import React from 'react'

const FollowersModal = ({ user }) => {
    console.log(user)
    return (
        <div className='min-w-[200px] min-h-[100px] fixed right-[650px] bg-white shadow-md rounded-md'>
            {
                user?.followers?.map((item) =>
                    <div className="followwers flex justify-around p-2 items-start gap-3">
                        <img src={item.avatarUrl} alt="" className='h-[30px] w-[30px] rounded-full' />
                        <h1 className='text-xl font-semibold'>{item.firstName}</h1>
                    </div>)
            }
        </div>
    )
}

export default FollowersModal
