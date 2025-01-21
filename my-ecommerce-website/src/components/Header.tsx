"use client"
import React, { useState } from "react"
import Link from "next/link";
import { FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi"
import { AiOutlineSearch } from "react-icons/ai"
import { useCart } from '@/context/CartContext'
import Search from "./Recomendation/Search";
import { FaCross } from "react-icons/fa";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { cart, search, setSearch } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Mobile search state

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="border-b-2">
      <div className="w-[90%] h-[15vh] mx-auto my-0 flex justify-between items-center">
        <div className="flex items-center gap-5 ">
          <div className="lg:hidden">
            {menuOpen ? (
              <FiX size={20} onClick={toggleMenu} className="cursor-pointer" aria-label="Close menu" />
            ) : (
              <FiMenu size={20} onClick={toggleMenu} className="cursor-pointer" aria-label="Open menu" />
            )}
          </div>
          <div className="lg:text-4xl sm:3xl font-extrabold">
            <h1>SHOP.CO</h1>
          </div>
        
        <div
          className={`fixed top-[15%] left-0 h-[1000px] bg-white w-[70%] shadow-lg transition-transform duration-300 z-50 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:static lg:flex lg:items-center lg:justify-center lg:bg-transparent lg:shadow-none lg:w-auto lg:translate-x-0`}
        >
          <ul className={`flex flex-col gap-7 p-5 lg:p-0 lg:flex-row lg:gap-7 lg:items-center`}>
            <li className="hover:underline hover:underline-offset-8">
              <Link href="/Shop" onClick={() => setMenuOpen(false)}>
                Shop
              </Link>
            </li>
            <li className="hover:underline hover:underline-offset-8">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                On Sale
              </Link>
            </li>
            <li className="hover:underline hover:underline-offset-8">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                New Arrivals
              </Link>
            </li>
            <li className="hover:underline hover:underline-offset-8">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Brands
              </Link>
            </li>
          </ul>
        </div>
        </div>
        <div className="flex justify-between items-center gap-5 xl:w-[50%]">
          <div className="hidden xl:flex w-[100%]">
            <Search />
          </div>
          <div className="flex gap-5 lg:hidden">
            {isSearchOpen?(<FiX size={20} className="cursor-pointer"
              onClick={() => setIsSearchOpen(false)}/>) :(<AiOutlineSearch
              size={20}
              className="cursor-pointer"
              onClick={() => setIsSearchOpen(true)} // Open search modal on mobile
              aria-label="Search products"
            />)}
            
            <Link href="/Cart" className="relative">
              <FiShoppingCart size={20} aria-label="View Cart" />
              {cart.length > 0 && (
                <span className="absolute top-[-2px] right-[-4px] w-3  px-1  text-center bg-black text-white text-[9px] rounded-full ">
                  {cart.length}
                </span>
              )}
            </Link>
            <Link href="/WishList">
              <FiUser size={20} aria-label="View Wishlist" />
            </Link>
          </div>
          <div className="hidden lg:flex gap-5">
            <Link href="/Cart" className="relative">
              <FiShoppingCart size={30} aria-label="View Cart" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-[1px] w-4 text-center bg-black text-white text-xs rounded-full px-1">
                  {cart.length}
                </span>
              )}
            </Link>
            <Link href="/WishList">
              <FiUser size={30} aria-label="View Wishlist" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile search modal */}
      {isSearchOpen && (
        <div className="flex  justify-center">
          <div className="inline-flex items-center justify-center  rounded-full w-full sm:w-full">
          <Search />
          </div>
          
        </div>
      )}
    </nav>
  );
};

export default Header;
