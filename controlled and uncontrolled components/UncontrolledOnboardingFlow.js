import React, { useState } from "react";

export default function UncontrolledOnboardingFlow({ children, onFinish }) {
  const [onbordingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToNext = (stepData) => {
    const nextIndex = currentIndex + 1;
    const updatedData = {
      ...onbordingData,
      ...stepData,
    };
    if (nextIndex < children.length) {
      setCurrentIndex(nextIndex);
    } else {
      onFinish(updatedData);
    }
    setOnboardingData(updatedData);
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
const StepThree = ({ goToNext }) => (
  <>
    <h1>Step3</h1>
    <button onClick={() => goToNext({ job: "programming" })}></button>
  </>
);

function app() {
  return (
    <UncontrolledOnboardingFlow
      onFinish={(data) => {
        console.log(data);
      }}
    >
      <StepOne />
      <StepTwo />
      <StepThree />
    </UncontrolledOnboardingFlow>
  );
}
