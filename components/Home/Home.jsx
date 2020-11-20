import Head from 'next/head';
import { useWindowSize } from '../shared/hooks';
import ContentSection from '../shared/ContentSection';
import SectionHeader from '../shared/SectionHeader';
import NavTiles from './NavTiles';
import RecentPosts from './RecentPosts';

const handleTiles = () => {
  let out = '';
  if (useWindowSize() > 640) {
    out = (
      <ContentSection>
        <NavTiles />
      </ContentSection>
    );
  }

  return out;
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Marcus Price - Seattle-based software engineer</title>
      </Head>
      <ContentSection>
        <SectionHeader
          title="I'm Marcus Price, a software engineer based out of Seattle, WA"
          cta='Get in touch'
        />
      </ContentSection>

      {handleTiles()}

      <ContentSection>
        <RecentPosts />
      </ContentSection>
    </>
  );
}
