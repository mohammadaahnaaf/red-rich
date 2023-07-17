import Link from 'next/link'
import React from 'react'

type Props = {}

export const Footer = (props: Props) => {
    let year = new Date().getFullYear()
    return (
        <footer className='bg-white py-4 text-center'>
            <p className='text-gray-400 font-semibold'>
                Copyright © {year}{' '}
                <span className="text-sm text-red-400 hover:text-[red] cursor-pointer text-center font-bold">
                    <Link href="https://red-rich.vercel.app">
                        RedRich™{' '}
                    </Link>
                </span>
                All rights reserved.
            </p>
        </footer>
    )
}