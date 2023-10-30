import NominatedStory from './components/NominatedStory';
import RecentUpdate from './components/RecentUpdate';

export default function Home({ searchParams }) {
  return (
    <>
      {/*  Component Truyn De cu */}
      <NominatedStory />
      <RecentUpdate page={searchParams.page ?? 1} />
    </>
  );
}
