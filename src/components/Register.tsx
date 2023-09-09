import React from 'react'

// icons
import ticket from '../assets/icons/ion_ticket.svg'
import mic from '../assets/icons/mingcute_mic-fill.svg'

import img1 from '../assets/icons/Frame86.svg'
import img2 from '../assets/icons/Rectangle90.png'

const Register = () => {
  return (
    <div className='w-full grid lg:grid-cols-2 mt-10 mb-10 items-center justify-center gap-8 px-4 lg:px-16'>
      <div className='h-[270px] bg-[#4121CF]  rounded-3xl p-6  grid grid-cols-3 gap-4'>
        <div className='flex flex-col items-start col-span-2 justify-around'>
          <h1 className='text-3xl font-semibold text-primary-white'>Register to Save your Seat!</h1>
          <p className='text-sm text-[color:#E2EF9C]'>Professionals with experience in working with APIs in software systems.</p>
          <button className='btn flex items-center justify-center rounded-full w-[200px] bg-gradient-to-r from-[#ECC89D] to-[#E2EF9C] text-[#4121CF] font-semibold py-4 gap-2'> <div className='bg-[#4121CF] p-1 rounded'><img src={ticket} alt="" /></div> Register to Attend</button>
        </div>
        <div className='bg-[#4121CF] z-10'>
          <img className='z-0 mix-blend-overlay' src={img1} alt="" />
        </div>      </div>
      <div className='h-[270px] bg-[#4121CF]  rounded-3xl p-6 grid grid-cols-3 gap-4'>
        <div className='flex flex-col items-start col-span-2 justify-around'>
          <h1 className='text-3xl font-semibold text-primary-white'>Volunteer to Speak on a Topic</h1>
          <p className='text-sm text-[color:#E2EF9C]'>Professionals with experience in working with APIs in software systems.</p>
          <button className='btn flex items-center justify-center rounded-full w-[200px] bg-gradient-to-r from-[#ECC89D] to-[#E2EF9C] text-[#4121CF] font-semibold py-4 gap-2'> <div className='bg-[#4121CF] p-1 rounded'><img src={mic} alt="" /></div> Apply to Speak</button>
        </div>
        <div className='bg-[#4121CF] z-10'>
          <img className='z-0 mix-blend-overlay' src={img2} alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default Register