import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { TiTick } from 'react-icons/ti'
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaSlidersH } from "react-icons/fa";

const Review = () => {
    return (
        <div className='w-[80%] mx-auto m-20 '>
            <div className='w-ful mx-auto flex justify-around border-b my-6 py-3'>
                <h1 className='text-xl text-gray-500 xs:text-xs  md:text-xl lg:text-2xl'>Product Details</h1>
                <h1 className='text-xl text-gray-500 xs:text-xs md:text-xl lg:text-2xl'>Rating & Reviews</h1>
                <h1 className='text-xl text-gray-500 xs:text-xs md:text-xl lg:text-2xl'>FAQs</h1>
            </div>
            <div className="flex justify-between items-center">
                <h2 className='font-extrabold text-2xl xs:text-sm xs:font-thin md:text-2xl lg:text-3xl'>All Reviews <span className='text-gray-500 text-sm xs:text-xs'> (481)</span></h2>
                <div className="flex justify-end items-end gap-3 ">
                    <button className="border-gray-200 border bg-gray-200 rounded-full p-3 rotate-[90deg]">
                        <FaSlidersH size={24} color="black" className='xs:w-2 xs:h-2 md:w-6 md:h-6'/>
                    </button>
                    <button className="border-gray-200 border  bg-gray-200 rounded-full px-5 py-3 xs:hidden md:block lg:px-5 lg:py-3 lg:text-xl">
                        Latest
                        <select name="" id="" className='bg-gray-200'></select>
                    </button>
                    <button className="border-black border-2 text-white  bg-black rounded-full px-5 py-3 xs:text-xs xs:px-2 xs:py-2 md:text-xl md:px-4 md:py-2 lg:px-5 lg:py-3">
                        Writa a Review
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-2 w-full gap-4 items-center my-10 xs:grid-cols-1 lg:grid-cols-2 '>
                <div className='flex flex-col gap-4 border-2 px-5 py-10 rounded-[20px]'>
                    <div className='flex justify-between items-center'>
                        <div className='flex'>
                            <FaStar size={20} color='yellow' className='text-yellow-400 xs:w-4 xs:h-4' />
                            <FaStar size={20} color='yellow' className='text-yellow-400 xs:w-4 xs:h-4' />
                            <FaStar size={20} color='yellow' className='text-yellow-400 xs:w-4 xs:h-4' />
                            <FaStar size={20} color='yellow' className='text-yellow-400 xs:w-4 xs:h-4' />
                            <FaStar size={20} color='yellow' className='text-yellow-400 xs:w-4 xs:h-4' />
                        </div>
                        <div>
                            <BiDotsHorizontalRounded size={24} color="black" />
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <h1 className='font-bold text-xl'>ALex k.</h1>
                        <TiTick size={30} className='border-2 border-green-600 bg-green-600 rounded-full' />
                    </div>
                    <p className='text-gray-500'>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
                    <p className='text-gray-500'>Posted on August 17, 2023</p>
                </div>
                <div className='flex flex-col gap-4 border-2 rounded-[20px] px-5 py-10'>
                    <div className='flex justify-between items-center'>
                        <div className='flex'>
                            <FaStar size={20} color='yellow' className='text-yellow-400' />
                            <FaStar size={20} color='yellow' className='text-yellow-400' />
                            <FaStar size={20} color='yellow' className='text-yellow-400' />
                            <FaStar size={20} color='yellow' className='text-yellow-400' />
                            <FaStar size={20} color='yellow' className='text-yellow-400' />
                        </div>
                        <div>
                            <BiDotsHorizontalRounded size={24} color="black" />
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <h1 className='font-bold text-xl'>Sarah M.</h1>
                        <TiTick size={30} className='border-2 border-green-600 bg-green-600 rounded-full' />
                    </div>
                    <p className='text-gray-500'>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                    <p className='text-gray-500'>Posted on August 16, 2023</p>
                </div>
                <div className='flex flex-col gap-4 border-2 rounded-[20px] px-5 py-10'>
                    <div className='flex justify-between items-center'>
                        <div className='flex'>
                            <FaStar size={20} color='yellow' className='text-yellow-400' />
                            <FaStar size={20} color='yellow' className='text-yellow-400' />
                            <FaStar size={20} color='yellow' className='text-yellow-400' />
                            <FaStar size={20} color='yellow' className='text-yellow-400' />
                            <FaStar size={20} color='yellow' className='text-yellow-400' />
                        </div>
                        <div>
                            <BiDotsHorizontalRounded size={24} color="black" />
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <h1 className='font-bold text-xl'>James L.</h1>
                        <TiTick size={30} className='border-2 border-green-600 bg-green-600 rounded-full' />
                    </div>
                    <p className='text-gray-500'>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
                    <p className='text-gray-500'>Posted on August 17, 2023</p>
                </div>
                <div className='flex flex-col gap-4 border-2 rounded-[20px] px-5 py-10'>
                    <div className='flex justify-between items-center'>
                        <div className='flex'>
                            <FaStar size={20} color='yellow' className='text-yellow-400' />
                            <FaStar size={20} color='yellow' className='text-yellow-400' />
                            <FaStar size={20} color='yellow' className='text-yellow-400' />
                            <FaStar size={20} color='yellow' className='text-yellow-400' />
                            <FaStar size={20} color='yellow' className='text-yellow-400' />
                        </div>
                        <div>
                            <BiDotsHorizontalRounded size={24} color="black" />
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <h1 className='font-bold text-xl'>James L.</h1>
                        <TiTick size={30} className='border-2 border-green-600 bg-green-600 rounded-full' />
                    </div>
                    <p className='text-gray-500'>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
                    <p className='text-gray-500'>Posted on August 17, 2023</p>
                </div>
                <div className='flex flex-col gap-4 border-2 rounded-[20px] px-5 py-10'>
                    <div className='flex justify-between items-center'>
                        <div className='flex'>
                            <FaStar size={20} color='yellow' className='text-yellow-400' />
                            <FaStar size={20} color='yellow' className='text-yellow-400' />
                            <FaStar size={20} color='yellow' className='text-yellow-400' />
                            <FaStar size={20} color='yellow' className='text-yellow-400' />
                            <FaStar size={20} color='yellow' className='text-yellow-400' />
                        </div>
                        <div>
                            <BiDotsHorizontalRounded size={24} color="black" />
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <h1 className='font-bold text-xl'>James L.</h1>
                        <TiTick size={30} className='border-2 border-green-600 bg-green-600 rounded-full' />
                    </div>
                    <p className='text-gray-500'>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
                    <p className='text-gray-500'>Posted on August 17, 2023</p>
                </div>
                <div className='flex flex-col gap-4 border-2 rounded-[20px] px-5 py-10'>
                    <div className='flex justify-between items-center'>
                        <div className='flex'>
                            <FaStar size={20} color='yellow' className='text-yellow-400' />
                            <FaStar size={20} color='yellow' className='text-yellow-400' />
                            <FaStar size={20} color='yellow' className='text-yellow-400' />
                            <FaStar size={20} color='yellow' className='text-yellow-400' />
                            <FaStar size={20} color='yellow' className='text-yellow-400' />
                        </div>
                        <div>
                            <BiDotsHorizontalRounded size={24} color="black" />
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <h1 className='font-bold text-xl'>James L.</h1>
                        <TiTick size={30} className='border-2 border-green-600 bg-green-600 rounded-full' />
                    </div>
                    <p className='text-gray-500'>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
                    <p className='text-gray-500'>Posted on August 17, 2023</p>
                </div>
            </div>
            <div className="w-[20%] mx-auto mt-[50px] xs:w-[80%]">
          <button className="border-black text-[15px] w-full px-10 py-3 border border-solid xs:w-full xs:rounded-[40px] ">
            Load More Reviews
          </button>
        </div>
        </div>
    )
}

export default Review