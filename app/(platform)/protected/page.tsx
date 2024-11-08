'use client'

import { useAuth, UserButton, useUser } from "@clerk/nextjs"

const ProtectedPage = () => {
    const { user } = useUser()
    const { userId } = useAuth()

    return (
        <div>
            Hello {user?.firstName}
            <br />
            Your user ID is {userId}
            <br />
            <UserButton 
                afterSignOutUrl="/"
            />
        </div>
    )
}

export default ProtectedPage