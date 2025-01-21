import React from 'react'
import { FaStar } from "react-icons/fa";
import Image from 'next/image'
import Link from "next/link";

interface TopSellingCardProps {
    id: string;
    image: string; 
    name: string; 
    price: number; 
    previousPrice?: number; 
    rating: number; 
}

const TopSellingCard = ({ id, image, name, price, previousPrice, rating }: TopSellingCardProps) => {
  return (
    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
      <Link href={`/products2/${id}`}>
        <div className="flex flex-col gap-4">
          <div className="flex justify-center">
            <Image
              src={image}
              alt={name}
              width={370}
              height={390}
              className="object-contain"
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm sm:text-lg font-semibold">{name}</p>
            <div className='flex items-center'>
              <FaStar size={10} className="text-yellow-400"/>
              <FaStar size={10} className="text-yellow-400"/>
              <FaStar size={10} className="text-yellow-400"/>
              <FaStar size={10} className="text-yellow-400"/>
              <FaStar size={10} className="text-yellow-400"/>
              <span className='ml-2 text-xs sm:text-sm'>({rating})</span>
            </div>
            <p className='text-red-600 text-xs sm:text-sm'>
              ${price} <span className='line-through text-gray-400'>{previousPrice}</span>
            </p>
          </div>
 
 
        </div>
      </Link>
    </div>
  )
}

export default TopSellingCard
