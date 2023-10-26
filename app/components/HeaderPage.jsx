'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsLightbulbFill } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { navbar } from './navbar';
import clsx from 'clsx';
import FormSearch from './FormSearch';
import MenuModal from './modal/MenuModal';
import { AiOutlineClose } from 'react-icons/ai';

const HeaderPage = () => {
  const [isOpenMenuModal, setIsOpenMenuModal] = useState(false);
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
          <div className='hidden md:block md:w-80  lg:w-96 w-[485px] '>
            <FormSearch />
          </div>
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
            {isOpenMenuModal ? (
              <AiOutlineClose
                size={28}
                color='white'
                onClick={() => setIsOpenMenuModal(false)}
              />
            ) : (
              <FiMenu
                size={28}
                color='white'
                onClick={() => setIsOpenMenuModal(true)}
              />
            )}
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
      <MenuModal isOpen={isOpenMenuModal} />
    </header>
  );
};

export default HeaderPage;
