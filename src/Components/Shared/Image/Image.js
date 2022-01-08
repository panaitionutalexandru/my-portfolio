import React from "react";
import { ImageElement } from "./Image.style";

export const Image = ({ imgSrc, imgAlt }) => {
  return <ImageElement src={imgSrc} alt={imgAlt}></ImageElement>;
};
