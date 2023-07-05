import { Resort } from '@redrich/services'
import Head from 'next/head'
import React from 'react'

type Props = {}

export default function ResortPage(props: Props) {
    return (
        <>
        <Head>
            <title>RedRich | Resorts</title>
        </Head>
        <Resort />
        </>
    )
}