import { ReactNode, useState } from "react";



export const useMultistepsForm = ( steps : ReactNode[]) => {
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    setCurrentStep((i) => {
      if (i <= steps.length) i++;
      return i;
    });
  };

  const back = () => {
    setCurrentStep((i) => {
      if (i >= 0) i--;
      return i;
    });
  };

  return {
    currentStep,
    step: steps[currentStep],
    steps,
    next,
    back,
    isLastStep: currentStep == steps.length - 1,
    isFirstStep: currentStep == 0
  };
};
