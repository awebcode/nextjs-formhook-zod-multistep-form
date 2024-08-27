// // useInput.ts
// import { useState } from 'react';
// import { z, ZodError } from 'zod';

// type UseInputReturn<T> = {
//     value: T;
//     error: string | null;
//     onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//     validate: () => void;
// };

// export default function useInput<T extends keyof SchemaType>(field: T): UseInputReturn<SchemaType[T]> {
//     const [value, setValue] = useState<SchemaType[T]>(schema.shape[field].safeParse('').data || '' as SchemaType[T]);
//     const [error, setError] = useState<string | null>(null);

//     const validate = () => {
//         try {
//             schema.shape[field].parse(value);
//             setError(null);
//         } catch (err) {
//             if (err instanceof ZodError) {
//                 setError(err.issues[0].message);
//             }
//         }
//     };

//     const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setValue(event.target.value as SchemaType[T]);
//         validate();
//     };

//     return {
//         value,
//         error,
//         onChange,
//         validate,
//     };
// }
