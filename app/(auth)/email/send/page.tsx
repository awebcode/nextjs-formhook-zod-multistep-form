import { Suspense } from "react";
import ResetForm from "../_components/ResetForm";

export default function Verify() {
    return (
        <Suspense>
            <div className='flex flex-col'>
                <ResetForm />
            </div>
        </Suspense>
    )
}