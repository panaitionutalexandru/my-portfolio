import React from "react";
import { Container } from "./InfoWrapper.style";
import { InfoSection, SubHeading, Heading, Paragraph } from "../../";

export const InfoWrapper = () => {
  return (
    <Container className="InfoWrapper">
      <InfoSection className="About">
        <>
          <SubHeading className="AboutSubheading">
            <>Who am I</>
          </SubHeading>
          <Heading className="AboutHeading">
            <>About me</>
          </Heading>
          <Paragraph className="AboutParagraph">
            <>
              I am a Front-End Developer and Designer based in Bucharest,
              Romania and since I learned about the magic of web development I
              really got glued to it. I have worked with freelancers and very
              talented people to create digital products. One thing that I will
              never do is settle for less than I and my customers deserve.
            </>
          </Paragraph>
        </>
      </InfoSection>
      <InfoSection className="Services">
        <SubHeading className="ServicesSubheading">
          <>What can I offer</>
        </SubHeading>
        <Heading className="ServicesHeading">
          <>Services I provide</>
        </Heading>
        <Paragraph className="ServicesParagraph">
          <>
            I will design a custom webpage and show it to you as the process
            advances. We will work together to make sure that every element of
            design is unique and makes the webpage stand the test of time. With
            my web development and SEO skills I will help you build an optimized
            webpage that suits your needs and bring your business on the first
            page of Google using only the latest technologies.
          </>
        </Paragraph>
      </InfoSection>
    </Container>
  );
};
