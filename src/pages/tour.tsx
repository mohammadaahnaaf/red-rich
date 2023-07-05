import { Tourism } from '@redrich/services'
import Head from 'next/head'
import React from 'react'

type Props = {}

export default function TourPage(props: Props) {
    return (
        <>
            <Head>
                <title>RedRich | Tourism</title>
            </Head>
            <Tourism />
        </>
    )
}