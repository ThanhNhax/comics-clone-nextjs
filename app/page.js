import NominatedStory from './components/NominatedStory';
import RecentUpdate from './components/RecentUpdate';

export default function Home() {
  return (
    <main className='max-w-xs md:max-w-2xl container  mx-auto  md:px-6 bg-rose-400'>
      <NominatedStory />
      <RecentUpdate />
    </main>
  );
}
