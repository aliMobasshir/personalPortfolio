import React from 'react'

const InvertButton = ({ children , className}) => {
  return (
    <button className={`max-w-40 whitespace-nowrap rounded-md border-2 border-orange-500 px-3 py-1.5 font-sans text-[10px] font-light tracking-wide text-orange-500 transition duration-200 hover:cursor-pointer hover:border-transparent hover:bg-orange-500 hover:text-black sm:px-4 sm:py-2 sm:text-xs ${className}`}>
  {children}
</button>
  )
}

export default InvertButton
