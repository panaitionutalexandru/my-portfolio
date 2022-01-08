import React from "react";
import { Container } from "./Main.style";
import { Button, Paragraph, Heading } from "../../";

export const Main = () => {
  return (
    <Container className="MainContainer">
      <Heading className="MainHeading">
        <>Let your dream webpage become reality with me</>
      </Heading>
      <Paragraph
        children="The best way to get recognized on the internet and increase your visits for your online business. Stop wasting time and money with low level developers."
        className="MainParagraph"
      />
      <Button path="/" buttonText="Connect with me" className="MainButton" />
    </Container>
  );
};
