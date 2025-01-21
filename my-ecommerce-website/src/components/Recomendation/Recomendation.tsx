"use client";

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
  category: string;
}

interface RecomendationProps {
  Category: string;
}

async function getRelatedProducts(category: string) {
  const query = `*[_type == "products" && category == $category]{
    _id,
    name,
    "image": image.asset->url,
    price,
    "slug": slug.current,
    category
  }`;
  const products = await client.fetch(query, { category });
  return products;
}

const Recomendation = ({ Category }: RecomendationProps) => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const relatedProducts = await getRelatedProducts(Category);
        setData(relatedProducts.slice(0, 4)); // Limit to 5 related products
      } catch (error) {
        console.error("Error fetching related products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedProducts();
  }, [Category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-[70px]">
      <div className="w-[80%] mx-auto my-0">
        <h1 className="text-5xl font-extrabold text-center xs:text-2xl">
          You Might Also Like
        </h1>
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr] mt-[50px] gap-x-9 xs:grid-cols-2 xs:gap-y-3 lg:grid-cols-4 lg:gap-x-9">
          {data.map((product) => (
            <div
              key={product._id}
              className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md h-[350px]"
            >
              <Link href={`/products/${product.slug}`}>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-center rounded-md">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={390}
                      height={410}
                      className="xs:w-[390px] xs:h-[200px] rounded-md"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm sm:text-lg font-semibold">
                      {product.name}
                    </p>
                    <div className="flex items-center">
                      <FaStar size={10} className="text-yellow-400" />
                      <FaStar size={10} className="text-yellow-400" />
                      <FaStar size={10} className="text-yellow-400" />
                      <FaStar size={10} className="text-yellow-400" />
                      <FaStar size={10} className="text-yellow-400" />
                      <span className="ml-2 text-xs sm:text-sm">(76)</span>
                    </div>
                    <p className="text-red-600 text-xs sm:text-sm">
                      ${product.price}{" "}
                      <span className="line-through text-gray-400">
                        {product.price + 50}
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recomendation;
