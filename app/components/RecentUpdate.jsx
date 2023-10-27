import Image from 'next/image';
import { BiFilterAlt } from 'react-icons/bi';
import comincsController from '../controller/comincsController';
import CardComicsCarousel from './CardComicsCarousel';

const RecentUpdate = async () => {
  const arrRecentUpdate = await comincsController.getRecentUpdate(1);
  return (
    <section>
      <div className='flex flex-col gap-6 w-full'>
        <div className='w-full'>
          <div className='flex justify-between items-center'>
            <h2 className='text-xl text-color-title font-normal my-4'>
              Truyện mới cập nhật&#x3e;
            </h2>
            <div className='w-8 h-8 rounded-full flex justify-center items-center border-[#ff9601] border-[1px] cursor-pointer'>
              <BiFilterAlt size='20' color='#ff9601' />
            </div>
          </div>
          <div className=' w-full grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4'>
            {arrRecentUpdate.map((comics) => (
              <div className='h-[200px] md:h-56' key={comics.id}>
                <CardComicsCarousel comics={comics} />
              </div>
            ))}
          </div>
        </div>
        <div className='basis-1/3'>
          <Image
            alt='xem phim online'
            src='/image/blu.webp'
            width={300}
            height={600}
            className='w-full'
          />
        </div>
      </div>
    </section>
  );
};

export default RecentUpdate;
