import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'; //icon
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Work Email</LinkTitle>
          <LinkItem href='mailto:harry@foxacmw.com' target='_blank' rel='noopener noreferrer'>harry@foxacmw.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Creating software that builds communities and cultivates leaders.
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/HarryZ10" target='_blank' rel='noopener noreferrer'>
          <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com/in/harryjzhu" target='_blank' rel='noopener noreferrer'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/harryjzhu" target='_blank' rel='noopener noreferrer'>
            <AiFillTwitterCircle size='3rem' />
          </SocialIcons>
          <SocialIcons href="https://instagram.com/harryjzhu" target='_blank' rel='noopener noreferrer'>
            <AiFillInstagram size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
