'use client';  // Add this line to mark the component as a Client Component
import Recomendation from '@/components/Recomendation/Recomendation';
import Review from '@/components/Review';
import Image from 'next/image';
import { useParams } from 'next/navigation';  // Import useParams from next/navigation
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';

type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  previousPrice: number;
  rating: number;
  description: string;
  image2: string,
  image3: string,
  image4: string,
};

const productData = [
  {
    id: '1',
    name: 'Courage Graphic T-shirt',
    image: '/images/Frame 32 (2).png',
    price: 120,
    previousPrice: 160,
    rating: 88,
    image2:'/images/Frame 32 (2).png',
    image3:"/images/Frame 32 (2).png",
    image4:'/images/Frame 32 (2).png',
    description: 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
  },
  {
    id: '2',
    name: 'AK-900 Wired Keyboard',
    image: '/images/Frame 33 (2).png',
    image2: '/images/Frame 33 (2).png',
    image3: '/images/Frame 33 (2).png',
    image4: '/images/Frame 33 (2).png',
    price: 960,
    previousPrice: 1160,
    rating: 75,
   
    description: 'An ergonomic wired keyboard for comfortable typing.',
  },
  {
    id: '3',
    name: 'IPS LCD Gaming Monitor',
    image: '/images/Frame 34 (2).png',
    image2: '/images/Frame 34 (2).png',
    image3: '/images/Frame 34 (2).png',
    image4: '/images/Frame 34 (2).png',    
    price: 370,
    previousPrice: 400,
    rating: 99,
    description: 'A crystal-clear IPS LCD monitor for immersive gaming.',
  },
  {
    id: '4',
    name: 'S-Series Comfort Chair',
    image: '/images/Frame 38 (2).png',
    image2: '/images/Frame 38 (2).png',
    image3: '/images/Frame 38 (2).png',
    image4: '/images/Frame 38 (2).png',
    price: 375,
    previousPrice: 400,
    rating: 99,
    description: 'A comfortable chair for long gaming or work sessions.',
  },
];

const ProductDetails = () => {
  const { id } = useParams();  // Use useParams to get dynamic id from the URL
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      const foundProduct = productData.find((p) => p.id === id) || null;
      setProduct(foundProduct);
    }
  }, [id]);

  if (!product) {
    return <p>Product not found or loading...</p>;
  }

  return (
    <div>
    <div className="w-[85%] mx-auto my-10 flex flex-col md:flex-col gap-5 xs:flex-col lg:flex-row lg:gap-5 ">
      {/* Left Section: Images */}
      <div className="flex md:flex-row gap-2 md:flex-1 xs:flex-col lg:flex-row">
        <div className="flex gap-2 mb-4 md:flex-col xs:flex-row lg:flex-col  xs:order-2 lg:order-1">
          <Image src={product.image2} alt="" width={154} height={167} />
          <Image src={product.image3} alt="" width={154} height={167} />
          <Image src={product.image4} alt="" width={154} height={167} />
        </div>
        <Image src={product.image} alt="" width={444} height={560} className=' xs:order-1 lg:order-2' />
      </div>

      {/* Right Section: Product Details */}
      <div className="flex flex-1 flex-col gap-5">
        <h1 className="text-4xl font-extrabold sm:text-sm md:text-2xl lg:text-4xl">{product.name}</h1>
        <div className="flex gap-1">
          <FaStar size={20} className="text-yellow-400 sm:[10px] md:[20px] lg-[20px]" />
          <FaStar size={20} className="text-yellow-400" />
          <FaStar size={20} className="text-yellow-400" />
          <FaStar size={20} className="text-yellow-400" />
          <FaStar size={20} className="text-yellow-400" />
          <span className="ml-3">({product.rating})</span>
        </div>
        <p className="mr-3 text-2xl">
          ${product.price}{' '}
          <span className="line-through text-gray-400">${product.previousPrice}</span>
        </p>
        <p className="text-gray-500">{product.description}</p>
        <hr />
        <div className="flex flex-col gap-2">
          <p>Select Colors</p>
          <div className="flex gap-3">
            <TiTick
              size={40}
              color="white"
              className="border-2 border-orange-900 bg-orange-900 rounded-full p-2"
            />
            <div className="border-2 border-green-900 bg-green-900 rounded-full p-2 w-[40px] h-[40px]"></div>
            <div className="border-2 border-gray-800 bg-gray-800 rounded-full p-2 w-[40px] h-[40px]"></div>
          </div>
        </div>
        <hr />
        <div>
          <p className="flex flex-col gap-3">Choose Size</p>
          <div className="text-gray-500 w-[100%] flex gap-1 sm:flex-wrap">
            <button className="border-2 w-full sm:w-[15%] bg-gray-200 px-4 py-1 xs:px-3 xs:py-1 rounded-[40px] xs:rounded-md text-sm xs:text-xs hover:bg-black hover:text-white hover:border-black md:text-sm md:rounded-[40px] md:px-6 md:py-2 lg:text-sm lg:py-2 lg:px-6 lg:rounded-[30px] lg:w-[30%]">
              Small
            </button>
            <button className="border-2 w-full sm:w-[15%] bg-gray-200 px-4 py-1 xs:px-3 xs:py-1 rounded-[40px] xs:rounded-md text-sm xs:text-xs hover:bg-black hover:text-white hover:border-black md:text-sm md:rounded-[40px] md:px-6 md:py-2 lg:text-sm lg:py-2 lg:px-6 lg:rounded-[30px] lg:w-[30%]">
              Medium
            </button>
            <button className="border-2 w-full sm:w-[15%] bg-gray-200 px-4 py-1 xs:px-3 xs:py-1 rounded-[40px] xs:rounded-md text-sm xs:text-xs hover:bg-black hover:text-white hover:border-black md:text-sm md:rounded-[40px] md:px-6 md:py-2 lg:text-sm lg:py-2 lg:px-6 lg:rounded-[30px] lg:w-[30%]">
              Large
            </button>
            <button className="border-2 w-full sm:w-[15%] bg-gray-200 px-4 py-1 xs:px-3 xs:py-1 rounded-[40px] xs:rounded-md text-sm xs:text-xs hover:bg-black hover:text-white hover:border-black md:text-sm md:rounded-[40px] md:px-6 md:py-2 lg:text-sm lg:py-2 lg:px-6 lg:rounded-[30px] lg:w-[30%]">
              X-Large
            </button>
          </div>
        </div>
        <div className="flex  sm:w-[100%] sm:flex-row gap-2">
          <div className="w-full sm:w-[30%] md:w-[30%] text-gray-500 flex  ">
            <button className="border-2 border-r-gray-300 bg-gray-200 rounded-l-[40px] px-4 py-1 sm:py-1">
              -
            </button>
            <button className="border-2 bg-gray-200 px-4 py-1 sm:py-2">1</button>
            <button className="border-2 bg-gray-200 border-l-gray-300 rounded-r-[40px] px-4 py-1 sm:py-1">
              +
            </button>
          </div>
          <button className="w-full sm:w-[60%] md:[60%] border-2 bg-black text-white rounded-[40px] border-black py-2 sm:py-3">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
    {/* Review Section */}
    <div className="flex flex-row gap-4 overflow-x-auto">
      <Review />
    </div>
    {/* Recommendation Section */}
    <Recomendation />
  </div>  );
};

export default ProductDetails;
