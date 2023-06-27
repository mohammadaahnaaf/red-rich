import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

export const Header = (props: Props) => {
    const router = useRouter()
    return (
        <div className='bg-red-800 bg-opacity-10'>
            <header className='p-5 max-w-7xl mx-auto flex items-center justify-center gap-8'>
                <div className='flex gap-8 items-center'>
                    <Link className='hover:scale-125 duration-300 text-red-600' href='/resort'>Resort</Link>
                    <Link className='hover:scale-125 duration-300 text-red-600' href='/tourism'>Tourism</Link>
                    <Link className='hover:scale-125 duration-300 text-red-600' href='/resturant'>Resturent</Link>
                </div>
                <div>
                    <button type='button' onClick={() => router.push('/')}>
                        <Image
                            className="relative dark:drop-shadow-[0_0_0.3rem_red] hover:scale-125 duration-500"
                            src="/logo/red-rich.svg"
                            alt="Red Rich Logo"
                            width={100}
                            height={50}
                            priority
                        />
                    </button>
                </div>
                <div className='flex gap-8 items-center'>
                    <Link className='hover:scale-125 duration-300 text-red-600' href='/about'>About</Link>
                    <Link className='hover:scale-125 duration-300 text-red-600' href='/contact'>Contact</Link>
                    <Link className='hover:scale-125 duration-300 text-red-600' href='/location'>Locations</Link>
                </div>
            </header>
        </div>

    )
}