import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {
    // setLink: any
}

const styles = {
    link: 'hover:scale-125 duration-200 hover:text-black text-rose-600'
}

export const Header = (props: Props) => {

    const router = useRouter()

    function handleLink(i: string) {
        router.push(i)
        // props.setLink(true)

    }

    return (
        <div
            id='headers'
            className='bg-white bg-opacity-40 z-40 backdrop-blur-sm'
        >
            <header className='py-2 max-w-6xl mx-auto flex items-center justify-evenly gap-8'>
                <div className='md:flex hidden gap-8 items-center font-semibold'>
                    <Link className={styles.link} href='/resort'>Resort</Link>
                    <Link className={styles.link} href='/tour'>Tourism</Link>
                    <Link className={styles.link} href='/restaurant'>Resturent</Link>
                </div>
                <div>
                    <button type='button' onClick={() => router.push('/')} className='grid hover:scale-[1.2] duration-500 text-center text-sm text-[red] font-semibold'>
                        <Image
                            className="relative"
                            src="/logo/red-rich-white.svg"
                            alt="Red Rich Logo"
                            width={100}
                            height={100}
                            priority
                        />
                        R E D R I C H
                    </button>
                </div>
                <div className='md:flex hidden gap-8 items-center font-semibold'>
                    <button className={styles.link} onClick={() => handleLink('/about')}>About</button>
                    {/* <Link className={styles.link} href='/about'>About</Link> */}
                    <Link className={styles.link} href='/contact'>Contact</Link>
                    <Link className={styles.link} href='/location'>Locations</Link>
                </div>
            </header>
        </div>

    )
}