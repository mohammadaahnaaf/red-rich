import { Footer, Header } from '@redrich/shared'
import React from 'react'

type Props = {
    children: any
}

export const Layout = (props: Props) => {
    return (
        <main className='scroll-smooth'>
            <Header />
            {props.children}
            <Footer />
        </main>
    )
}