"use client"
import React from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useStepContext } from '@/hooks/providers/MultistepFormProvider';
import { stepOneSchema, stepTwoSchema, stepThreeSchema, type combined } from '@/validation/multi_formSchema';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import FormField from './FormField';
import { StepOne } from './Step1';
import { StepTwo } from './StepTwo';
import { StepThree } from './StepTheree';
import Stepper from './Stepper';

const schemas = [stepOneSchema, stepTwoSchema, stepThreeSchema];
const steps = [StepOne, StepTwo, StepThree]; // Array of step components
const stepLabels = ['Step 1', 'Step 2', 'Step 3'];
export const MultiStepForm = () => {
    const { currentStep, setCurrentStep, formData, setFormData } = useStepContext();
    const methods = useForm<combined>({
        resolver: zodResolver(schemas[currentStep]),
        defaultValues: formData,
    });
    const StepsComponent = steps[currentStep];
    let finalData 
    const onSubmit = (data: combined) => {
        setFormData({ ...formData, ...data });
        finalData = { ...formData, ...data };

        if (currentStep < schemas.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            console.log("Final submission", { ...formData, ...data });
        }
    };

    return (
        <div className='flex justify-between min-h-screen max-w-[500px] mx-auto'>
            {/* left */}
            <div className='grid place-items-center'>
                {methods.formState.errors && (
                    <pre className="text-red-500">
                        {Object.entries(methods.formState.errors).map(([field, error]) => (
                            <div key={field}>
                                {field}: {(error as any).message}
                            </div>
                        ))}
                    </pre>
                )}
            </div>
            {/* right */}
        <div className="flex  justify-center flex-col items-center ">
            <Stepper steps={stepLabels} currentStep={currentStep} />

            {/* Stepper */}

            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className='space-y-6 shadow-md rounded-sm min-w-[400px] max-w-md bg-white '>
                    <StepsComponent/>
                    {/* Display errors */}
                   
                    {/* Final data */}
                    {finalData &&  (
                        <pre className="text-green-500">
                            {JSON.stringify(finalData, null, 2)}
                        </pre>
                    )}



                    <div className='w-full flex justify-between px-6 pb-2' >
                        {currentStep > 0 && (
                            <Button type="button" variant="outline" disabled={currentStep === 0}  onClick={() => {if(currentStep > 0) setCurrentStep(currentStep - 1)}}>
                                Back
                            </Button>
                        )}
                        <Button type="submit">{currentStep === schemas.length - 1 ? "Submit" : "Next"}</Button>
                    </div>
                </form>
            </FormProvider>
            </div>
        </div>

    );
};




