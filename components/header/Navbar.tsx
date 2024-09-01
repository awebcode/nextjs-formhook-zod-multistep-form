import Link from 'next/link'
import React from 'react'
import Avatar from './Avatar'
import { auth } from '@/auth'

const Navbar = async() => {
    const session= await auth()
    return (
        <div className="flex gap-2 justify-between items-center  p-5 w-full shadow-sm">
            <div  className="logo"><Link href={"/"} className="text-gray-800 text-xl">Core <span className="text-blue-600">Components</span></Link></div>
            <ul className='flex gap-2 justify-between items-center text-blue-500'><Link href="/blogs">Blogs</Link>
                <Link href="/about">About</Link>
                <Link className="" href="/login">login</Link>
                <Link className="" href="/user">user</Link>
            </ul>
            <div><Avatar session={session}/></div>
        </div>
    )
}

export default Navbar