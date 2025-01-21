'use client'
import React, { useState, useEffect } from 'react';
import { FaSlidersH, FaAngleRight } from "react-icons/fa";
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { AiOutlineCheck } from 'react-icons/ai';


interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
  category: string;
  colors: string[];
  sizes: string[];
}

async function getData() {
  const query = `*[_type == "products"]{
    _id,
    name,
    "image": image.asset->url,
    price,
    "slug": slug.current,
    category,
    colors,
    sizes
  }`;

  const data = await client.fetch(query);
  data.splice(4, 2); // Remove some products for demonstration purposes
  return data;
}

const Page = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [visible, setVisible] = useState(false)
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedColor, setSelectedColor] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getData();
        setData(products);
        if (products.length > 0) {
          // Set min and max prices based on the fetched products
          setMinPrice(Math.min(...products.map(product => product.price)));
          setMaxPrice(Math.max(...products.map(product => product.price)));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(prevState =>
      prevState.includes(color)
        ? prevState.filter(item => item !== color)
        : [...prevState, color]
    );
  };
  const handleSizeChange = (size: string) => {
    setSelectedSize(prevState =>
      prevState.includes(size)
        ? prevState.filter(item => item !== size)
        : [...prevState, size]
    );
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "minPrice") {
      setMinPrice(Number(value));
    } else if (name === "maxPrice") {
      setMaxPrice(Number(value));
    }
  };

  // Extract unique colors
  const uniqueColors = Array.from(new Set(data.flatMap(product => product.colors)));
  const uniqueSize = Array.from(new Set(data.flatMap(product => product.sizes)));

  // Filtered Data based on Category, Color, and Price
  // Filtered Data based on Category, Color, Size, and Price Range
  const filteredData = data.filter((product) => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const colorMatch = selectedColor.length === 0 || selectedColor.some(color => product.colors.includes(color));
    const sizeMatch = selectedSize.length === 0 || selectedSize.some(size => product.sizes.includes(size));
    const priceMatch = product.price >= minPrice && product.price <= maxPrice;
    return categoryMatch && colorMatch && priceMatch && sizeMatch;
  });


  // Pagination logic
  const currentProducts = filteredData.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div className="w-[95%] mx-5 my-10 overflow-x-hidden">
      {/* Breadcrumb */}
      <h1 className="text-xl">
        <Link href="/">Home</Link> / <Link href="/Shop">Shop</Link>
      </h1>

      <div className="flex lg:flex-row sm:flex-col sm:mx-0 lg:my-24 justify-between">
        {/* Left Container */}
        <div
          className={`w-full h-[100%] sm:w-[25%] border-2 rounded-[20px] p-5 flex flex-col gap-6 left-container fixed bottom-0 bg-white z-50 transform overflow-auto ${showFilters ? 'translate-y-0' : 'translate-y-full'
            } transition-transform sm:static sm:translate-y-0`}
        >
          <div className="flex justify-between">
            <h1 className='text-xl font-bold'>Filters</h1>
            <FaSlidersH size={24} color="gray" onClick={() => setShowFilters(false)} className="cursor-pointer sm:hidden lg:block" />
          </div>

          <hr />

          {/* Category Filters */}
          <div className="flex flex-col gap-3">

            <div className="flex flex-col gap-2">
             
                <div className={`flex text-gray-500 justify-between items-center border-2 p-2 rounded-md cursor-pointer ${selectedCategory === 'all' ? 'bg-black text-white border-black' : 'bg-white border-white'}`} onClick={() => handleCategoryChange('all')}>
                  <button
                  >
                    All
                  </button>
                  <FaAngleRight size={24} className={`${selectedCategory === 'all' ? 'bg-black text-white' : 'bg-white'} `}
                  />
                </div>
                <div className={`flex text-gray-500 justify-between items-center border-2 p-2 rounded-md cursor-pointer ${selectedCategory === 'jeans' ? 'bg-black text-white border-black' : 'bg-white border-white'}`} onClick={() => handleCategoryChange('jeans')}>
                  <button
                  >
                    Jeans
                  </button>
                  <FaAngleRight size={24} className={`${selectedCategory === 'jeans' ? 'bg-black text-white' : 'bg-white'}`} />
                </div>
                <div className={`flex text-gray-500 justify-between items-center border-2 p-2 rounded-md cursor-pointer ${selectedCategory === 'tshirt' ? 'bg-black text-white border-black' : 'bg-white border-white'}`} onClick={() => handleCategoryChange('tshirt')}>
                  <button
                  >
                    T-shirt
                  </button>
                  <FaAngleRight size={24} className={`${selectedCategory === 'tshirt' ? 'bg-black text-white' : 'bg-white'}`} />
                </div>
                <div className={`flex text-gray-500 justify-between items-center border-2 p-2 rounded-md cursor-pointer ${selectedCategory === 'short' ? 'bg-black text-white border-black' : 'bg-white border-white'}`} onClick={() => handleCategoryChange('short')}>
                  <button
                  >
                    Short
                  </button>
                  <FaAngleRight size={24} className={`${selectedCategory === 'short' ? 'bg-black text-white' : 'bg-white'}`} />
                </div>
                <div className={`flex text-gray-500 justify-between items-center border-2 p-2 rounded-md cursor-pointer ${selectedCategory === 'shirt' ? 'bg-black text-white border-black' : 'bg-white border-white'}`} onClick={() => handleCategoryChange('shirt')}>
                  <button
                  >
                    Shirt
                  </button>
                  <FaAngleRight size={24} className={`${selectedCategory === 'shirt' ? 'bg-black text-white' : 'bg-white'}`} />
                </div>
                <div className={`flex text-gray-500 justify-between items-center border-2 p-2 rounded-md cursor-pointer ${selectedCategory === 'hoodie' ? 'bg-black text-white border-black' : 'bg-white border-white'}`} onClick={() => handleCategoryChange('hoodie')}>
                  <button
                  >
                    Hoodie
                  </button>
                  <FaAngleRight size={24} className={`${selectedCategory === 'hoodie' ? 'bg-black text-white' : 'bg-white'}`} />
                </div>

            </div>
          </div>
          <hr />
          {/* Price Range Filter */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <p className='text-xl font-bold'>Price</p>
              <FaAngleRight size={24} color="black" className='rotate-[90deg]'  />
            </div>
          
                <div className='relative w-full flex items-center '>
                  <input
                    type="range"
                    name="priceRange"
                    min={78}
                    max={300}
                    value={minPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                    className="w-full h-1 bg-gray-300 rounded-lg appearance-none focus:outline-none
      [&::-webkit-slider-thumb]:appearance-none 
      [&::-webkit-slider-thumb]:w-5
      [&::-webkit-slider-thumb]:h-5 
      [&::-webkit-slider-thumb]:bg-white 
      [&::-webkit-slider-thumb]:rounded-full
      [&::-moz-range-thumb]:w-5 
      [&::-moz-range-thumb]:h-5 
      [&::-moz-range-thumb]:bg-white 
      [&::-moz-range-thumb]:rounded-full
      "

                  />
                  <input
                    type="range"
                    name="priceRange"
                    min={78}
                    max={300}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="absolute top-0 w-full h-1 bg-gray-300 rounded-lg appearance-none focus:outline-none
      [&::-webkit-slider-thumb]:appearance-none 
      [&::-webkit-slider-thumb]:w-5
      [&::-webkit-slider-thumb]:h-5 
      [&::-webkit-slider-thumb]:bg-black 
      [&::-webkit-slider-thumb]:rounded-full
      [&::-moz-range-thumb]:w-5 
      [&::-moz-range-thumb]:h-5 
      [&::-moz-range-thumb]:bg-black 
      [&::-moz-range-thumb]:rounded-full
      bg-gradient-to-r from-gray-300 via-black to-gray-300"
                  />
                </div>
                <div className="flex justify-between">
                  <p>${minPrice}</p>
                  <p>${maxPrice}</p>
                </div>
          </div>



          {/* Color Filters */}
          <div className="flex flex-col gap-3">
            <p className="text-xl font-bold">Select Colors</p>
            <div className="flex flex-wrap gap-3">
              {uniqueColors.map((color) => (
                <div
                  key={color}
                  onClick={() => handleColorChange(color)}
                  className="border-2 flex items-center justify-center"
                  style={{
                    backgroundColor: color,
                    borderColor: color,
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    cursor: 'pointer',
                  }}
                ><AiOutlineCheck size={20} color='white' className={`${selectedColor.includes(color) ? 'block ' : 'hidden'
                  }`} /></div>
              ))}
            </div>
          </div>

          <hr />
          <div className="flex flex-col gap-3">
            <p className='text-xl font-bold'>Choose Sizes</p>
            <div className="flex flex-wrap gap-3 text-gray-500">
              {uniqueSize.map((size) => (
                <div
                  key={size}
                  onClick={() => handleSizeChange(size)}
                  className={`border-2 w-[100px] h-[40px] rounded-[30px] text-center px-4 py-1 ${selectedSize.includes(size) ? 'bg-black text-white border-black' : 'bg-gray-200 border-gray-200 text-black'
                    }`}
                >{size}</div>
              ))}
            </div>
          </div>

          <hr />

          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <h1 className='text-xl font-bold'>Dress Style</h1>
              <FaAngleRight size={24} color="black" className='rotate-[90deg]' />
            </div>
            <div className="flex flex-col gap-2">
              <div className='text-gray-500 flex justify-between items-center border-2 p-2 rounded-md cursor-pointer bg-white border-white'>
                <button
                >
                  Casual
                </button>
                <FaAngleRight size={24} />
              </div>
              <div className='flex text-gray-500 justify-between items-center border-2 p-2 rounded-md cursor-pointer bg-white border-white'>
                <button
                >
                  Formal
                </button>
                <FaAngleRight size={24} />
              </div>
              <div className='flex text-gray-500 justify-between items-center border-2 p-2 rounded-md cursor-pointer bg-white border-white'>
                <button
                >
                  Party
                </button>
                <FaAngleRight size={24} />
              </div>
              <div className='flex text-gray-500 justify-between items-center border-2 p-2 rounded-md cursor-pointer bg-white border-white'>
                <button
                >
                  Gym
                </button>
                <FaAngleRight size={24} />
              </div>
            </div>
          </div>
          <button className='w-full bg-black text-white px-4 py-3 rounded-[30px] border-black'>Apply Filters</button>
        </div>

        {/* Right Container */}
        <div className="w-full sm:w-[70%]">
          {/* Top Bar */}

          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold">Casual</h1>
            <p className="hidden sm:block">
              Showing {currentPage} of {Math.ceil(filteredData.length / productsPerPage)} Products
              Sort by: <span className="font-bold">Most Popular</span>
              <FaAngleRight size={24} color="black" className="rotate-[90deg]" />
            </p>
            <div className="sm:hidden block">
              <FaSlidersH size={24} color="black" onClick={() => setShowFilters(true)} />
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 mt-10 gap-x-6 gap-y-6">
            {currentProducts.map((product) => (
              <div key={product._id} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md h-[400px]">
                <Link href={`/products/${product.slug}`}>
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-center rounded-md">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={390}
                        height={410}
                        className="xs:w-[390px] xs:h-[200px] lg:h-[300px]rounded-md"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-xs sm:text-lg font-semibold">{product.name}</p>
                      <div className="flex items-center">
                        <FaStar size={15} className="text-yellow-400" />
                        <FaStar size={15} className="text-yellow-400" />
                        <FaStar size={15} className="text-yellow-400" />
                        <FaStar size={15} className="text-yellow-400" />
                        <FaStar size={15} className="text-yellow-400" />
                      </div>
                      <p className="text-xs font-se lg:text-2xl sm:text-sm">
                        ${product.price} <span className="line-through text-gray-400">{product.price + 50}</span>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between mt-10">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 border-2 rounded-md"
            >
              <FiArrowLeft size={20} />
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === Math.ceil(filteredData.length / productsPerPage)}
              className="p-2 border-2 rounded-md"
            >
              <FiArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
