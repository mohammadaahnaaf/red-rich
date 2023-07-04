import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

export const Header = (props: Props) => {
    const router = useRouter()
    return (
        <div className='bg-gradient-to-r via-teal-300 from-white to-white'>
            <header className='px-4 py-4 max-w-7xl mx-auto flex items-center justify-center gap-8'>
                <div className='md:flex hidden gap-8 items-center font-semibold'>
                    <Link className='hover:scale-125 duration-200 hover:text-black text-[red]' href='/resort'>Resort</Link>
                    <Link className='hover:scale-125 duration-200 hover:text-black text-[red]' href='/tourism'>Tourism</Link>
                    <Link className='hover:scale-125 duration-200 hover:text-black text-[red]' href='/resturant'>Resturent</Link>
                </div>
                <div>
                    <Link href='/'>
                        <Image
                            className="relative hover:scale-125 duration-500"
                            src="/logo/red-rich-logo.svg"
                            alt="Red Rich Logo"
                            width={90}
                            height={90}
                            priority
                        />
                    </Link>
                </div>
                <div className='md:flex hidden gap-8 items-center font-semibold'>
                    <Link className='hover:scale-125 duration-200 hover:text-black text-[red]' href='/about'>About</Link>
                    <Link className='hover:scale-125 duration-200 hover:text-black text-[red]' href='/contact'>Contact</Link>
                    <Link className='hover:scale-125 duration-200 hover:text-black text-[red]' href='/location'>Locations</Link>
                </div>
            </header>
        </div>

    )
}