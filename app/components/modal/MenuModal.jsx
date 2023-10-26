'use client';
import React from 'react';
import FormSearch from '../FormSearch';
import { navbarMenuModal } from '../navbar';
import Link from 'next/link';
import clsx from 'clsx';

const MenuModal = ({ isOpen }) => {
  return isOpen ? (
    <section className=' relative h-screen bg-slate-900 px-4'>
      <div className='pt-2 h-8'>
        <FormSearch />
        <ul className='text-white uppercase mt-4'>
          {navbarMenuModal &&
            navbarMenuModal.map((nav, index) => (
              <li key={index} className='h-9'>
                <Link
                  href={nav.href}
                  className={clsx(
                    `hover:text-color-hover transition`,
                    nav?.label?.includes('truyện chữ hay') && 'text-red-500 '
                  )}
                >
                  {nav.label}
                </Link>
              </li>
            ))}
        </ul>
        <ul className='text-white'>
          <li className='h-9 '>
            <Link href={'#'}>Đăng nhập</Link>
          </li>
          <li className='h-9  border-y-[1px] border-gray-500'>
            <Link href={'#'}>Đăng ký</Link>
          </li>
        </ul>
      </div>
    </section>
  ) : null;
};

export default MenuModal;
