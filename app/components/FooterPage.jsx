import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { navbarTuKhoa } from './navbar';

const FooterPage = () => {
  return (
    <section className=' bg-[#222] py-8'>
      <div className='max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-4'>
        <div className='text-[#ddd] text-[13px] flex flex-col gap-2 md:col-span-1'>
          <Image
            src={'/image/logo-nettruyen.webp'}
            width={150}
            height={30}
            alt='logo'
          />
          <Link href={'#'}>Điều Khoản</Link>
          <Link href={'#'}>Chính Sách Bảo Mật</Link>
          <Image
            src={'/image/quang-cao.webp'}
            alt='quang-cao'
            width={250}
            height={110}
          />
          <p> Copyright © 2023 NetTruyen </p>
        </div>
        <hr className='mt-4 md:hidden' />
        <div className='text-white mt-4 md:col-span-2 w-full  '>
          <h5 className='text-lg'>Từ khóa</h5>
          <ul className=' flex flex-wrap gap-2 mt-4'>
            {navbarTuKhoa.map((nav, index) => (
              <li key={index} className='border-[1px] px-2 py-1'>
                <Link href={'/#'}>{nav.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FooterPage;
