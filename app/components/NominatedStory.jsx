import comincsController from '../controller/comincsController';
import CardComicsCarousel from './CardComicsCarousel';

const NominatedStory = async () => {
  const arrRecommendComics = await comincsController.getRecommendComics();
  return (
    <section className='py-4'>
      <h2 className='text-xl text-color-title font-normal my-4'>
        Truyện Đề cử &#x3e;
      </h2>
      <div className='container'>
        <div className='carousel  w-full gap-2'>
          {arrRecommendComics &&
            arrRecommendComics.map((comics, index) => (
              <div
                id={`slide${index + 1}`}
                className='carousel-item relative basis-1/2 md:basis-auto h-[200px]'
                key={index}
              >
                <CardComicsCarousel comics={comics} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default NominatedStory;
