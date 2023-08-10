import { Restaurant } from '@redrich/services'
import Head from 'next/head'
import React from 'react'
import '@redrich-style/resturant.module.css'

type Props = {}

export default function RestaurantPage(props: Props) {
    return (
        <>
            <Head>
                <title>RedRich | Restaurant</title>
            </Head>
            <Restaurant />
        </>
    )
}