import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Link } from 'lucide-react'
import React from 'react'

export const Navbar = () => {
  return (
    <div className='fixed top-0
    w-full border-b shadow-sm bg-white 
    flex items-center
    h-14 px-4'>
        <div className='md:max-w-screen-2xl mx-auto
        flex items-center w-full justify-between'>
         <Logo/>
         <div className='space-x-4 md:block md:w-auto
         flex items-center justify-center'>
          <Button size="sm" variant="outline" asChild>
              <Link href='/sign-in'>
                Sign In
              </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href='/sign-up'>
              Get Kanban for free
            </Link>
          </Button>
         </div>
        </div>
    </div>
  )
}
