'use client';
import React, { useEffect, useState } from 'react';
import comincsController from '../controller/comincsController';
import CardComicsCarousel from './CardComicsCarousel';

const NominatedStory = (props) => {
  const { arrComics } = props;
  console.log('log o NominatedStory: ', arrComics);
  const getData = async () => {
    const data = await comincsController.getTrendingComincs();
    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);
  const renderTrendingComics = () => {
    console.log('renderTrendingComics called');
    return (
      arrComics &&
      arrComics?.map((comics) => (
        <div className='w-56 h-72' key={comics.id}>
          <CardComicsCarousel comics={comics} />
        </div>
      ))
    );
  };
  return (
    <section className='container px-6 py-4 mx-auto'>
      <h2 className='text-sm text-color-title font-normal'>
        Truyện Đề cử &#x3e;
      </h2>
      <div className=''>
        <div className='carousel carousel-end rounded-box'>
          <div className='carousel-item'>
            <img
              src='/image/one-piece.jpg'
              alt='Drink'
              className='rounded-box'
            />
          </div>
          <div className='carousel-item'>
            <img
              src='/image/one-piece.jpg'
              alt='Drink'
              className='rounded-box'
            />
          </div>
          <div className='carousel-item'>
            <img
              src='/image/one-piece.jpg'
              alt='Drink'
              className='rounded-box'
            />
          </div>
          <div className='carousel-item'>
            <img
              src='/image/one-piece.jpg'
              alt='Drink'
              className='rounded-box'
            />
          </div>
          <div className='carousel-item'>
            <img
              src='/image/one-piece.jpg'
              alt='Drink'
              className='rounded-box'
            />
          </div>
          <div className='carousel-item'>
            <img
              src='/image/one-piece.jpg'
              alt='Drink'
              className='rounded-box'
            />
          </div>
          <div className='carousel-item'>
            <img
              src='/image/one-piece.jpg'
              alt='Drink'
              className='rounded-box'
            />
          </div>
        </div>
      </div>

      <div className='flex flex-wrap'>{renderTrendingComics()}</div>
    </section>
  );
};

export default NominatedStory;

export const getServerSideProps = async () => {
  const arrComics = await comincsController.getTrendingComincs();
  console.log('call api o server', arrComics);
  return { props: arrComics };
};
