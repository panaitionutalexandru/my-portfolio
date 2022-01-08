import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
  padding: 4rem 0;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

export const WorkSectionSmallContainer = styled.div`
  max-width: 28rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    border-radius: 25px;
  }

  @media (orientation: landscape) {
    max-width: 36rem;
  }
`;

export const DemoName = styled.h2`
  display: block;
  margin-top: 2rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
`;

export const DemoDescription = styled.p`
  display: block;
  margin-top: 1rem;
  font-size: 1.4rem;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
`;

export const ClickButton = styled(Link)`
  display: block;
  margin: 1rem 0 -1rem 0;
  padding: 1rem;
  font-size: 1.4rem;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
`;
