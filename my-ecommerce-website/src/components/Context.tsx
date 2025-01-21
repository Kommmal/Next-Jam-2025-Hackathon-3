import React from 'react'

const Context = () => {
  return (
    <div className='w-[80%] mx-auto py-6 bg-black xl:flex xl:justify-around xl:items-center rounded-[40px] absolute left-[10%] top-[10%] xs:flex-col sm:flex-col md:flex-col'>
        <div className=''>
            <h1 className='text-4xl font-extrabold text-white xs:text-xl w-[50%]'>STAY UPTO DATE ABOUT <br />OUR LATEST OFFERS</h1>
        </div>
        <div className='flex flex-col gap-4 w-[40%]'>
            <input type="email" placeholder='Enter your email address' className=' rounded-[40px] px-14 py-2 bg-white border-2 border-white'/>
            <button className=' rounded-[40px] px-14 py-2 bg-white border-2 border-white'>Subscribe to Newsletter</button>
        </div>
    </div>
  )
}

export default Context