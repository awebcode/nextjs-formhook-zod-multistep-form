import { signIn } from '@/auth'
import { Button } from '@/components/ui/button'
import React from 'react'

const SocialButtons = () => {
    return (
        <form className='flex flex-col w-full'>
            <Button variant={"outline"} formAction={async () => {
            "use server"
            await signIn("google", { redirectTo: "/user" })
        }} type="submit">Signin with Google</Button>
            <Button variant={"secondary"}
                formAction={async () => {
                    "use server"
                    await signIn("github", { redirectTo: "/user" })
                }} type="submit">Signin with Github</Button>
        
        </form>
    )
}

export default SocialButtons