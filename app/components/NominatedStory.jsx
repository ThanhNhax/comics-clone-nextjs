import comincsController from '../controller/comincsController';
import CardComicsCarousel from './CardComicsCarousel';

const NominatedStory = async () => {
  const arrRecommendComics = await comincsController.getRecommendComics();
  return (
    <section className='py-4'>
      <h2 className='text-xl text-color-title font-normal my-4'>
        Truyện đề cử &#x3e;
      </h2>
      <div className='container'>
        <div className='carousel  w-full gap-2'>
          {arrRecommendComics &&
            arrRecommendComics.map((comics, index) => (
              <div
                id={`slide${index + 1}`}
                className='carousel-item relative basis-1/2 md:basis-auto md:w-[190px] h-[200px] md:h-56'
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
