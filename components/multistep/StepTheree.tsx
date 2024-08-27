import { useFormContext } from "react-hook-form";
import { Card } from "../ui/card";
import FormField from "./FormField";
import type { combined } from "@/validation/multi_formSchema";
export const StepThree = () => {
    const { register, formState: { errors } } = useFormContext<combined>();
    return (
        <Card className="p-6">
            <FormField
                type="password"
                placeholder="Password"
                name="password"
                register={register}
                error={errors.password}
            />
            <FormField
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                register={register}
                error={errors.confirmPassword}
            />
        </Card>
    );
};