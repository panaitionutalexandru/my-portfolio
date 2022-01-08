import React from "react";
import { AboutSmallCtn, Motto, Container } from "./AboutSection.style";
import { Image } from "../..";
import ImgAbout from "../../Assets/ImgAbout.png";

export const AboutSection = () => {
  return (
    <Container className="AboutContainer">
      <AboutSmallCtn className="AboutSectionSmallContainer">
        <Image
          imgSrc={ImgAbout}
          imgAlt="Image of the developer"
          className="AboutImage"
        />
        <Motto className="AboutMotto">
          "Never settle for less than you deserve."
        </Motto>
      </AboutSmallCtn>
    </Container>
  );
};
