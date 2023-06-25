import { Footer, Header } from '@redrich/shared'
import React, { ReactComponentElement } from 'react'

type Props = {
    children: any
}

export const Layout = (props: Props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}