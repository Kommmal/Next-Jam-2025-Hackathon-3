"use client"

import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
}

async function getData() {
  const query = `*[_type == 'products' && tags == "topselling"][0..4]{
    _id,
    name,
    "image": image.asset->url,
    price,
    "slug": slug.current,
  }`;

  const data = await client.fetch(query);
  return data;
}

const TopSelling = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  data.slice(2,1)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getData();
        setData(products);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []); 

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-[70px]">
      <div className="w-[80%] mx-auto my-0">
        <h1 className="text-2xl font-bold text-center">Top Selling</h1>
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[50px] gap-x-9 gap-y-6">
          {data.map((product) => (
            <div key={product._id} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
              <Link href={`/products/${product.slug}`}>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={390}
                      height={410}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm sm:text-lg font-semibold">{product.name}</p>
                    <div className="flex items-center">
                      <FaStar size={10} className="text-yellow-400" />
                      <FaStar size={10} className="text-yellow-400" />
                      <FaStar size={10} className="text-yellow-400" />
                      <FaStar size={10} className="text-yellow-400" />
                      <FaStar size={10} className="text-yellow-400" />
                      <span className="ml-2 text-xs sm:text-sm">(76)</span>
                    </div>
                    <p className="text-red-600 text-xs sm:text-sm">
                      ${product.price} <span className="line-through text-gray-400">{product.price + 50}</span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="w-[20%] mx-auto mt-[50px] lg:w-[30%] xs:w-[80%]">
          <button className="border-black text-[15px] w-full px-10 py-3 border border-solid xs:w-full xs:rounded-[40px]">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopSelling;
