import React from 'react'
import { FaEnvelopeOpenText } from 'react-icons/fa6'
const Newletter = () => {
  return (
    <div>
        <div>
            <h3 className='text-lg font-bold mb-2 flex item-center gap-2'><FaEnvelopeOpenText/>Email me for jobs</h3>
            <p className='text-primary/75 text-base mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tempora porro autem consequatur, corporis quam reprehenderit</p>
            <div className='w-full space-y-4'>
                <input type="email" name='email' id='email' placeholder='name@gmail.com' className='w-full block py-2 pl-3 border focus:outline-none' />
               <input type="submit" value={"Subscribe"} className='w-full block py-2 pl-3 border bg-blue rounded-sm text-white cursor-pointer font-semibold'/>
            </div>
        </div>
        {/**second box */}
        <div className='mt-24'>
            <h3 className='text-lg font-bold mb-2 flex item-center gap-2'><FaEnvelopeOpenText/>Get notice faster</h3>
            <p className='text-primary/75 text-base mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tempora porro autem consequatur, corporis quam reprehenderit</p>
            <div className='w-full space-y-4'>
               
               <input type="submit" value={"upload your resume"} className='w-full block py-2 pl-3 border bg-blue rounded-sm text-white cursor-pointer font-semibold'/>
            </div>
        </div>
    </div>
  )
}

export default Newletter