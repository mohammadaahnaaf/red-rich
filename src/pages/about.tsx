import { Header } from '@redrich/shared'
import Head from 'next/head'
import React from 'react'

type Props = {}

export default function AboutPage(props: Props) {
    return (
        <>
            <Head>
                <title>RedRich | About</title>
            </Head>
            <Header />
        </>
    )
}