import { Footer, Header } from '@redrich/shared'
import React from 'react'

type Props = {
    children: any
}

export const Layout = (props: Props) => {
    return (
        <div className='min-h-screen'>
            <Header />
            {props.children}
            {/* <Footer /> */}
        </div>
    )
}