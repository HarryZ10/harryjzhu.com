import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
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

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Work Email</LinkTitle>
          <LinkItem
            href="mailto:hzhu20@georgefox.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            hzhu20 at georgefox dot edu
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Made with Javascript libraries, Next and React</Slogan>
        </CompanyContainer>
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
          {/* <SocialIcons
            href="https://medium.com/@byharryzhu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillMediumCircle size="3rem" />
          </SocialIcons> */}
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
