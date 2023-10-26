'use client';
import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';

const CardComicsCarousel = ({ comics }) => {
  const { title, thumbnail, updated_at, last_chapter } = comics;
  return (
    <div className='card w-[220px] h-[275px] bg-base-100 shadow-xl relative'>
      <figure>
        <img src={thumbnail} alt='comics' className='w-full' />
      </figure>
      <div
        className=' px-2 h-14 text-white w-full absolute bottom-0'
        style={{ background: 'rgba(0,0,0,0.63)' }}
      >
        <h2 className='text-center text-base truncate  '>{title}</h2>
        <div className='flex justify-between items-center'>
          <p className='text-[13px]'>{last_chapter.name}</p>
          <p className='text-[11px] text-right flex items-center gap-1'>
            <AiOutlineClockCircle size={11} />
            {updated_at}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardComicsCarousel;
