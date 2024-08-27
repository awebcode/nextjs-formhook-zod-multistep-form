import { useFormContext } from "react-hook-form";
import { Card, CardHeader } from "../ui/card";
import FormField from "./FormField";
import type { combined } from "@/validation/multi_formSchema";

export const StepOne = () => {
    const { register, formState: { errors } } = useFormContext<combined>();
    return (
        <Card className="p-6">
            <CardHeader>Input Names</CardHeader>
            <FormField
                type="text"
                placeholder="First Name"
                name="firstName"
                register={register}
                error={errors.firstName}
                autoComplete="given-name"
            />
            <FormField
                type="text"
                placeholder="Last Name"
                name="lastName"
                register={register}
                error={errors.lastName}
                autoComplete="family-name"
            />
        </Card>
    );
};
