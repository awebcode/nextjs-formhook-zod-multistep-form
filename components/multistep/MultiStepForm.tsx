"use client"
import React from 'react';
import { useForm, FormProvider, useFormContext, type FieldError } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useStepContext } from '@/providers/MultistepFormProvider';
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
        mode: 'all',
        reValidateMode: 'onChange',
        shouldFocusError: true,
        progressive: true,

    });
    const StepsComponent = steps[currentStep];
    const onSubmit = (data: combined) => {
        setFormData({ ...formData, ...data });

        if (currentStep < schemas.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            console.log("Final submission", { ...formData, ...data });
        }
    };

    return (
        <div className='flex justify-between flex-wrap md:flex-nowrap gap-2 min-h-screen max-w-[900px] mx-auto'>
            {/* left */}
            <div className='grid place-items-center w-full'>
                {methods.formState.errors && (
                    <p className="text-red-500">

                        {Object.entries(methods.formState.errors).map(([field, error]) => (
                            <div key={field}>
                                {field}: {error.message}
                            </div>
                        ))}
                    </p>
                )}
            </div>
            {/* right */}
            <div className="flex  justify-center flex-col items-center w-full ">
                <Stepper steps={stepLabels} currentStep={currentStep} />
                {/* Stepper */}
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)} className='space-y-6 shadow-md rounded-md  w-auto md:min-w-[400px] md:max-w-md bg-white '>
                        <StepsComponent />
                        {/* Display errors */}
                        <div className='w-full flex justify-between px-6 pb-2' >

                            <Button type="button" variant="outline" disabled={currentStep === 0} onClick={() => { if (currentStep > 0) setCurrentStep(currentStep - 1) }}>
                                Back
                            </Button>
                            <Button type="submit">{currentStep === schemas.length - 1 ? "Submit" : "Next"}</Button>
                        </div>
                    </form>
                </FormProvider>
            </div>
            {/* Final data */}
            <div className="grid place-items-center w-full text-emerald-500">
                {formData && formData.firstName && (
                    <code>
                        {JSON.stringify(
                            Object.assign({}, formData, { password: undefined, confirmPassword: undefined }),
                            null,
                            1
                        )}
                    </code>
                )}
            </div>

        </div>

    );
};




