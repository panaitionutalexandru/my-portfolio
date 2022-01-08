import React from "react";
import {
  Container,
  WorkSectionSmallContainer,
  DemoName,
  DemoDescription,
  ClickButton,
} from "./WorkSection.style";
import { Demo, Image } from "../../";
import Demo1 from "../../Assets/Demo1.png";
import Demo2 from "../../Assets/Demo2.png";
import Demo3 from "../../Assets/Demo3.png";

export const WorkSection = () => {
  return (
    <Container className="WorkSection">
      <WorkSectionSmallContainer className="WorkSectionSmallContainer">
        <Demo>
          <>
            <Image imgSrc={Demo1} />
            <DemoName className="DemoName">Demo site I</DemoName>
            <DemoDescription className="DemoDescription">
              This is just a demo definition of a demo website made by the
              Front-End Developer Ionut Panait
            </DemoDescription>
            <ClickButton to="/" className="DemoButton">
              Click here
            </ClickButton>
          </>
        </Demo>
        <Demo>
          <>
            <Image imgSrc={Demo2} />

            <DemoName className="DemoName">Demo site II</DemoName>
            <DemoDescription className="DemoDescription">
              This is just a demo definition of a demo website made by the
              Front-End Developer Ionut Panait
            </DemoDescription>
            <ClickButton to="/" className="DemoButton">
              Click here
            </ClickButton>
          </>
        </Demo>
        <Demo>
          <>
            <Image imgSrc={Demo3} />

            <DemoName className="DemoName">Demo site III</DemoName>
            <DemoDescription className="DemoDescription">
              This is just a demo definition of a demo website made by the
              Front-End Developer Ionut Panait
            </DemoDescription>
            <ClickButton to="/" className="DemoButton">
              Click here
            </ClickButton>
          </>
        </Demo>
      </WorkSectionSmallContainer>
    </Container>
  );
};
