'use client';
import React, { useState } from 'react';

const TableChapters = ({ chapters }) => {
  console.log(chapters.length);
  const [render, setRender] = useState(20);
  return (
    <>
      <ul id='table-chapter' className='w-full border-2 p-2 rounded-md'>
        {chapters.map((chapter, index) => {
          if (index >= render) return;
          return (
            <li className='py-2 border-b-[1px] border-dashed' key={index}>
              {chapter.name}
            </li>
          );
        })}
        <li
          className='w-full text-center py-2 bg-color-title text-white cursor-pointer '
          onClick={() => setRender(chapters.length)}
        >
          Xem thêm
        </li>
      </ul>
    </>
  );
};

export default TableChapters;
