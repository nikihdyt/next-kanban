import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Link } from 'lucide-react'
import React from 'react'

export const Footer = () => {
  return (
    <div className='fixed bottom-0
    w-full border-t bg-slate-100
    p-4'>
        <div className='md:max-w-screen-2xl mx-auto
        flex items-center w-full justify-between'>
         <Logo/>
         <div className='space-x-4 md:block md:w-auto
         flex items-center justify-center w-full'>
          <Button size="sm" variant="ghost">
            Privacy Policy
          </Button>
          <Button size="sm" variant="ghost">
            Terms of Service
          </Button>
         </div>
        </div>
    </div>
  )
}
