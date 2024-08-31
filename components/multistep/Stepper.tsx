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
            <div className="text-sm text-green-600 mb-4">
                Step {currentStep + 1} / {steps.length}
            </div>

            {/* Step Circles and Labels */}
            <div className="flex items-center gap-2 transition-all duration-300 ">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-center cursor-pointer" onClick={() => setcurrentStep(index)}>
                        <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ease-in-out ${validationStatus[index]? 'bg-green-600 text-white' :currentStep === index?"bg-violet-100 text-violet-600": 'bg-rose-100 text-rose-500'
                                }`}
                        >
                            {validationStatus[index] ? (
                                <span className="text-white text-xl">✓</span>
                            ) : currentStep === index ? (
                                    <span className={`${currentStep === index ? 'text-violet-600' : 'text-red-500 text-xl'}`}>✗</span>
                            ) : (
                                        <span className={`${currentStep === index ? 'text-violet-600' : 'text-red-500 text-xl'}`}>✗</span>
                            )}
                        </div>
                        <span
                            className={`ml-2 p-1 rounded transition-colors duration-300 ease-in-out ${validationStatus[index] ? 'text-green-600 ' : currentStep === index ? "bg-violet-100 text-violet-600" : 'text-rose-500'
                                }`}
                        >
                            {step}
                        </span>
                        {index < steps.length - 1 && (
                            <div className="flex-1 border-t-2 transition-all duration-300 ease-in-out ${
                                index < currentStep ? 'border-green-600' : 'border-rose-300'
                            } mx-4"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stepper;
