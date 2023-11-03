import BreadCrumbs from '@/app/components/BreadCrumbs';
import comincsController from '@/app/controller/comincsController';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Page = async ({ params }) => {
  const imagesChapter = await comincsController.getComicsChaptersById(
    params.id,
    params.slug
  );
  console.log(imagesChapter);
  return (
    <>
      <BreadCrumbs
        children1={'Thể loại'}
        children2={imagesChapter.comic_name}
        children3={imagesChapter.chapter_name}
      />
      <div className='mt-4 flex gap-2'>
        <h1 className='text-color-title'>
          <Link
            className=' hover:underline hover:decoration-1'
            href={`truyen-tranh/${imagesChapter.comic_name}`}
          >
            {imagesChapter.comic_name}
          </Link>
        </h1>
        <span>-</span>
        <h3>{imagesChapter.chapter_name}</h3>
      </div>
      <div className=' mt-4 text-center'>
        <div className='flex justify-center items-center gap-4'>
          <span class='relative flex h-3 w-3'>
            <span class='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75'></span>
            <span class='relative inline-flex rounded-full h-3 w-3 bg-red-500'></span>
          </span>
          <p>
            Nếu không xem được truyện vui lòng đổi &quot;SERVER ẢNH&quot; bên
            dưới
          </p>
        </div>
        <p className='text-red-500 mt-2'>
          Vui lòng bấm &quot;BÁO LỖI&quot; nếu không xem được truyện
        </p>
        <div className='flex justify-center gap-4 mt-4'>
          <button className='btn-sm rounded-md  btn-primary'>Server 1</button>
          <button className='btn-sm rounded-md btn-secondary'>Server 2</button>
        </div>
        <button className='btn-sm rounded-md btn-warning mt-4'>Báo lỗi</button>
      </div>
      <article className='flex flex-col gap-4'>
        {imagesChapter.images.map((img) => (
          <div key={img.page}>
            <Image
              className='w-full'
              src={`${img.src}`}
              width={500}
              height={500}
              alt={img.page}
            />
          </div>
        ))}
      </article>
    </>
  );
};

export default Page;
