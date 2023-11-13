import Link from 'next/link';
import React from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

const PaginationChapter = ({ currentChapter }) => {
  return (
    <section className='flex justify-center items-center py-8'>
      <div className='join'>
        <Link
          href={`/?page={currenPage - 1}`}
          // disabled={currenPage === 1}
          className='join-item btn'
        >
          <AiFillCaretLeft />
        </Link>
        <button className='join-item btn'>{currentChapter.name}</button>
        <Link
          href={`/?page={currenPage + 1}`}
          // disabled={currenPage === totalPage}
          className='join-item btn'
        >
          <AiFillCaretRight />
        </Link>
      </div>
    </section>
  );
};

export default PaginationChapter;
