"use client";

import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
}

async function getData() {
  const query = `*[_type == "products" && tags == "newarrivals"]{
    _id,
    name,
    "image": image.asset->url,
    price,
    "slug": slug.current,
  }`;

  const data = await client.fetch(query);
  return data;
}

const Search = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState("");

  // Fetch product data from Sanity CMS
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

  // Filter products based on the search input
  const filteredProducts = search
    ? data.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 relative w-[400px]">
      {/* Search Input */}
      <div className="flex w-full">
      <AiOutlineSearch
              size={50}
              color="gray"
              className="border-2 rounded-l-[40px] px-2 py-2 bg-gray-200"
            />
            <input
              type="text"
              placeholder="Search for products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border-gray-200 border-2 px-3 py-2 bg-gray-200 text-[13px]  w-[100%] rounded-r-[40px]"
            />
</div>

      {/* Suggestions Dropdown */}
      {search && (
        <div className="absolute top-[70px] left-0 w-full bg-white border border-gray-300 shadow-md rounded z-50 max-h-[300px] overflow-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                key={product._id}
                href={`/product/${product.slug}`}
                className="flex items-center gap-4 p-2 hover:bg-gray-100 transition"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={50}
                  height={50}
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <h3 className="text-sm font-bold">{product.name}</h3>
                  <p className="text-xs text-gray-500">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <div className="p-4 text-center text-gray-500">
              No products found for "{search}".
            </div>
          )}
        </div>
      )}

      
    </div>
  );
};

export default Search;
