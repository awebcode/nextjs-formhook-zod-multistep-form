import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import type { Session } from "next-auth"
import Image from "next/image"
import Link from "next/link"
import React from 'react'
import { Button } from "../ui/button"
import { signOut } from "@/auth"

const Avatar = ({ session }: { session: Session | null }) => {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger className="avatar bg-transparent border-none outline-none">{session?.user ? <Image width={50} height={50} className="rounded-full object-cover " src={session?.user?.image || "/vercel.svg"} alt="User Avatar" />:"Menu"}</MenubarTrigger>
                {session?.user ? <MenubarContent>
                    <MenubarItem>
                        Signed in as <MenubarShortcut>{session?.user?.name}</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem><Link href="/user">Profile</Link></MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem><Link href="/blogs">Blogs</Link></MenubarItem>
                    <MenubarItem><form action=""><Button variant={"destructive"} formAction={async () => {
                        "use server"
                        await signOut({ redirectTo: "/login" })
                    }}>Logout</Button></form></MenubarItem>
                </MenubarContent> :

                    <MenubarContent>
                        <MenubarItem>
                            Please login
                        </MenubarItem>
                        <MenubarItem><Link href="/login">Login</Link></MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem><Link href="/register">Register</Link></MenubarItem>
                    </MenubarContent>}
            </MenubarMenu>
        </Menubar>

    )
}

export default Avatar