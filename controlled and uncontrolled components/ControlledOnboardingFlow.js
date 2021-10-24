import React, { useState } from "react";

export default function ControlledOnboardingFlow({
  children,
  currentIndex,
  onNext,
}) {
  const goToNext = (stepData) => {
    onNext(stepData);
  };
  const currentChild = React.Children.toArray(children)[currentIndex];
  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext }); // this will be <StepOne goToNext={goToNext}/>
  }
  return currentChild;
}

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step1</h1>
    <button onClick={() => goToNext({ name: "Mohamad" })}></button>
  </>
);
const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step2</h1>
    <button onClick={() => goToNext({ age: 34 })}></button>
  </>
);
//  skip this step if the age 62
const StepThree = ({ goToNext }) => (
  <>
    <h1>This is a unique step</h1>
    <button onClick={() => goToNext({})}></button>
  </>
);
const StepFour = ({ goToNext }) => (
  <>
    <h1>Step3</h1>
    <button onClick={() => goToNext({ job: "programming" })}></button>
  </>
);

function app() {
  const [onbordingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnboardingData({ ...onbordingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };
  return (
    <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext}>
      <StepOne />
      <StepTwo />
      {onbordingData.age >= 62 && <StepThree />}
      <StepFour />
    </ControlledOnboardingFlow>
  );
}
