import React from 'react'
import { useGlobalUser } from '../../contexts/user-context'

const LikedUser = ({ post }) => {
    const { userData } = useGlobalUser()

    return (
        <div className='min-w-[200px] min-h-[100px] fixed top-20 bg-white shadow-md rounded-md'>
            {
                post?.likes?.likedBy.map((item) =>
                    <div className="followwers flex justify-around p-2 items-start gap-3">

                        <h1 className='text-xl font-semibold'>{item.firstName}</h1>
                    </div>)
            }
        </div>
    )
}

export default LikedUser
