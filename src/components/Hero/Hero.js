import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, FirstName } from './HeroStyles';
import FadeIn from '../FadeIn/FadeIn';
// import dynamic from 'next/dynamic';
// const SkeletalCircle = dynamic(() => import('../P5SkeletalCircle/P5SkeletalCircle'), { ssr: false });

const Hero = (props) => (
    <Section row nopadding blankSpace>
        <LeftSection>
            <SectionTitle main center heroTitle>
                Hi, I'm <FirstName>Harry</FirstName>.
            </SectionTitle>
            <FadeIn>
                <SectionText>
                    I'm a <strong style={{ color: 'gold' }}>human-centered</strong>,{' '}
                    <strong style={{ color: 'lightblue' }}>data-driven</strong>,{" "} and{" "}
                    <strong style={{ color: 'pink' }}>security-minded </strong> software developer from Oakland, CA.
                </SectionText>
            </FadeIn>
            <FadeIn>
                <Button onClick={() => (location.href = '/resume.pdf')}>See Resumé</Button>
            </FadeIn>
        </LeftSection>
    </Section>
);

export default Hero;
