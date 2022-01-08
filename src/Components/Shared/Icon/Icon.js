import React from "react";
import {
  IconContainer,
  IconElement,
  GithubIcon,
  FacebookIcon,
  MailIcon,
  LinkedInIcon,
} from "./Icon.style";

export const Icon = () => {
  return (
    <IconContainer className="IconContainer">
      <IconElement to="/" className="IconElement">
        <GithubIcon />
      </IconElement>
      <IconElement to="/" className="IconElement">
        <LinkedInIcon />
      </IconElement>
      <IconElement to="/" className="IconElement">
        <FacebookIcon />
      </IconElement>
      <IconElement to="/" className="IconElement">
        <MailIcon />
      </IconElement>
    </IconContainer>
  );
};
