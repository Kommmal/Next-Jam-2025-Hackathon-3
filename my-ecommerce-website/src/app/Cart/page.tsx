'use client';
import React from 'react';
import Image from 'next/image';
import { FaTag, FaTrash } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const page = () => {
  const { cart , removeFromCart, calculateSubtotal, discount, deliveryFee,total } = useCart();


 
 
  return cart.length > 0 ? (
    <div className="w-[90%] mx-auto flex flex-col gap-9 my-10">
      <h1 className="text-sm sm:text-lg">
        <Link href="/">Home</Link> / <Link href="/Cart">Cart</Link>
      </h1>
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold">YOUR CART</h1>
      <div className="flex flex-col lg:flex-row gap-5">
        {/* Cart Items */}
        <div className="lg:w-[60%] flex flex-col gap-6 border-2 px-5 py-3 rounded-lg">
          
            {cart.map((product) => (
              <div key={product._id}>
                <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={124}
                    height={110}
                    className="w-full sm:w-[20%]"
                  />
                  <div className="w-full sm:w-[70%] flex flex-col gap-3">
                    <div className="flex justify-between">
                      <h1 className="text-lg sm:text-xl font-semibold">
                        {product.name}
                      </h1>
                      <FaTrash size={20} color="orange" onClick={() => {removeFromCart(product._id)}} />
                    </div>
                    <div>
                      <p>
                        Size: <span className="text-gray-500">{product.sizes}</span>
                      </p>
                      <p>
                        Color: <span className="text-gray-500">{product.colors}</span>
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <h1 className="text-xl sm:text-2xl font-bold">${product.price}</h1>
                      <div className="flex text-gray-500">
                        <button className="border-2 border-r-gray-300 bg-gray-200 rounded-l-[40px] px-3 py-1 sm:px-4 sm:py-2">
                          -
                        </button>
                        <button className="border-2 bg-gray-200 px-3 py-1 sm:px-4 sm:py-2">
                          1
                        </button>
                        <button className="border-2 bg-gray-200 border-l-gray-300 rounded-r-[40px] px-3 py-1 sm:px-4 sm:py-2">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          
          
        </div>

        {/* Order Summary Section */}
        <div className="lg:w-[40%]">
          <div className="flex flex-col gap-5 px-5 py-5 w-full border-2 rounded-[20px]">
            <h2 className="text-xl sm:text-2xl font-bold">Order Summary</h2>
            <div className="flex justify-between">
              <p>Subtotal:</p>
              <p>${calculateSubtotal()}</p>
            </div>
            <div className="flex justify-between">
              <p>Discount (-20%):</p>
              <p>-${discount.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p>Delivery Fee:</p>
              <p>${deliveryFee}</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Total:</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <div className="flex gap-3">
              <button className="w-[70%] border text-gray-500 py-2 px-2 rounded-[40px] flex gap-2">
                <FaTag size={20} /> Add promo code
              </button>
              <button className="w-[30%] border-2 border-black bg-black text-white rounded-[20px] py-2">
                Apply
              </button>
            </div>
            <Link href="/Checkout">
              <button className="w-full border-2 border-black bg-black text-white rounded-[20px] flex justify-center py-2 gap-2">
                Go to Checkout <FiArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) :  (
    <div className="w-[90%] mx-auto flex text-center flex-col gap-9 my-10">
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold">YOUR CART IS EMPTY</h1>
      <Link href="/">
        <button className=" border-2 w-[25%] border-black bg-black text-white rounded-[10px] py-2 mt-5">
          Go Back to Shopping
        </button>
      </Link>
    </div>
  );
};

export default page;
