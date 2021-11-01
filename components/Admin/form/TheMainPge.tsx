import exp from 'constants';
import React, {useState} from 'react';
import Stepper from '../stepper/Stepper';
import Mainpage from './mainPage';
import SecondPage from './SecondPage';

const TheMainPge = () =>{
    const [currentStep,setCurrentStep] = useState(0);
    const [completeStep, setCompleteStep] = useState(0);

    const nextStep = (isComplete:boolean) =>{
        setCurrentStep((currentStep)=>currentStep+1)
        // if (isComplete) setCompleteStep((completeStep)=>completeStep+1)
    }

    const prevStep = () =>{
        setCurrentStep((currentStep)=>currentStep-1)
    }

    const navigateToStepHandler = (index:number) =>{
        if(index!==currentStep){
            setCurrentStep(index)
        }
    }

    return (
        <div className="">
  <Stepper
        isVertical
        currentStep={currentStep}
        completeStep={completeStep}
        navigateToStepHandler={navigateToStepHandler}
        >

            <Mainpage
            isVertical
            nextStep={nextStep}
            />
            <SecondPage
            isVertical
            prevStep={prevStep}
            nextStep={nextStep}
            />

            </Stepper>
        </div>
      
    )
}

export default TheMainPge