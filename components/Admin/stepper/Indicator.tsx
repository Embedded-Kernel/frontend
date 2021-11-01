import React, { ReactNode } from 'react'

type IndicatorProps = {
  isCircular: boolean
  className?: string
  isActive?: boolean
  hasError?: boolean
  isComplete?: boolean
  clicked: () => void
  children: ReactNode
}

const Indicator = ({
  isCircular,
  className = '',
  isActive,
  hasError,
  isComplete,
  clicked,
  children,
}: IndicatorProps) => {
  return (
    <>
      <button
        className={`relative justify-center items-center w-8 h-8 
        border text-sm text-center z-2
        ${className}
         ${
           isActive
             ? 'text-white bg-primary border-blue-600'
             : isComplete
             ? 'text-white bg-primary border-blue-400'
             : 'text-gray-900 bg-gray-300 border-gray-300 font-semibold'
         }
         ${hasError ? 'bg-red-500 border-red-500' : ''}
         ${isCircular ? 'rounded-full' : 'rounded-lg'}`}
        onClick={() => clicked()}
      >
        {children}
      </button>
    </>
  )
}

export default Indicator
