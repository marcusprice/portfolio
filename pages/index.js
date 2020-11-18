import ContentSection from '../components/ContentSection';
import SectionHeader from '../components/SectionHeader/';
import NavTiles from '../components/NavTiles';

export default function Home() {
  return (
    <>
      <ContentSection>
        <SectionHeader title="I'm Marcus Price, a software engineer based out of Seattle, WA" cta="Get in touch"/>
      </ContentSection>
      <ContentSection>
        <NavTiles />
      </ContentSection>
    </>
  );
}