import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Luke Norris.
      </SectionTitle>
      <SectionText>
        I am a software engineer from Birmingham, AL. <br />
        
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button >
    </LeftSection>
  </Section>
);

export default Hero;