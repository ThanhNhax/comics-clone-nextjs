'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsLightbulbFill } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';

const HeaderPage = () => {
  const navbar = [
    { href: '#', icon: <FaHome size={20} /> },
    { href: '#', label: 'hot' },
    { href: '#', label: 'lịch sử' },
    { href: '#', label: 'thể loại' },
    { href: '#', label: 'xếp hạng' },
    { href: '#', label: 'tìm truyện' },
    { href: '#', label: 'con gái' },
    { href: '#', label: 'con trai' },
    { href: '#', label: 'truyện chữ hay' },
    { href: '#', label: 'fanpage' },
  ];
  return (
    <header
      style={{ backgroundImage: "url('./image/bg_header.jpg')" }}
      className='h-[90px]'
    >
      <div className='container md:px-6  mx-auto h-14 flex items-center justify-between'>
        <Image
          alt='logo-nettruyen'
          src='/image/logo-nettruyen.webp'
          width={150}
          height={30}
        />
        <form className='h-8 md:w-80 w-[485px] relative rounded-lg overflow-hidden'>
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
        <ul className='flex gap-1 text-white'>
          <li>
            <Link href={'#'}>Đăng nhập</Link>
          </li>
          <li>
            <Link href={'#'}>/ Đăng ký</Link>
          </li>
        </ul>
      </div>
      <nav className='h-10 bg-bg-grey'>
        <ul className='container md:p-6 mx-auto h-full flex justify-start gap-6 items-center uppercase text-sm font-medium'>
          {navbar &&
            navbar.map((nav, index) => (
              <li key={index}>
                <Link
                  href={nav.href}
                  className={
                    nav?.label?.includes('truyện chữ hay')
                      ? 'text-red-500'
                      : 'hover:text-color-hover transition'
                  }
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
