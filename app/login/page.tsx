import { Button } from "@/components/ui/button"
import { signIn } from "@/auth"

export default function SignIn() {
    return (
        <form className="flex flex-col gap-4 max-w-2xl mx-auto mt-10">
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