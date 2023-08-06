import { images } from '@redrich-data/slideImages'
import { Slider } from '@redrich/shared'
import React from 'react'

type Props = {}

export const Resort = (props: Props) => {

  let today = new Date()

  return (
    <div className='w-full'>
      <Slider images={images} />
      <div className='bg-white py-8'>
        <div className='max-w-6xl mx-auto w-full'>

          <div className='grid grid-cols-3 gap-4 items-center bg-red-50 p-6'>
            <div>
              <label className='text-red-800 text-sm font-semibold mb-2'>Check in Date</label>
              <input className='p-2.5 outline-none w-full ring-red-800 ring-1 text-red-800' type='date' placeholder='Check-in' />
            </div>
            <div>
              <label className='text-red-800 text-sm font-semibold mb-2'>Number of Members</label>
              <input className='p-2.5 w-full outline-none ring-red-800 ring-1 text-red-800' value={1} type='number' placeholder='' />
            </div>
            <div>
              <label className='text-red-800 text-sm font-semibold mb-2'>Room Type</label>
              <select className='p-2.5 w-full outline-none ring-red-800 text-red-800 ring-1' placeholder=''>
                <option>Family</option>
                <option>Single</option>
                <option>Dual Bed</option>
              </select>
            </div>
            <div className='col-span-1 flex justify-center' />
            <div className='col-span-1 flex justify-center'>
              <button className='text-red-800 w-full bg-white p-2.5 ring-1 ring-red-800'>Find</button>
            </div>
            <div className='col-span-1 flex justify-center' />
          </div>
        </div>
      </div>

    </div>
  )
}