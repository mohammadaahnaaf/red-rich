import { images } from '@redrich-data/slideImages'
import { Slider } from '@redrich/shared'
import React from 'react'

type Props = {}

export const Resort = (props: Props) => {
  return (
    <div className='w-full'>
      <Slider images={images} />
      <div className='bg-white py-4'>
        <div className='max-w-6xl mx-auto w-full p-4 bg-pink-100 rounded-lg'>
          <div className='grid grid-cols-2 gap-2'>
            <div>
              <label className='text-red-800 text-sm font-semibold mb-2'>Full Name</label>
              <input className='p-2.5 w-full' type='text' placeholder='Your Name' />
            </div>
            <div>
            <label className='text-red-800 text-sm font-semibold mb-2'>Full Name</label>
              <input className='p-2.5 w-full' type='text' placeholder='Your Name' />
            </div>
            <div>
            <label className='text-red-800 text-sm font-semibold mb-2'>Full Name</label>
              <input className='p-2.5 w-full' type='text' placeholder='Your Name' />
            </div>
            <div>
            <label className='text-red-800 text-sm font-semibold mb-2'>Full Name</label>
              <input className='p-2.5 w-full' type='text' placeholder='Your Name' />
            </div>
            <div>
            <label className='text-red-800 text-sm font-semibold mb-2'>Full Name</label>
              <input className='p-2.5 w-full' type='text' placeholder='Your Name' />
            </div>
            <div>
            <label className='text-red-800 text-sm font-semibold mb-2'>Full Name</label>
              <input className='p-2.5 w-full' type='text' placeholder='Your Name' />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}