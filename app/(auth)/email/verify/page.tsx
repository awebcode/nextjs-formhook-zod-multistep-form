import { Suspense } from "react";
import VerifyEmail from "../_components/VerifyEmail";

export default function Verify() {
    return (
        <Suspense>
            <div className='flex flex-col'>
                <VerifyEmail />
            </div>
        </Suspense>
    )
}