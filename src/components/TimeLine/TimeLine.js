import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Timeline = () => {
  return (
    <Section id="about">
      <SectionDivider />
      <SectionTitle main>About Me</SectionTitle>
      <SectionText>
        As a life-long learner, I dwindle in all things technology: websites, cloud computing, and security. As a product of the OUSD public education system, I hope to propel positive incremental changes through software development to uproot and uplift issues in my community.
      </SectionText>
      <SectionText>
        I am coachable and receptive to feedback. From projects to courses, I've gained tools for maintaining agile development, marketing design, risk assessment, gap analyses, road mapping, troubleshooting, and automation techniques. I have an adaptable and nimble mentality to learn and widen my skill set as I continue my curriculum and experience at George Fox and extracurricular associations to acquire new professional experiences.
      </SectionText>
    </Section>
  );
};

export default Timeline;
