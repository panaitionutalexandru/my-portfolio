import React from "react";
import { Container } from "./ContactSection.style";
import { Heading, Paragraph, Button } from "../../";

export const ContactSection = () => {
  return (
    <Container className="ContactSection">
      <Heading
        children="Are you interested in collaborating?"
        className="ContactHeading"
      />
      <Paragraph className="ContactParagraph">
        If you feel like your business needs a little boost on the internet or
        that you might need a new digital product, then what are you waiting
        for?
      </Paragraph>
      <Button path="/" buttonText="Connect with me" className="ContactButton" />
    </Container>
  );
};
