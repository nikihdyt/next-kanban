import React from 'react'

const TestLayout = ({children}:
    {
        children: React.ReactNode;
    }
) => {
  return (
    <div className='bg-blue-300'>
        {children}</div>
  )
}

export default TestLayout