import React from 'react';

import Image from 'next/image';
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className="relative bg-gray-300 mt-36 pt-16">
      {/* Subscription Section */}
      <div className="w-[90%] xl:w-[80%] mx-auto py-6 bg-black flex flex-col lg:flex-row lg:justify-around lg:items-center rounded-[40px] absolute left-[5%] xl:left-[10%] top-[-10%]">
        <div className="mb-4 lg:mb-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white text-center lg:text-left">
            STAY UP TO DATE ABOUT <br />
            OUR LATEST OFFERS
          </h1>
        </div>
        <div className="flex flex-col gap-4 items-center lg:items-start">
          <input
            type="email"
            placeholder="Enter your email address"
            className="rounded-[40px] px-6 sm:px-10 md:px-14 py-2 bg-white border-2 border-white w-[80%] lg:w-auto"
            aria-label="Enter your email address"
          />
          <button className="rounded-[40px] px-6 sm:px-10 md:px-14 py-2 bg-white border-2 border-white hover:bg-gray-200">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="flex flex-col justify-between bg-gray-300 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mx-[5%] py-12">
          {/* Brand and Social Links */}
          <div className="flex flex-col gap-4">
            <h1 className="font-extrabold text-3xl">Shop.Co</h1>
            <p className="text-sm">
              We have clothes that suit your style and <br />
              which you’re proud to wear. From <br />
              women to men.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook">
                <FiFacebook
                  size={40}
                  color="black"
                  className="bg-white border-2 rounded-full p-1 border-black"
                />
              </a>
              <a href="#" aria-label="Twitter">
                <FiTwitter
                  size={40}
                  color="black"
                  className="bg-white border-2 rounded-full p-1 border-black"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <FiInstagram
                  size={40}
                  color="black"
                  className="bg-white border-2 rounded-full p-1 border-black"
                />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FiLinkedin
                  size={40}
                  color="black"
                  className="bg-white border-2 rounded-full p-1 border-black"
                />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {[
            { title: 'Company', links: ['About', 'Features', 'Works', 'Career'] },
            {
              title: 'Help',
              links: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'],
            },
            { title: 'FAQ', links: ['Account', 'Manage Delivery', 'Orders', 'Payments'] },
            {
              title: 'Resources',
              links: ['Free eBooks', 'Development Tutorial', 'How to - Blog', 'YouTube Playlist'],
            },
          ].map((section, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h2 className="font-bold text-xl">{section.title}</h2>
              <ul className="flex flex-col gap-2">
                {section.links.map((link, idx) => (
                  <li key={idx} className="hover:text-gray-600 cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-4 pb-6 border-t-2 border-gray-400 w-[90%] xl:w-[80%] mx-auto">
          <p className="text-sm">Copyright Rimel 2022. All rights reserved.</p>
          <div className="flex gap-3 mt-4 sm:mt-0">
            {['Badge 0.png', 'Badge.png', 'Badge (1).png', 'Badge (2).png'].map((badge, idx) => (
              <Image
                key={idx}
                src={`/images/${badge}`}
                alt={`Payment Badge ${idx + 1}`}
                width={46}
                height={30}
                className="object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
