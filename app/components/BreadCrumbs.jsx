import Link from 'next/link';
import React from 'react';

const BreadCrumbs = ({ children1, children2, children3 }) => {
  return (
    <div className='text-sm breadcrumbs text-color-title'>
      <ul>
        <li>
          <Link href='/'>Trang chủ</Link>
        </li>
        <li>
          <Link href={'#'}>{children1}</Link>
        </li>
        <li>
          <Link href={'#'}>{children2}</Link>
        </li>
        {children3 && (
          <li>
            <Link href={'#'}>{children3}</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default BreadCrumbs;
