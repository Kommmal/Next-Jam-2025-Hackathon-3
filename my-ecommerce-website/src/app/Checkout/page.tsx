'use client';
import React from 'react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';


const Page = () => {
   const { cart,total } = useCart();
   const tax = 2.5
   const Total = total + tax
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Checkout</h1>
          <Link href="/Cart">
          <button className="text-blue-500 hover:underline">Back to Cart</button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section: Order Summary */}
        <section className="lg:col-span-2 h-auto bg-white p-6 shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          {cart.map((product)=> (
          <div className="space-y-4" key={product._id}>
            {/* Product Item */}
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center space-x-4">
                <Image
                  src={product.image}
                  alt="Product"
                  width = {100}
                  height = {20}
                  className="w-20 h-20 rounded-lg object-cover"
                  />
                <div>
                  <h4 className="text-sm font-semibold">{product.name}</h4>
                  <p className="text-sm text-gray-500">Size: {product.sizes}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold">{product.price}</p>
                <p className="text-sm text-gray-500">Qty: 1</p>
              </div>
            </div>
          </div>
        ))}

          {/* Total */}
          <div className="mt-6 text-right">
            <p className="text-sm text-gray-600">Subtotal: ${total}</p>
            <p className="text-sm text-gray-600">Tax: ${tax}</p>
            <p className="text-lg font-bold">Total:{Total} </p>
          </div>
        </section>
        {/* Right Section: Payment Details */}
        <form className="max-w-4xl mx-auto p-8 space-y-6 bg-white shadow-md rounded-lg">
  <h2 className="text-3xl font-bold text-center">Checkout</h2>
  
  <div className="space-y-4">
    {/* Personal Information */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
        <input type="text" id="first-name" name="first-name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
      </div>
      <div>
        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
        <input type="text" id="last-name" name="last-name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
      </div>
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
      <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
    </div>
    <div>
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
      <input type="tel" id="phone" name="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
    </div>
  </div>
  
  {/* Shipping Address */}
  <h3 className="text-xl font-semibold mt-6">Shipping Address</h3>
  <div className="space-y-4">
    <div>
      <label htmlFor="address" className="block text-sm font-medium text-gray-700">Street Address</label>
      <input type="text" id="address" name="address" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
        <input type="text" id="city" name="city" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
      </div>
      <div>
        <label htmlFor="zip" className="block text-sm font-medium text-gray-700">ZIP Code</label>
        <input type="text" id="zip" name="zip" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
      </div>
    </div>
    <div>
      <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
      <input type="text" id="country" name="country" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
    </div>
  </div>

  {/* Payment Information */}
  <h3 className="text-xl font-semibold mt-6">Payment Information</h3>
  <div className="space-y-4">
    <div>
      <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Card Number</label>
      <input type="text" id="card-number" name="card-number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div>
        <label htmlFor="expiration" className="block text-sm font-medium text-gray-700">Expiration Date</label>
        <input type="text" id="expiration" name="expiration" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
      </div>
      <div>
        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
        <input type="text" id="cvv" name="cvv" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
      </div>
      <div>
        <label htmlFor="card-name" className="block text-sm font-medium text-gray-700">Cardholder Name</label>
        <input type="text" id="card-name" name="card-name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
      </div>
    </div>
  </div>

  {/* Terms and Submit */}
  <div className="flex items-center space-x-2">
    <input type="checkbox" id="terms" name="terms" className="h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500" required />
    <label htmlFor="terms" className="text-sm text-gray-600">I agree to the <a href="#" className="text-blue-500">Terms and Conditions</a>.</label>
  </div>

  <div className="text-center">
    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Place Order</button>
  </div>
</form>

      </main>
    </div>
  );
};

export default Page;
