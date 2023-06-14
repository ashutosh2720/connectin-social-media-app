import React from 'react'
import { useState } from 'react'
import { useGlobalLogin } from '../../contexts/login-context'

const Profile = () => {
    const { userDetail } = useGlobalLogin()

    return (
        <div>
            {/* {userDetail.email} */}

        </div>
    )
}

export default Profile
