import NominatedStory from './components/NominatedStory';
import RecentUpdate from './components/RecentUpdate';

export default function Home() {
  return (
    <main className='max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto '>
      {/*  Component Truyn De cu */}
      <NominatedStory />
      <RecentUpdate />
    </main>
  );
}
