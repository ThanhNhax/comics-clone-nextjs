import Link from 'next/link';

const Pagination = ({ currenPage, totalPage }) => {
  return (
    <section className='flex justify-center items-center py-8'>
      <div className='join'>
        <Link
          href={`/?page=${currenPage - 1}`}
          disabled={currenPage === 1}
          className='join-item btn'
        >
          «
        </Link>
        <button className='join-item btn'>{currenPage}</button>
        <Link
          href={`/?page=${currenPage + 1}`}
          disabled={currenPage === totalPage}
          className='join-item btn'
        >
          »
        </Link>
      </div>
    </section>
  );
};

export default Pagination;
