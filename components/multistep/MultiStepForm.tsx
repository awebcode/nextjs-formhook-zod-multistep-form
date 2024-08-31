"use client"
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useStepContext } from '@/providers/MultistepFormProvider';
import { stepOneSchema, stepTwoSchema, stepThreeSchema, type combined } from '@/validation/multi_formSchema';
import { Button } from '../ui/button';
import { StepOne } from './Step1';
import { StepTwo } from './StepTwo';
import { StepThree } from './StepTheree';
import Stepper from './Stepper';

const schemas = [stepOneSchema, stepTwoSchema, stepThreeSchema];
const steps = [StepOne, StepTwo, StepThree]; // Array of step components
const stepLabels = ['Step 1', 'Step 2', 'Step 3'];
export const MultiStepForm = () => {
    const { currentStep, setCurrentStep, formData, setFormData } = useStepContext();
    const [validationStatus, setValidationStatus] = React.useState<boolean[]>(Array(schemas.length).fill(false));
    const [validationErrors, setValidationErrors] = React.useState<string[]>(Array(schemas.length).fill(''));
    const methods = useForm<combined>({
        resolver: zodResolver(schemas[currentStep]),
        defaultValues: formData,
        mode: 'onTouched',
        reValidateMode: 'onChange',
        shouldFocusError: true,



    });


    //*    When a single form will be valid then mark stepper as valid
    React.useEffect(() => {
        setValidationStatus(prevStatus => {
            const newStatus = [...prevStatus];
            newStatus[currentStep] = methods.formState.isValid;

            return newStatus;
        });
        
    }, [methods.formState.isValid, currentStep]);

    //> Submit form
    const onSubmit = (data: combined) => {
        setFormData({ ...formData, ...data });

        if (currentStep < schemas.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            console.log("Final submission", { ...formData, ...data });
        }
    };

    //** */ Current step
    const StepsComponent = steps[currentStep];

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
                <Stepper validationStatus={validationStatus} steps={stepLabels} currentStep={currentStep} setcurrentStep={setCurrentStep} />
                {/* Stepper */}
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)} className='space-y-6 shadow-md rounded-md  w-auto md:min-w-[400px] md:max-w-md bg-white  backdrop-blur-lg'>
                        <StepsComponent />
                        {/* Display errors */}
                        <div className='w-full flex justify-between px-6 pb-2' >

                            <Button size={"lg"} type="button" variant="outline" disabled={currentStep === 0} onClick={() => { if (currentStep > 0) setCurrentStep(currentStep - 1) }}>
                                Back
                            </Button>
                            <Button type="submit"
                                disabled={(!methods.formState.isValid || (!methods.formState.isDirty && currentStep !== 0)) || (Object.keys(methods.formState.errors).length > 0 && currentStep === schemas.length - 1)} size={"lg"}>
                                {methods.formState.isSubmitting ? <span className="w-5 h-5   animate-spin rounded-full  border-t-2 border-blue-600 "></span> : ""}{currentStep === schemas.length - 1 ? "Submit" : "Next"}</Button>
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




