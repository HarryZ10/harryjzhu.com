import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Timeline = () => {
  return (
    <Section id="about">
      <SectionDivider />
      <SectionTitle main>About Me</SectionTitle>
      <SectionText>
        Currently pursuing a Bachelor's degree in Computer Science and Cyber Security. I am passionate about all things technology: cybersecurity, web & game development, and data analysis.
      </SectionText>
      <SectionText>
        I offer a diverse skill set and range of knowledge such as agile development, marketing, risk assessment, road mapping, troubleshooting, and data analysis. I have an adaptable and nimble mentality to learn and widen my toolbelt as I continue my curriculum and experience at George Fox and extracurricular associations in hopes of acquiring new professional experiences.
      </SectionText>
    </Section>
  );
};

export default Timeline;