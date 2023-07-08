import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import { useGlobalUser } from '../../contexts/user-context'

const LikedUser = ({ post, setLikeModal }) => {
    const { userData } = useGlobalUser()

    return (
        <div className='min-w-[200px] min-h-[100px]   bg-white shadow-md rounded-md'>
            <div className="div w-[100%] flex justify-end items-end cursor-pointer" onClick={() => setLikeModal(false)}>
                <CancelIcon />
            </div>
            {
                post?.likes?.likedBy.map((item) =>
                    <div className="followwers flex justify-around p-2 items-start gap-3">

                        <h1 className='text-xl font-semibold'>{item.username}</h1>
                    </div>)
            }
        </div>
    )
}

export default LikedUser
