'use client'
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom"
export default function AuthButton({label}: {label: string}) {
    const { pending } = useFormStatus();
    return <Button type="submit" className="bg-gray-200 py-2 rounded w-full disabled:bg-slate-50 disabled:text-slate-500" disabled={pending}>
        {label} {pending ? '...' : ''}
    </Button>
}