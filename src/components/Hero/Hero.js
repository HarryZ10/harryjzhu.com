import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, FirstName } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm <FirstName>Harry</FirstName>.
      </SectionTitle>
      <SectionText>
        I'm an aspiring design-focused and data-driven software engineer based in the Bay Area and I'm currently looking for a new challenge.
      </SectionText>
      <Button onClick= {() => location.href = '#about'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;