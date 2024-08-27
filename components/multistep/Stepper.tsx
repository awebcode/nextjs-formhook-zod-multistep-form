import React from 'react';

interface StepperProps {
    steps: string[];
    currentStep: number;
    setcurrentStep: (step: number) => void;
    validationStatus: boolean[];
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep, setcurrentStep, validationStatus }) => {
    return (
        <div className="flex flex-col items-center mb-8">
            {/* Current Step Indicator */}
            <div className="text-sm text-violet-600 mb-4">
                Step {currentStep + 1} / {steps.length}
            </div>

            {/* Step Circles and Labels */}
            <div className="flex items-center gap-2 transition-all duration-300 ">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-center cursor-pointer" onClick={() => setcurrentStep(index)}>
                        <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ease-in-out ${validationStatus[index] ? 'bg-violet-600 text-white' :currentStep === index?"bg-green-100 text-green-600": 'bg-gray-300 text-gray-500'
                                }`}
                        >
                            {validationStatus[index] ? <span className="text-white text-xl">✓</span> : index + 1}
                        </div>
                        <span
                            className={`ml-2 transition-colors duration-300 ease-in-out ${validationStatus[index] ? 'text-violet-600 ' : currentStep === index ? "bg-green-100 text-green-600" : 'text-gray-500'
                                }`}
                        >
                            {step}
                        </span>
                        {index < steps.length - 1 && (
                            <div className="flex-1 border-t-2 transition-all duration-300 ease-in-out ${
                                index < currentStep ? 'border-violet-600' : 'border-gray-300'
                            } mx-4"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stepper;
