import comincsController from '@/app/controller/comincsController';
import Image from 'next/image';
import React from 'react';

const Page = async ({ params }) => {
  const imagesChapter = await comincsController.getComicsChaptersById(
    params.id,
    params.slug
  );
  console.log(imagesChapter);
  return (
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
  );
};

export default Page;
