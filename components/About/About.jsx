import Head from 'next/head';
import ContentSection from '../shared/ContentSection';
import SectionHeader from '../shared/SectionHeader';
import SectionImage from './SectionImage';
import SectionText from './SectionText';
import Technologies from './Technologies';

export default function About() {
  return (
    <>
      <Head>
        <title>Marcus Price - About</title>
      </Head>
      <ContentSection>
        <SectionHeader
          title='I discovered my passion for programming through generative music'
          cta='Check out my projects'
        />
      </ContentSection>
      <SectionImage src={'/images/waveform.jpg'} alt='synthesizer patch' />
      <ContentSection>
        <SectionText>
          Although I officially began studying web development at Seattle
          Central College in 2017, I discovered my passion for programming
          through creating generative music. Delving into my creative intuition
          and inclination toward technology, I discovered the visual audio
          programming language Max/MSP. With Max I learned to synthesize audio
          programmatically as well as develop algorithmic musical compositions.
          Within a few years I had put out a few records and built a following
          that loved my music and methodology. <br /> <br />
          Programming music organically evolved into an exploration on how to
          create tools to help myself and others. From here I taught myself
          HTML, CSS & JavaScript and decided I want to pursue a career in
          software development. Between school and self-learning, I have worked
          on many awesome projects which has expanded my knowledge of
          technology. Because I pour my intersectional skills of creativity and
          technology into what I do, the projects you will see in my portfolio
          mirror my values.
        </SectionText>
      </ContentSection>
      <ContentSection>
        <Technologies />
      </ContentSection>
    </>
  );
}
