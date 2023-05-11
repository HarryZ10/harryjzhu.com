import React from "react";
import dynamic from "next/dynamic";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, FirstName } from "./HeroStyles";
import FadeIn from "../FadeIn/FadeIn";
const SkeletalCircle = dynamic(
  () => import("../P5SkeletalCircle/P5SkeletalCircle"),
  { ssr: false }
)

const Hero = (props) => (
  <Section row nopadding blankSpace>
    <LeftSection>
      <SkeletalCircle />
      <FadeIn>
        <SectionTitle main center>
          Hi, I'm <FirstName>Harry</FirstName>.
        </SectionTitle>
      </FadeIn>
      <FadeIn>
        <SectionText>
          I'm an aspiring security-focused and telemetry-driven software engineer
          based in the Bay Area.
        </SectionText>
      </FadeIn>
      <FadeIn>
        <Button onClick={() => (location.href = "/resume.pdf")}>
          See Resumé
        </Button>
      </FadeIn>
    </LeftSection>
  </Section>
);

export default Hero;
