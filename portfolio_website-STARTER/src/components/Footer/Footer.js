import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:205-585-2836">205-585-2836</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>email</LinkTitle>
          <LinkItem href="mailto:luukenorris@gmail.com">luukenorris@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          Taking one step at a time.
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/Luke-Norris">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://Linkedin.com/in/Luke-Norris">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://github.com/Luke-Norris">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
