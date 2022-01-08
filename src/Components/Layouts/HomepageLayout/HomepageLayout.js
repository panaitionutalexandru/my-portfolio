import React from "react";
import { Container } from "./HomepageLayout.style";
import {
  Header,
  Footer,
  Main,
  AboutSection,
  InfoWrapper,
  WorkSection,
  ContactSection,
} from "../../Common";

export const HomepageLayout = () => {
  return (
    <Container className="HomepageLayout">
      <Header />
      <Main />
      <AboutSection />
      <InfoWrapper />
      <WorkSection />
      <ContactSection />
      <Footer />
    </Container>
  );
};
