'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsLightbulbFill } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { navbar } from './navbar';
import clsx from 'clsx';

const HeaderPage = () => {
  return (
    <header className=' h-14 md:h-[90px] '>
      {/* logo */}
      <div style={{ backgroundImage: "url('./image/bg_header.jpg')" }}>
        <div className='container px-4 md:px-6  mx-auto h-14 flex items-center justify-between'>
          <Image
            alt='logo-nettruyen'
            src='/image/logo-nettruyen.webp'
            width={150}
            height={30}
          />
          <form className='hidden md:block h-8 md:w-80 w-[485px] relative rounded-lg overflow-hidden'>
            <input
              className='h-full w-full px-2'
              type='search'
              placeholder='Tìm truyện...'
            />
            <AiOutlineSearch
              size={24}
              className='absolute top-1/2 right-1 -translate-y-1/2 cursor-pointer'
            />
          </form>
          <BsLightbulbFill size={24} color='#ff9601' />
          <ul className='hidden md:flex gap-1 text-white'>
            <li>
              <Link href={'#'}>Đăng nhập</Link>
            </li>
            <li>
              <Link href={'#'}>/ Đăng ký</Link>
            </li>
          </ul>
          <button className='bg-[#d0b32e] rounded-sm md:hidden'>
            <FiMenu size={28} color='white' />
          </button>
        </div>
      </div>
      <nav className='hidden md:block h-10 bg-bg-grey'>
        <ul className='container md:p-6 mx-auto h-full flex justify-start gap-6 items-center uppercase text-sm font-medium'>
          {navbar &&
            navbar.map((nav, index) => (
              <li key={index}>
                <Link
                  href={nav.href}
                  className={clsx(
                    `hover:text-color-hover transition`,
                    nav?.label?.includes('truyện chữ hay') &&
                      'text-red-500 hidden lg:block',
                    nav.label?.includes('fanpage') && 'hidden xl:block'
                  )}
                >
                  {nav.icon ? nav.icon : nav.label}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderPage;
