import { Locations } from '@redrich/others'
import Head from 'next/head'
import React from 'react'

type Props = {}

export default function LocationPage(props: Props) {
    return (
        <>
        <Head>
            <title>RedRich | Locations</title>
        </Head>
        <Locations />
        </>
    )
}