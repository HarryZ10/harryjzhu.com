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
            <LinkTitle>Work Email</LinkTitle>
          </FadeIn>
          <FadeIn>
            <LinkItem
              href="mailto:hzhu20@georgefox.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              harryzhu45@gmail.com
            </LinkItem>
          </FadeIn>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <FadeIn>
          <CompanyContainer>
            <Slogan>
              Designed and built by Harry Zhu.
              <br />
              All Rights Reserved &copy; {new Date().getFullYear()}
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
            href="https://iam.harryjzhu.com"
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
