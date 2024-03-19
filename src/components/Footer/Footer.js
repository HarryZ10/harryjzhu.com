import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInfoCircle,
  // AiFillMediumCircle,
} from "react-icons/ai"; //icon
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";
import { Hr } from "../Projects/ProjectsStyles";
import FadeIn from "../FadeIn/FadeIn";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <FadeIn>
            <LinkTitle>How to Contact Me</LinkTitle>
          </FadeIn>
          <FadeIn>
            <LinkItem
              href="mailto:hello@harryzhu.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              hello@harryzhu.com
            </LinkItem>
          </FadeIn>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <FadeIn>
          <CompanyContainer>
            <Slogan>
              Have a challenge for me?
            </Slogan>
          </CompanyContainer>
        </FadeIn>
        <SocialContainer>
          <SocialIcons
            href="https://github.com/HarryZ10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://linkedin.com/in/harryjzhu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://iam.harryzhu.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInfoCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
