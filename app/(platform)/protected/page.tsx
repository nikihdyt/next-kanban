import { auth, currentUser } from '@clerk/nextjs/server'
import React from 'react'

const ProtectedPage = async () => {
    const user = await currentUser()
    const { userId } = await auth()

    return (
        <div>
            Hello {user?.firstName}
            <br />
            Your user ID is {userId}
        </div>
    )
}

export default ProtectedPage