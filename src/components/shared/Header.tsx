import Image from 'next/image'
import React from 'react'

type Props = {}

export const Header = (props: Props) => {
    return (
        <header className='p-5 flex items-center justify-center bg-red-800 bg-opacity-10'>
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ee6b6e]"
                src="/logo/red-rich.svg"
                alt="Red Rich Logo"
                width={80}
                height={237}
                priority
            />
        </header>
    )
}