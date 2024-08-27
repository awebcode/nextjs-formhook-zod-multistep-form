import type { FieldError, UseFormRegister } from "react-hook-form";
import * as z from "zod";

export const stepOneSchema = z.object({
  firstName: z.string().min(3, "First name is required").max(4, "First name is too long"),
  lastName: z.string().min(1, "Last name is required"),
});

export const stepTwoSchema = z.object({
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
});

export const stepThreeSchema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
export type combined=z.infer<typeof stepOneSchema> & z.infer<typeof stepTwoSchema> & z.infer<typeof stepThreeSchema>
 export type FormFieldProps = {
   type: string;
   placeholder: string;
   name: ValidFieldNames;
   register: UseFormRegister<combined>;
   error: FieldError | undefined;
   valueAsNumber?: boolean;
 };

 export type ValidFieldNames =
   | "firstName"
   | "lastName"
   | "email"
   | "phone"
   | "password"
   | "confirmPassword";