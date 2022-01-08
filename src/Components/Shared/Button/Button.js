import React from "react";
import { ButtonElement } from "./Button.style";

export const Button = ({ path, buttonText }) => {
  return <ButtonElement to={path}>{buttonText}</ButtonElement>;
};
