import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaDiscord} from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='grid grid-cols-2 lg:grid-cols-5 w-full px-[24px] min-h-[80px] items-center text-white'>
      {/* Logo */}
      <div className='flex space-x-2 items-center col-span-1'>
        <FaDiscord className='w-[40px] h-[40px] p-1' />
        <Image alt='logo' src="/img/discord.png" width='100' height='10' className='py-3'/>
      </div>
      {/* Nav Items */}
      <div className='hidden lg:inline-grid lg:col-span-3 text-[1rem]'>
        <ul className='flex space-x-10 font-medium'>
          {/* Menu items */}
          <li><Link href='/'>Download</Link></li>
          <li><Link href='/'>Nitro</Link></li>
          <li><Link href='/'>Discover</Link></li>
          <li><Link href='/'>Safety</Link></li>
          <li><Link href='/'>Support</Link></li>
          <li><Link href='/'>Blog</Link></li>
          <li><Link href='/'>Careers</Link></li>
        </ul>
        </div>
      {/* Hamburger */}
      <div className='inline-grid lg:hidden justify-end justify-end'><GiHamburgerMenu  className='w-[40px] h-[40px] p-1'/></div>
    </nav>
  )
}

export default Navbar