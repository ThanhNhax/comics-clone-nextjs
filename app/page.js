import NominatedStory from './components/NominatedStory';
import RecentUpdate from './components/RecentUpdate';

export default function Home() {
  return (
    <main className='container mx-auto px-6'>
      <NominatedStory />
      <RecentUpdate />
    </main>
  );
}
