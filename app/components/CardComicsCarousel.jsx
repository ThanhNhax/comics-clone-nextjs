'use client';
import Link from 'next/link';
import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';

const CardComicsCarousel = ({ comics }) => {
  const { id, title, thumbnail, updated_at, last_chapter } = comics;
  return (
    <Link
      href={`/truyen-tranh/${id}`}
      className='card rounded-lg w-full h-full bg-base-100 shadow-xl relative overflow-hidden'
    >
      <div
        className='bg-no-repeat w-full h-full bg-cover'
        style={{ backgroundImage: `url('${thumbnail}')` }}
      ></div>

      <div
        className='px-1 md:px-2 h-14 text-white w-full absolute bottom-0'
        style={{ background: 'rgba(0,0,0,0.63)' }}
      >
        <h2 className='text-center text-base truncate pt-2 '>{title}</h2>
        <div className='flex justify-between items-center'>
          <p className=' text-[12px] md:text-[13px] truncate'>
            {last_chapter.name}
          </p>
          <p className='text-[10px] md:text-[11px] text-right flex items-center gap-0'>
            <AiOutlineClockCircle size={11} />
            {updated_at}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardComicsCarousel;
