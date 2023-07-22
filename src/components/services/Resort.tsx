import { Button, ButtonCloud, ButtonStar, ButtonSun } from '@redrich/shared'
import React from 'react'

type Props = {}

export const Resort = (props: Props) => {
  return (
    <div className='min-h-screen grid grid-cols-4 items-start justify-evenly bg-white w-full pt-32'>
      <Button
        title='Resort'
        time={0}
        onClick={undefined} />
      <ButtonStar
        title='Resort'
        time={250}
        onClick={undefined} />
      <ButtonSun
        title='Resort'
        time={500}
        onClick={undefined} />
      <ButtonCloud
        title='Resort'
        time={750}
        onClick={undefined} />

      <Button
        title='Resort'
        time={1750}
        onClick={undefined} />
      <ButtonStar
        title='Resort'
        time={1500}
        onClick={undefined} />
      <ButtonSun
        title='Resort'
        time={1250}
        onClick={undefined} />
      <ButtonCloud
        title='Resort'
        time={1000}
        onClick={undefined} />

      <Button
        title='Resort'
        time={2000}
        onClick={undefined} />
      <ButtonStar
        title='Resort'
        time={2250}
        onClick={undefined} />
      <ButtonSun
        title='Resort'
        time={2500}
        onClick={undefined} />
      <ButtonCloud
        title='Resort'
        time={2750}
        onClick={undefined} />
    </div>
  )
}