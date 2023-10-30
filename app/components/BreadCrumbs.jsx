import Link from 'next/link';
import React from 'react';

const BreadCrumbs = ({ children1, children2 }) => {
  return (
    <div className='text-sm breadcrumbs'>
      <ul>
        <li>
          <Link href='/'>Tran chủ</Link>
        </li>
        <li>
          <Link href={'#'}>{children1}</Link>
        </li>
        <li>{children2}</li>
      </ul>
    </div>
  );
};

export default BreadCrumbs;
