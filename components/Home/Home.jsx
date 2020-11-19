import ContentSection from '../shared/ContentSection';
import SectionHeader from '../shared/SectionHeader';
import NavTiles from './NavTiles';
import RecentPosts from './RecentPosts';

export default function Home() {
  return (
    <>
      <ContentSection>
        <SectionHeader
          title="I'm Marcus Price, a software engineer based out of Seattle, WA"
          cta='Get in touch'
        />
      </ContentSection>

      <ContentSection>
        <NavTiles />
      </ContentSection>

      <ContentSection>
        <RecentPosts />
      </ContentSection>
    </>
  );
}
