'use client';
import React, { useEffect, useState } from 'react';
import { navbarTop } from './navbar';
import comincsController from '../controller/comincsController';
import CellTableTop from './CellTableTop';
import { MONTHLY } from '../utils/constant';
import clsx from 'clsx';
import LoadingComponent from './LoadingComponent';

const TopComics = () => {
  const [isActive, setIsActive] = useState(MONTHLY);
  const [isLoading, setIsLoading] = useState(true);
  const [arrTopComics, setArrTopComics] = useState([]);
  const getData = async (isActive) => {
    try {
      setIsLoading(true);
      const data = await comincsController.getTopComics(isActive, 1, '');
      setArrTopComics(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData(isActive);
  }, [isActive]);
  return (
    <section>
      <div className='border-[1px] w-full'>
        <nav className='w-full'>
          <ul
            className='grid grid-cols-3 bg-bg-grey cursor-pointer text-center'
            id='nav-table'
          >
            {navbarTop.map((nav) => (
              <li
                key={nav.label}
                className={clsx(
                  'py-4  border-t-2',
                  isActive === nav.isActive
                    ? 'bg-white border-t-color-hover'
                    : `hover:border-t-color-hover hover:border-t-2  border-t-bg-grey hover:bg-white   transition`
                )}
                onClick={() => {
                  setIsActive(nav.isActive);
                }}
              >
                {nav.label}
              </li>
            ))}
          </ul>
        </nav>
        <div className='p-3' id='table'>
          {/* <LoadingComponent /> */}
          {isLoading ? (
            <LoadingComponent />
          ) : (
            arrTopComics.map((comics, index) => {
              return (
                index <= 6 && (
                  <CellTableTop comics={comics} index={index} key={index} />
                )
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default TopComics;
