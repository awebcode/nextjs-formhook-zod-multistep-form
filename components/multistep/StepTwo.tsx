import { useFormContext } from "react-hook-form";

import { Card } from "../ui/card";
import FormField from "./FormField";
import type { combined } from "@/validation/multi_formSchema";
export const StepTwo = () => {
    const { register, formState: { errors } } = useFormContext<combined>();
    return (
        <Card className="p-6">
            <FormField
                type="email"
                placeholder="Email"
                name="email"
                register={register}
                error={errors.email}
            />
            <FormField
                type="text"
                placeholder="Phone"
                name="phone"
                register={register}
                error={errors.phone}
            />
        </Card>
    );
};