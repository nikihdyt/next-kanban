import { Medal } from 'lucide-react' // from shedcn ui
import React from 'react'

const MarketingPage = () => {
  return (
    <div className='flex items-center justify-center flex-col'>
      <div className="flex items-center justify-center flex-col">
        <div className="flex items-center border shadow-sm
        p-4 bg-violet-100 text-violet-700 rounded-full uppercase">
          <Medal className='w-6 h-6 mr-2'/>
          Task management
        </div>
        <div className='max-w-xl pt-10'>
          {/* TODO: full landing page here*/}
        ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  )
}

export default MarketingPage