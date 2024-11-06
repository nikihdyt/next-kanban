import React from 'react'

const TestLayout = ({children}:
    {
        children: React.ReactNode;
    }
) => {
  return (
    <div className='bg-blue-300 h-full'>
        {children}</div>
  )
}

export default TestLayout