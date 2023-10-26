import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const FormSearch = () => {
  return (
    <form className='h-8 w-full relative rounded-lg overflow-hidden'>
      <input
        className='h-full w-full px-2'
        type='search'
        placeholder='Tìm truyện...'
      />
      <AiOutlineSearch
        size={24}
        className='absolute top-1/2 right-1 -translate-y-1/2 cursor-pointer'
      />
    </form>
  );
};

export default FormSearch;
