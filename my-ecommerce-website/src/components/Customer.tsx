import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi'
import { TiTick } from 'react-icons/ti'

const Customer = ()=> {
    return (
        <div className='w-[80%]  mx-auto m-20'>
            <div className="flex justify-between items-center flex-wrap">

                <h2 className='font-extrabold text-5xl sm:sm md:3xl lg:4xl'>Our Happy Customers</h2>

                <div className="flex justify-end items-end gap-3">
                    <button className="border-gray-200 border bg-gray-200 rounded-full p-3">
                        <FiArrowLeft
                            size={20}
                            color="black"
                        />
                    </button>
                    <button className="border-gray-200 border bg-gray-200 rounded-full p-3">
                        <FiArrowRight
                            size={20}
                            color="black"
                        />
                    </button>
                </div>
            </div>
            <div className='xl:grid xl:grid-cols-3 xl:gap-x-5 lg:grid lg:grid-cols-3 lg:gap-x-5 xs:grid-cols-1 xs:gap-y-5 my-10'>
                <div className='flex flex-col gap-4 border-2 px-5 py-10 rounded-[20px] my-5'>
                    <div className='flex'>
                        <FaStar size={20} color='yellow' className='text-yellow-400' />
                        <FaStar size={20} color='yellow' className='text-yellow-400' />
                        <FaStar size={20} color='yellow' className='text-yellow-400' />
                        <FaStar size={20} color='yellow' className='text-yellow-400' />
                        <FaStar size={20} color='yellow' className='text-yellow-400' />
                    </div>
                    <div className='flex gap-3 items-center'>
                        <h1 className='font-bold text-xl'>ALex k.</h1>
                        <TiTick size={30} className='border-2 border-green-600 bg-green-600 rounded-full' />
                    </div>
                    <p>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."</p>
                </div>
                <div className='flex flex-col gap-4 border-2 rounded-[20px] px-5 py-10 my-5'>
                    <div className='flex'>
                        <FaStar size={20} color='yellow' className='text-yellow-400' />
                        <FaStar size={20} color='yellow' className='text-yellow-400' />
                        <FaStar size={20} color='yellow' className='text-yellow-400' />
                        <FaStar size={20} color='yellow' className='text-yellow-400' />
                        <FaStar size={20} color='yellow' className='text-yellow-400' />
                    </div>
                    <div className='flex gap-3 items-center'>
                        <h1 className='font-bold text-xl'>Sarah M.</h1>
                        <TiTick size={30} className='border-2 border-green-600 bg-green-600 rounded-full' />
                    </div>
                    <p>"Im blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses every piece Ive bought has exceeded my expectations."</p>
                </div>
                <div className='flex flex-col gap-4 border-2 rounded-[20px] px-5 py-10 my-5'>
                    <div className='flex'>
                        <FaStar size={20} color='yellow' className='text-yellow-400' />
                        <FaStar size={20} color='yellow' className='text-yellow-400' />
                        <FaStar size={20} color='yellow' className='text-yellow-400' />
                        <FaStar size={20} color='yellow' className='text-yellow-400' />
                        <FaStar size={20} color='yellow' className='text-yellow-400' />
                    </div>
                    <div className='flex gap-3 items-center'>
                        <h1 className='font-bold text-xl'>James L.</h1>
                        <TiTick size={30} className='border-2 border-green-600 bg-green-600 rounded-full' />
                    </div>
                    <p>"As someone who is always on the lookout for unique fashion pieces I am thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."</p>
                </div>
            </div>
        </div>
    )
}

export default Customer