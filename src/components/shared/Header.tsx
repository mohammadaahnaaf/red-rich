import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

export const Header = (props: Props) => {
    const router = useRouter()
    return (
        <div className='bg-gradient-to-r via-[#510D10] from-pink-300 to-pink-300'>
            <header className='px-4 py-2 max-w-7xl mx-auto flex items-center justify-center gap-8'>
                <div className='md:flex hidden gap-8 items-center font-semibold'>
                    <Link className='hover:scale-125 duration-200 hover:text-black text-white' href='/resort'>Resort</Link>
                    <Link className='hover:scale-125 duration-200 hover:text-black text-white' href='/tour'>Tourism</Link>
                    <Link className='hover:scale-125 duration-200 hover:text-black text-white' href='/restaurant'>Resturent</Link>
                </div>
                <div>
                    <Link href='/'>
                        <Image
                            className="relative hover:scale-125 text-red-300 duration-500"
                            src="/logo/red-rich-white.svg"
                            alt="Red Rich Logo"
                            width={100}
                            height={100}
                            priority
                        />
                    </Link>
                </div>
                <div className='md:flex hidden gap-8 items-center font-semibold'>
                    <Link className='hover:scale-125 duration-200 hover:text-black text-white' href='/about'>About</Link>
                    <Link className='hover:scale-125 duration-200 hover:text-black text-white' href='/contact'>Contact</Link>
                    <Link className='hover:scale-125 duration-200 hover:text-black text-white' href='/location'>Locations</Link>
                </div>
            </header>
        </div>

    )
}