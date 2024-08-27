import type { FormFieldProps } from "@/validation/multi_formSchema";
import { Input } from "../ui/input";

const FormField: React.FC<FormFieldProps> = ({
    type,
    placeholder,
    name,
    register,
    error,
    valueAsNumber,
}) => (
    <>
        <Input
            className="w-full m-2 focus:ring focus:ring-blue-600 p-4" 
            type={type}
            placeholder={placeholder}
            {...register(name, { valueAsNumber })}
        />
        {error && <span className="text-rose-600 font-medium mt-2">{error.message}</span>}
    </>
);
export default FormField;