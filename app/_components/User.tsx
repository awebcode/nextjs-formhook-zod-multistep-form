import { auth, signOut } from "@/auth"
import { Button } from "@/components/ui/button";
import Image from "next/image"

export default async function UserAvatar() {
    const session = await auth()

    if (!session?.user) return null

    return (
        <div className="p-5 m-2 w-full mx-auto flex flex-col bg-gray-50 shadow-md rounded-md  place-items-start gap-2 text-left">
            <h1>User {session.user.name}</h1>
            <p>Email: {session.user.email}</p>
            <Image width={50} height={50} className="rounded-full object-cover " src={session.user.image||"/vercel.svg"} alt="User Avatar" />
            <form action={async () => {
                "use server"
                await signOut({redirectTo: "/login"})
            }}>

                <Button variant={"destructive"} type="submit">Logout</Button>
            </form>
        </div>
    )
}