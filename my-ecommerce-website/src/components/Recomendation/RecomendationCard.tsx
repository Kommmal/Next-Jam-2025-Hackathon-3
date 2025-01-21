import React from 'react'
import { FaStar } from "react-icons/fa";
import Image from 'next/image'
import Link from "next/link";

interface RecomendationCardProps {
    id: string;
    image: string; 
    name: string; 
    price: number; 
    previousPrice?: number; 
    rating: number; 
  
  }

const RecomendationCard = ({id, image, name, price, previousPrice, rating, }: RecomendationCardProps) => {
  return (
    <div className=""> 
    <Link href={`/products3/${id}`}>
         <div className="flex flex-col gap-4  ">
             <div className="justify-between  rounded ">
                 <div className='flex justify-between'>
                     <Image src={image} alt='' width={370} height={390} ></Image>
                 </div>
                 
             </div>
             <div className="flex flex-col gap-2 ">
                 <p>{name}</p>
                <div className='flex  items-center'>
                     <FaStar size={10} className=" text-yellow-400"/>
                     <FaStar size={10} className=" text-yellow-400"/>
                     <FaStar size={10} className=" text-yellow-400"/>
                     <FaStar size={10} className=" text-yellow-400"/>
                     <FaStar size={10} className=" text-yellow-400"/>
                     <span className='ml-3'>({rating})</span>
                     </div>
                 <p className='text-red-600 mr-3'>${price} <span className='line-through text-gray-400'>{previousPrice}</span></p>                        <div className='flex items-center'>
                 </div>
             </div>
         </div>
         </Link>
      </div>
  )
}

export default RecomendationCard