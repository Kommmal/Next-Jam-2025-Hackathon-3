'use client';
import Recomendation from '@/components/Recomendation/Recomendation';
import Review from '@/components/Review';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { client } from '@/sanity/lib/client';
import { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext'
import { AiOutlineCheck } from 'react-icons/ai';
import { toast } from 'react-toastify';

interface SingleProduct {
  _id: string;
  image: string;
  name: string;
  price: number;
  description: string;
  slug: string;
  colors: string[];
  sizes: string[];
  category:string
}

const ProductDetails = ({ params }: { params: { slug: string } }) => {
  const [data, setData] = useState<SingleProduct | null>(null);
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string >('');
  const [selectedColor, setSelectedColor] = useState<string >('');

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "products" && slug.current == '${params.slug}' ][0] {
        _id,
        name,
        "image": image.asset->url,
        description,
        price,
        sizes,
        colors, 
        category
      }`;
      const productData = await client.fetch(query);
      setData(productData);
    };

    fetchData();
  }, [params.slug]);

  const handleAddToCart = () => {
    if (!selectedSize ) {
      toast.error('Please select a size ')
      return;
    }
    if (!selectedColor ) {
      toast.error('Please select a size  color ')
      return;
    }
    if (data) {
      addToCart({ ...data, sizes: [selectedSize], colors: [selectedColor]}); // Add product with the selected size
      toast.success('Product added to cart!')
    }
  };
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="w-[85%] mx-auto my-10 flex flex-col md:flex-col gap-5 xs:flex-col lg:flex-row lg:gap-5">
        {/* Left Section: Images */}
        <div className="flex md:flex-row gap-2 md:flex-1 xs:flex-col lg:flex-row h-[450px]">
          <div className="flex gap-2 mb-4 md:flex-col xs:flex-row lg:flex-col xs:order-2 lg:order-1">
            <Image
              src={data.image}
              alt=""
              width={130}
              height={120}
              className="md:w-[130px] md:h-[130px] xs:w-[88px] xs:h-[88px] lg:w-[130px] lg:h-[120px] rounded-lg"
            />
            <Image
              src={data.image}
              alt=""
              width={130}
              height={120}
              className="md:w-[130px] md:h-[130px] xs:w-[88px] xs:h-[88px] lg:w-[130px] lg:h-[120px] rounded-lg"
            />
            <Image
              src={data.image}
              alt=""
              width={130}
              height={120}
              className="md:w-[130px] md:h-[130px] xs:w-[88px] xs:h-[88px] lg:w-[130px] lg:h-[120px] rounded-lg"
            />
          </div>
          <Image
            src={data.image}
            alt=""
            width={400}
            height={300}
            className="xs:order-1 lg:order-2 rounded-lg"
          />
        </div>

        {/* Right Section: Product Details */}
        <div className="flex flex-1 flex-col gap-5">
          <h1 className="text-4xl font-extrabold sm:text-sm md:text-2xl lg:text-4xl">{data.name}</h1>
          <div className="flex gap-1">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <FaStar key={i} size={20} className="text-yellow-400" />
              ))}
            <span className="ml-3">(88)</span>
          </div>
          <p className="mr-3 text-2xl">
            ${data.price}{' '}
            <span className="line-through text-gray-400">${data.price + 60}</span>
          </p>
          <p className="text-gray-500">{data.description}</p>
          <hr />
          <div className="flex flex-col gap-2">
            <p>Select Colors</p>
            <div className="flex gap-3">
              {data.colors.map((color, index) => (
                <div
                  key={index}
                  className={`border-2 rounded-full p-2 w-[40px] h-[40px] ${selectedColor? 'border-black' : '' }`}
                  style={{ backgroundColor: color, borderColor: color }}
                  onClick={() => setSelectedColor(color)}
                ><AiOutlineCheck size={20} color='white' className={`${
                          selectedColor.includes(color) ? 'block ' : 'hidden'
                        }`} /></div>
              ))}
            </div>
          </div>
          <hr />
          <div>
          <p className="flex flex-col gap-3">Choose Size</p>
  <div className="text-gray-500 w-[100%] flex gap-1 sm:flex-wrap">
    {data.sizes.map((size, index) => (
      <button
        key={index}
        onClick={() => setSelectedSize(size)}
        className={`border-2 w-[80%] sm:w-[15%]  px-4 py-1 xs:px-3 xs:py-1 rounded-[40px] xs:rounded-md text-sm xs:text-xs md:text-sm md:rounded-[40px] md:px-6 md:py-2 lg:text-sm lg:py-2 lg:px-6 lg:rounded-[30px] lg:w-[30%] 
          ${selectedSize === size ? 'bg-black text-white border-black' : ' bg-gray-200 '}`}
      >
        {size}
      </button>
    ))}
  </div>
          </div>
          <div className="flex sm:w-[100%] sm:flex-row gap-2">
            <div className="w-full sm:w-[30%] md:w-[30%] text-gray-500 flex">
              <button className="border-2 border-r-gray-300 bg-gray-200 rounded-l-[40px] px-4 py-1 sm:py-1">-</button>
              <button className="border-2 bg-gray-200 px-4 py-1 sm:py-2">1</button>
              <button className="border-2 bg-gray-200 border-l-gray-300 rounded-r-[40px] px-4 py-1 sm:py-1">+</button>
            </div>
            <button
              className="w-full sm:w-[60%] md:[60%] border-2 bg-black text-white rounded-[40px] border-black py-2 sm:py-3"
              onClick={handleAddToCart}
            >
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
      <Recomendation Category = {data.category} />
    </div>
  );
};

export default ProductDetails;
