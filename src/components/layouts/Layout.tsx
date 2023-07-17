import { Footer, Header } from '@redrich/shared'
import React, { useState } from 'react'
import { Animation } from './Animation'

type Props = {
    children: any
}

export const Layout = (props: Props) => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Header setLink={(i: any) => setOpen(i)} />
            {props.children}
            <Footer />
        </>
    )
}