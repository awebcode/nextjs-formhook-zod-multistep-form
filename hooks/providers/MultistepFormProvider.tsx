"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

type FormData = {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    password?: string;
};

type StepContextType = {
    currentStep: number;
    setCurrentStep: (step: number) => void;
    formData: FormData;
    setFormData: (data: FormData) => void;
};

const StepContext = createContext<StepContextType | undefined>(undefined);

export const useStepContext = () => {
    const context = useContext(StepContext);
    if (!context) throw new Error("useStepContext must be used within a StepProvider");
    return context;
};

export const StepProvider = ({ children }: { children: ReactNode }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState<FormData>({});

    return (
        <StepContext.Provider value={{ currentStep, setCurrentStep, formData, setFormData }}>
            {children}
        </StepContext.Provider>
    );
};
