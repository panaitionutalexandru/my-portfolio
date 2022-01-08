import React from "react";
import { Container } from "./Demo.styled";

export const Demo = ({ children }) => {
  return <Container className="DemoContainer">{children}</Container>;
};
