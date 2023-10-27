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
import { usePathname } from 'next/navigation';

const HeaderPage = () => {
  const [isOpenMenuModal, setIsOpenMenuModal] = useState(false);
  const params = usePathname();
  return (
    <header className=' h-14 md:h-[96px] '>
      {/* logo */}
      <div
        className='min-w-full'
        style={{
          backgroundImage: "url('./image/bg_header.jpg')",
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto h-14 flex items-center justify-between'>
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
        <ul className='max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto h-full flex justify-start items-center uppercase text-sm font-medium'>
          {navbar &&
            navbar.map((nav, index) => {
              const isActive = params.includes(nav.href);
              return (
                <li key={index}>
                  <Link
                    href={nav.href}
                    className={clsx(
                      `  flex justify-center items-center hover:text-color-hover hover:bg-white transition px-2 h-[40px]  `,
                      nav?.label?.includes('truyện chữ hay') &&
                        'text-red-500 hidden lg:flex',
                      nav.label?.includes('fanpage') && 'hidden xl:flex',
                      isActive && 'bg-white text-color-hover'
                    )}
                  >
                    {nav.icon ? nav.icon : nav.label}
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
      <MenuModal isOpen={isOpenMenuModal} />
    </header>
  );
};

export default HeaderPage;
