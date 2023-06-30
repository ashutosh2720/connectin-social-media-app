import React from 'react'
import { useGlobalLogin } from '../../contexts/login-context'
import { useGlobalPost } from '../../contexts/post-context'
import { useState } from 'react'
import { useGlobalUser } from '../../contexts/user-context'

function EditProfileDialogBox({ user }) {

    const { Profilehandler } = useGlobalPost()
    const { EditProfile } = useGlobalUser()
    const [bio, setBio] = useState(user.bio)
    const [web, setWeb] = useState(user.website)

    return (
        <div className='  fixed bg-white top-[30%] left-[50%]' >
            <div className="content flex flex-col justify-around items-start p-3 shadow-md gap-5 rounded-md ">
                <div className="avtar flex justify-center items-center gap-2">
                    <h1>Avtar</h1>
                    <img src={user.avatarUrl} alt="" className='h-[40px] w-[40px] rounded-full' />
                </div>
                <div className="name flex justify-center items-center gap-2">
                    <h1>Name : </h1> <h1>{user.firstName} {user.lastName}</h1>
                </div>
                <div className="username flex justify-center items-center gap-2">
                    <h1>Username:</h1> <h1>{user.username}</h1>
                </div>
                <div className="bio flex justify-center items-center gap-2">
                    <h1>Bio: </h1> <input type="text" value={bio} className='border' onChange={(e) => setBio(e.target.value)} />
                </div>
                <div className="website flex justify-center items-center gap-2">
                    <h1>Website: </h1>
                    <input type="text" value={web} className='border' onChange={(e) => setWeb(e.target.value)} />
                </div>
                <div className="update flex justify-end items-end">
                    <h1 className='border rounded-md  pl-2 pr-2 text-right cursor-pointer' onClick={() => EditProfile({ bio: bio, web: web })} >Update</h1>
                </div>
            </div>
        </div>
    )
}

export default EditProfileDialogBox
