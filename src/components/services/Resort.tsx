import { Button, ButtonCloud, ButtonStar, ButtonSun } from '@redrich/shared'
import React from 'react'

type Props = {}

export const Resort = (props: Props) => {
  return (
    <div className='min-h-screen flex justify-evenly bg-white w-full pt-32'>
      <Button
        title='Resort'
        onClick={undefined} />
      <ButtonStar
        title='Resort'
        onClick={undefined} />
      <ButtonSun
        title='Resort'
        onClick={undefined} />
      <ButtonCloud
        title='Resort'
        onClick={undefined} />
    </div>
  )
}