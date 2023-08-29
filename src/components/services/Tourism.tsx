import { images } from '@redrich-data/slideImages'
import { Slider } from '@redrich/shared'
import React from 'react'

type Props = {}

export const Tourism = (props: Props) => {

  let [tour, setTour] = React.useState<any>({
    date: '',
    members: 1,
    type: ''
  })
  const ahnfya = React.useRef<any>(null)

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setTour((prev: any) => ({
      ...prev,
      [name]: value
    }));
  };

  function handleFind() {
    ahnfya.current.scrollIntoView()
  }

  return (
    <div className='w-full'>
      <div className='relative grid items-center'>

        <Slider images={images} />
        <div className='bg-black bg-opacity-40 py-8 absolute h-full w-full grid items-center top-0'>
          <div className='max-w-6xl mx-auto w-full'>

            <div className='grid grid-cols-4 ring-2 ring-white gap-4 items-center backdrop-blur-sm bg-[black] bg-opacity-20 p-6'>
              <div className='col-span-4 text-center'>
                <h1 className='text-white font-semibold text-2xl'>Pick The Best Spot</h1>
              </div>
              <div>
                <label htmlFor='date' className='text-white text-sm font-semibold mb-2'>Arrival Date</label>
                <input name='date' value={tour.date || ''} onChange={(e) => handleChange(e)} className='bg-[red] hover:bg-opacity-60 bg-opacity-50 p-2.5 outline-none w-full ring-white ring-1 text-white' type='date' placeholder='Check-in' />
              </div>
              <div>
                <label htmlFor='members' className='text-white text-sm font-semibold mb-2'>Number of Members</label>
                <input name='members' value={tour.members || 1} onChange={(e) => handleChange(e)} className='bg-[red] hover:bg-opacity-60 bg-opacity-50 p-2.5 w-full outline-none ring-white ring-1 text-white' type='number' placeholder='' />
              </div>
              <div>
                <label htmlFor='location' className='text-white text-sm font-semibold mb-2'>Location</label>
                <select name='location' value={tour.location || ''} onChange={(e) => handleChange(e)} className='bg-[red] hover:bg-opacity-60 bg-opacity-50 p-2.5 w-full outline-none ring-white text-white ring-1' placeholder=''>
                  <option value='coxs-bazar'>Cox&apos;s Bazar</option>
                  <option value='sylhet'>Sylhet</option>
                  <option value='kuakata'>Kuakata</option>
                  <option value='rangamati'>Rangamati</option>
                  <option value='bandarban'>Bandarban</option>
                </select>
              </div>
              <div>
                <label htmlFor='days' className='text-white text-sm font-semibold mb-2'>Days</label>
                <select name='days' value={tour.days || ''} onChange={(e) => handleChange(e)} className='bg-[red] hover:bg-opacity-60 bg-opacity-50 p-2.5 w-full outline-none ring-white text-white ring-1' placeholder=''>
                  <option value='2d'>2 night 1 day</option>
                  <option value='3d'>3 night 2 day</option>
                  <option value='4d'>4 night 3 day</option>
                  <option value='1w'>1 week</option>
                  <option value='2w'>2 week</option>
                  <option value='3w'>3 week</option>
                </select>
              </div>

              <div className='col-span-4 grid grid-cols-8'>
                <div className='col-span-3' />
                <div className='col-span-2 w-full mx-auto flex justify-center'>
                  <button type='button'
                    onClick={handleFind}
                    className='text-white w-full bg-[red] bg-opacity-50 hover:bg-opacity-60 p-2.5 ring-1 ring-white'>Find</button>
                </div>
                <div className='col-span-3' />
              </div>
            </div>
          </div>
        </div>

      </div>


      <div ref={ahnfya} className='h-screen p-4 bg-[blue] w-full'>

      </div>

    </div>
  )
}