import React from 'react'
import Indicator from './Indicator'

export type StepProps = {
  // eslint-disable-next-line no-undef
  indicator: JSX.Element | number | boolean
  navigateToStepHandler: (_index: number) => void
  index: number
  isInline?: boolean
  isActive: boolean
  isComplete?: boolean
  isError?: boolean
  isVertical?: boolean
  isFirstStep: boolean
  width?: string
  isDisabled?: boolean
}

const Step = ({
  indicator,
  navigateToStepHandler,
  index,
  isActive,
  isComplete,
  isVertical,
  isFirstStep,
  isError,
  width = 'w-60',
  isDisabled = true,
}: StepProps) => {
  return (
    <div className="flex justify-between">
      {isVertical && (
        <div
          onKeyDown={() => (isDisabled ? {} : navigateToStepHandler(index))}
          className={`cursor-pointer flex items-end w-max
        ${
          isActive
            ? 'text-blue-600'
            : isError
            ? 'text-red-500'
            : isComplete
            ? 'text-blue-400'
            : 'text-gray-900'
        }`}
          onClick={() => (isDisabled ? {} : navigateToStepHandler(index))}
        >
        
        </div>
      )}
      <div
        className={`${
          isVertical
            ? `pl-7 flex flex-col justify-center items-center  ${
                isFirstStep && 'items-end'
              }`
            : 'flex items-center'
        }`}
      >
        {/* step line(separator) */}
        {!isFirstStep && (
          <div
            className={`${isComplete ? 'border-primary-400' : 'border-silver'}
          ${isVertical ? 'separator_ h-16 border-l-2' : `${width} border-b-2`} 
          ${isFirstStep ? 'h-0 border-none' : ''}`}
          ></div>
        )}
        {/* step (in numbers) indicator */}
        <Indicator
          isCircular={true}
          hasError={isError}
          isActive={isActive}
          isComplete={isComplete}
          clicked={() => navigateToStepHandler(index)}
        >
          {indicator}
        </Indicator>
      </div>
    </div>
  )
}

export default Step
