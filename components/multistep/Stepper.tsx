import React from 'react';

interface StepperProps {
    steps: string[];
    currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
    return (
        <div className="flex flex-col items-center mb-8">
            {/* Current Step Indicator */}
            <div className="text-sm text-gray-600 mb-4">
                Step {currentStep + 1} of {steps.length}
            </div>

            {/* Step Circles and Labels */}
            <div className="flex items-center">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-center">
                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ease-in-out ${index <= currentStep ? 'bg-indigo-600 text-white' : 'bg-gray-300 text-gray-500'
                                }`}
                        >
                            {index + 1}
                        </div>
                        <span
                            className={`ml-2 transition-colors duration-300 ease-in-out ${index <= currentStep ? 'text-indigo-600' : 'text-gray-500'
                                }`}
                        >
                            {step}
                        </span>
                        {index < steps.length - 1 && (
                            <div className="flex-1 border-t-2 transition-all duration-300 ease-in-out ${
                                index < currentStep ? 'border-indigo-600' : 'border-gray-300'
                            } mx-4"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stepper;
