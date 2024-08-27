import { useFormContext } from "react-hook-form";

import { Card, CardHeader } from "../ui/card";
import FormField from "./FormField";
import type { combined } from "@/validation/multi_formSchema";
export const StepTwo = () => {
    const { register, formState: { errors } } = useFormContext<combined>();
    return (
        <Card className="p-6">
            <CardHeader>Fill in your email and phone</CardHeader>
            <FormField
                type="email"
                placeholder="Email"
                name="email"
                register={register}
                error={errors.email}
                autoComplete="email"
            />
            <FormField
                type="tel"
                placeholder="Phone"
                name="phone"
                register={register}
                error={errors.phone}
                autoComplete="tel"
            />
        </Card>
    );
};