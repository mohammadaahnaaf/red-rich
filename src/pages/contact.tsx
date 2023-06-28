import { Header } from '@redrich/shared'
import Head from 'next/head'
import React from 'react'

type Props = {}

export default function ContactPage(props: Props) {
    return (
        <>
        <Head>
            <title>RedRich | Contact</title>
        </Head>
        <Header />
        </>
    )
}