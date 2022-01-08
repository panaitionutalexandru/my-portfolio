import React from "react";
import {
  Container,
  FooterSmallCtn,
  FooterLogo,
  FooterSocial,
  FooterCopyrights,
  FooterList,
  FooterLink,
  FooterMenuContainer,
  FooterHeading,
  Dot,
} from "./Footer.style";
import { Logo, LogoSpan } from "../Header/Header.style";
import { Paragraph, Icon } from "../../";

export const Footer = () => {
  return (
    <Container className="Footer">
      <FooterSmallCtn className="FooterSmallContainer">
        <FooterLogo className="FooterLogoCtn">
          <Logo to="/" className="FooterLogo">
            Ionut Panait
            <br />
            <LogoSpan className="FooterLogoSpan">Front-End Developer</LogoSpan>
          </Logo>
        </FooterLogo>
        <Paragraph className="FooterParagraph">
          Ionut Panait is a creative web developer based in Bucharest, Romania.
          He offers services from web design to web development and even SEO
          optimization.
        </Paragraph>
      </FooterSmallCtn>
      <FooterSocial className="FooterSocialContainer">
        <Icon />
      </FooterSocial>
      <FooterMenuContainer className="FooterMenuContainer">
        <FooterHeading className="FooterHeading">About</FooterHeading>
        <FooterList className="FooterMenu">
          <FooterLink to="/about">About me</FooterLink>
          <Dot>•</Dot>
          <FooterLink to="/services">Services</FooterLink>
          <Dot>•</Dot>
          <FooterLink to="/work">Work</FooterLink>
          <Dot>•</Dot>
          <FooterLink to="/">Prices</FooterLink>
          <Dot>•</Dot>
          <FooterLink to="/">Testimonials</FooterLink>
        </FooterList>
      </FooterMenuContainer>
      <FooterMenuContainer className="FooterMenuContainer">
        <FooterHeading className="FooterHeading">Contact</FooterHeading>
        <FooterList className="FooterMenu">
          <FooterLink to="/contact">Contact</FooterLink>
          <Dot>•</Dot>
          <FooterLink to="/">FAQ</FooterLink>
          <Dot>•</Dot>
          <FooterLink to="/">Social</FooterLink>
        </FooterList>
      </FooterMenuContainer>
      <FooterCopyrights className="FooterCopyrightsContainer">
        <FooterSmallCtn>
          <Paragraph className="FooterParagraphCopyrights">
            © 2021 Ionut Panait
          </Paragraph>
        </FooterSmallCtn>
      </FooterCopyrights>
    </Container>
  );
};
