import React from 'react';
import TopComics from './TopComics';
import Image from 'next/image';

const SidebarTable = () => {
  return (
    <article className='flex flex-col w-full'>
      <Image
        alt='xem phim online'
        src='/image/blu.webp'
        width={300}
        height={600}
        className='w-full mb-8'
      />
      <TopComics />
    </article>
  );
};

export default SidebarTable;
