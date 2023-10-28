import clsx from 'clsx';
import React from 'react';
import { AiFillEye } from 'react-icons/ai';

const CellTableTop = ({ comics, index }) => {
  const { title, thumbnail, total_views, last_chapter } = comics;
  return (
    <div className='flex flex-col border-b-[1px] '>
      <div className='flex h-[72px] justify-between items-center py-3 gap-2'>
        <p
          className={clsx(
            index === 0 && 'text-color-title',
            index === 1 && 'text-[#27ae60]',
            index === 2 && 'text-[#d35400]'
          )}
        >
          0{index + 1}
        </p>
        <div
          className='bg-no-repeat bg-cover w-[55px] h-full'
          style={{ backgroundImage: `url("${thumbnail}")` }}
        />
        <div className='w-[196px] md:basis-2/3 flex flex-col'>
          <h3 className='text-sm truncate'>{title}</h3>
          <div className='flex justify-between items-center'>
            <p className='text-[13px]'>{last_chapter.name}</p>
            <div className='flex items-center gap-1 text-[11px] text-[#666]'>
              <AiFillEye />
              <p>{(total_views / 1000 / 1000).toFixed(3)}K</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CellTableTop;
