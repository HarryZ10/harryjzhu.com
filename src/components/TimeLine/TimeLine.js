import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import FadeIn from "../FadeIn/FadeIn";


const Timeline = () => {
  return (
    <Section id="about">
      <FadeIn>
        <SectionDivider />
        <SectionTitle main>About Me</SectionTitle>
        <FadeIn>
          <SectionText>
            As a lifelong learner in the tech space, these are the key areas that linger: front-end and backend development, cloud computing, and DevOps. I consider myself to be a "generalist" that seeks to incorporate my background in web and games to develop software or infrastructure of software systems that gives back to the community I came from. 
          </SectionText>
        </FadeIn>
        <FadeIn>
          <SectionText>
            As a product of the public education system in California, I have maintained a diverse skill set for agile development, software requirements gathering, risk assessment, gap analyses, road mapping, technical troubleshooting, and automation techniques using Unix/Linux. Lastly, I have an adaptable and nimble mentality to learn and widen my skill set as I continue my path to software engineering to acquire new professional experiences that is advantageous to the community wherever I am at.
          </SectionText>
        </FadeIn>
      </FadeIn>
    </Section>
  );
};

export default Timeline;
