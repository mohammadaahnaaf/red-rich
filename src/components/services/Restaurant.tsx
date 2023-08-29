import { images } from '@redrich-data/slideImages'
import { Slider } from '@redrich/shared'
import React from 'react'

type Props = {}

export const Restaurant = (props: Props) => {

  let [resort, setResort] = React.useState<any>({
    date: '',
    members: 1,
    type: ''
  })
  const ahnfya = React.useRef<any>(null)

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setResort((prevResort: any) => ({
      ...prevResort,
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

            <div className='grid grid-cols-3 ring-2 ring-white gap-4 items-center backdrop-blur-sm bg-[black] bg-opacity-20 p-6'>
              <div className='col-span-3 text-center'>
                <h1 className='text-white font-semibold text-2xl'>Book Hotel Now</h1>
              </div>
              <div>
                <label htmlFor='date' className='text-white text-sm font-semibold mb-2'>Check in Date</label>
                <input name='date' value={resort.date || ''} onChange={(e) => handleChange(e)} className='bg-[red] hover:bg-opacity-60 bg-opacity-50 p-2.5 outline-none w-full ring-white ring-1 text-white' type='date' placeholder='Check-in' />
              </div>
              <div>
                <label htmlFor='members' className='text-white text-sm font-semibold mb-2'>Number of Members</label>
                <input name='members' value={resort.members || 1} onChange={(e) => handleChange(e)} className='bg-[red] hover:bg-opacity-60 bg-opacity-50 p-2.5 w-full outline-none ring-white ring-1 text-white' type='number' placeholder='' />
              </div>
              <div>
                <label htmlFor='type' className='text-white text-sm font-semibold mb-2'>Room Type</label>
                <select name='type' value={resort.type || ''} onChange={(e) => handleChange(e)} className='bg-[red] hover:bg-opacity-60 bg-opacity-50 p-2.5 w-full outline-none ring-white text-white ring-1' placeholder=''>
                  <option value='family'>Family</option>
                  <option value='single'>Single</option>
                  <option value='dual-bed'>Dual Bed</option>
                  <option value='large'>Large</option>
                </select>
              </div>
              <div className='col-span-1 flex justify-center' />
              <div className='col-span-1 flex justify-center'>
                <button type='button'
                  onClick={handleFind}
                  className='text-white w-full bg-[red] bg-opacity-50 hover:bg-opacity-60 p-2.5 ring-1 ring-white'>Find</button>
              </div>
              <div className='col-span-1 flex justify-center' />
            </div>
          </div>
        </div>

      </div>


      <div ref={ahnfya} className='h-screen p-4 bg-[blue] w-full'>

      </div>

    </div>
  )
}