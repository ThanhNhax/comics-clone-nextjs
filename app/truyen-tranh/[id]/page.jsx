import BreadCrumbs from '@/app/components/BreadCrumbs';
import SidebarTable from '@/app/components/SidebarTable';
import TableChapters from '@/app/components/TableChapters';
import comincsController from '@/app/controller/comincsController';
import { Span } from 'next/dist/trace';
import Link from 'next/link';
import { AiOutlinePlus, AiOutlineUnorderedList } from 'react-icons/ai';
import { BiRss, BiSolidUser } from 'react-icons/bi';
import { BsFileEarmarkText, BsFillTagsFill } from 'react-icons/bs';
import { FaRegEye } from 'react-icons/fa';

export const generateMetadata = async ({ params, searchParams }, parent) => {
  // read route params
  const id = params.id;

  // fetch data
  const product = await comincsController.getComicsById(params.id);

  // optionally access and extend (rather than replace) parent metadata

  return {
    title: `${product.title}-${product.chapters[0].name}-NetTruyen`,
  };
};

const Page = async ({ params }) => {
  const { chapters, genres, title, other_names, ...rest } =
    await comincsController.getComicsById(params.id);

  return (
    <>
      <section className='grid grid-cols-1 lg:grid-cols-5 gap-6 w-full'>
        <article className='lg:col-span-3'>
          <BreadCrumbs children1={'Thể loại'} children2={title} />

          <h1 className='text-center text-2xl font-bold my-4 uppercase'>
            {title}
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
            <div className='md:col-span-2 w-[190px] mx-auto h-[250px]'>
              <div
                className='bg-cover bg-no-repeat w-full h-full'
                style={{ backgroundImage: `url("${rest.thumbnail}")` }}
              />
            </div>
            <div className='md:col-span-3'>
              <ul className='text-[#767676] flex flex-col gap-4'>
                <li className='flex '>
                  <div className='basis-4/12 flex  items-center'>
                    <AiOutlinePlus size={16} />
                    Tên khác
                  </div>
                  <div className='basis-8/12'>
                    {other_names.map((name, index) =>
                      other_names.length == index + 1 ? (
                        <span key={index}>{name}</span>
                      ) : (
                        <span key={index}>{name}; </span>
                      )
                    )}
                  </div>
                </li>
                <li className='flex gap-2'>
                  <div className='basis-4/12 flex items-center'>
                    <BiSolidUser size={16} />
                    Tác giả
                  </div>
                  <p>{rest.authors}</p>
                </li>
                <li className='flex gap-2'>
                  <div className='basis-4/12 flex items-center'>
                    <BiRss size={16} />
                    Tình trạng
                  </div>
                  <p>{rest.status === 'Ongoing' && 'Đang thức hiện'}</p>
                </li>
                <li className='flex gap-2'>
                  <div className='basis-4/12 flex items-center'>
                    <BsFillTagsFill size={16} />
                    Thể loại
                  </div>
                  <div className=' basis-7/12 text-color-title'>
                    {genres.map((name, index) =>
                      genres.length == index + 1 ? (
                        <span key={index}>{name.name}</span>
                      ) : (
                        <span key={index}>{name.name} - </span>
                      )
                    )}
                  </div>
                </li>
                <li className='flex gap-2'>
                  <div className=' basis-4/12 flex items-center'>
                    <FaRegEye size={16} />
                    <p className='pl-1'> Lượt xem</p>
                  </div>
                  <p>{rest.total_views}</p>
                </li>
              </ul>

              <div className='flex justify-start gap-4 mt-4'>
                <button className='btn btn-warning'>
                  <Link
                    href={`/truyen-tranh/${params.id}/chapter/${
                      chapters[chapters.length - 1].id
                    }`}
                  >
                    Đọc từ đầu
                  </Link>
                </button>
                <button className='btn btn-warning'>
                  <Link
                    href={`/truyen-tranh/${params.id}/chapter/${chapters[0].id}`}
                  >
                    Đọc mới nhất
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className='mb-4'>
            <h4 className='uppercase text-base flex items-center gap-2 text-color-title w-full border-b-[1px] pb-2 border-color-title'>
              <BsFileEarmarkText size={16} />
              nội dụng
            </h4>
            <p className='text-[#333] text-sm mt-2'>{rest.description}</p>
          </div>
          <div className=''>
            <h4 className='uppercase text-base flex items-center gap-2 text-color-title w-full border-b-[1px] pb-2 border-color-title'>
              <AiOutlineUnorderedList size={16} />
              Danh sánh chươg
            </h4>
            <div className='mt-4'>
              <TableChapters id={params.id} chapters={chapters} />
            </div>
          </div>
        </article>
        <div className='lg:col-span-2'>
          <SidebarTable />
        </div>
      </section>
    </>
  );
};

export default Page;
