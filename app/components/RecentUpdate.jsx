import Image from 'next/image';
import { BiFilterAlt } from 'react-icons/bi';
import comincsController from '../controller/comincsController';
import CardComicsCarousel from './CardComicsCarousel';
import TopComics from './TopComics';
import Pagination from './Pagination';
import Link from 'next/link';
import SidebarTable from './SidebarTable';

const RecentUpdate = async ({ page }) => {
  const { comics, current_page, ...rest } =
    await comincsController.getRecentUpdate(page);

  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-6 w-full'>
        <div className='col-span-3'>
          <div className='flex justify-between items-center'>
            <h2 className='text-xl text-color-title font-normal my-4'>
              Truyện mới cập nhật&#x3e;
            </h2>
            <div className='w-8 h-8 rounded-full flex justify-center items-center border-[#ff9601] border-[1px] cursor-pointer'>
              <Link href={'/tim-truyen'}>
                <BiFilterAlt size='20' color='#ff9601' />
              </Link>
            </div>
          </div>
          <div className=' w-full grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4'>
            {comics.map((comics) => (
              <div className='h-[200px] md:h-56' key={comics.id}>
                <CardComicsCarousel comics={comics} />
              </div>
            ))}
          </div>
          <div className=''>
            <Pagination
              currenPage={current_page}
              totalPage={rest.total_pages}
            />
          </div>
        </div>
        <div className='col-span-2'>
          <SidebarTable />
        </div>
      </div>
    </section>
  );
};

export default RecentUpdate;
