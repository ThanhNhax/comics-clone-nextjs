'use client';
import React from 'react';

const Pagination = ({ currenPage, totalPage, onChangePage }) => {
  return (
    <section className='flex justify-center items-center py-8'>
      <div className='join'>
        <button
          disabled={currenPage === 1}
          className='join-item btn'
          onClick={() => onChangePage('pre')}
        >
          «
        </button>
        <button className='join-item btn'>{currenPage}</button>
        <button
          disabled={currenPage === totalPage}
          className='join-item btn'
          onClick={() => onChangePage('next')}
        >
          »
        </button>
      </div>
    </section>
  );
};

export default Pagination;
