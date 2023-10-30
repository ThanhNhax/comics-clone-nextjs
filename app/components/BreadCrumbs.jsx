import Link from 'next/link';
import React from 'react';

const BreadCrumbs = () => {
  return (
    <div className='text-sm breadcrumbs'>
      <ul>
        <li>
          <Link href='/'>Tran chủ</Link>
        </li>
        <li>
          <Link href={'#'}>Documents</Link>
        </li>
        <li>Add Document</li>
      </ul>
    </div>
  );
};

export default BreadCrumbs;
