import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, FirstName } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm <FirstName>Harry</FirstName>.
      </SectionTitle>
      <SectionText>
        I'm an aspiring security-focused and telemetry-driven software engineer
        based in the Bay Area.
      </SectionText>
      <Button onClick={() => (location.href = "/resume.pdf")}>
        See Resumé
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
