import Link from 'next/link'
import React from 'react'
import { AiFillBug } from "react-icons/ai";
const NavBar = () => {

    const links=[
        {lable:"Dashbord" , href:'/'},
        {lable:"Issues" , href:'/issues'}
    ]
  return (
   <nav className='flex space-x-6 border-b mb-4 px-5 h-14 items-center text-xl '>
    <Link href='/'><AiFillBug/></Link>
    <ul className='flex space-x-6 '>
        {
            links.map((link)=> <Link  className='text-zinc-400 hover:text-zinc-800' href={link.href}>{link.lable}</Link>)
        }
       
    </ul>
   </nav>
  )
}

export default NavBar
