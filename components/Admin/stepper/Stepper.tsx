import React, { JSXElementConstructor, ReactElement } from 'react'

import Step from './Step'

type StepChildrenType = ReactElement<JSXElementConstructor<typeof Step>>[]

type StepperProps = {
  currentStep: number
  completeStep: number
  isInline?: boolean
  isVertical?: boolean
  navigateToStepHandler: (_index: number) => void
  width?: string
  children: StepChildrenType
  isDisabled?: boolean
}

const Stepper = ({
  isVertical,
  isInline,
  navigateToStepHandler,
  children,
  width,
  completeStep,
  currentStep = 0,
  isDisabled,
}: StepperProps) => {
  const StepHeader = () => {
    return (
      <div className={`hidden w-96 py-64 ${isVertical ? 'md:block' : 'md:flex'}`}>
        {children.map((sp, i) => {
          const stepProp: any = sp.props
          return (
            <Step
              key={i}
              isFirstStep={i === 0}
              isVertical={isVertical}
              indicator={i + 1}
              index={i}
              isInline={isInline}
              isActive={i === currentStep}
              isComplete={completeStep >= i}
              width={width}
              navigateToStepHandler={navigateToStepHandler}
              isDisabled={isDisabled}
            />
          )
        })}
      </div>
    )
  }

  return (
    <div className="stepper-wrapper">
      <div className={`${isVertical ? 'flex' : 'block'}`}>
        <StepHeader />
        <div className={isVertical ? 'md:pl-12 w-full' : 'py-6 w-full'}>
          {children[currentStep]}
        </div>
      </div>
    </div>
  )
}
export default Stepper