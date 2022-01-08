import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.footer`
  max-width: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 0;
  margin-top: 6rem;
  padding: 4rem 0;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

export const FooterSmallCtn = styled.div`
  max-width: 28rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  p {
    color: #ffffff;
  }

  @media (orientation: landscape) {
    max-width: 36rem;
  }
`;

export const FooterLogo = styled.div`
  text-align: center;
  line-height: 1;
  cursor: pointer;
`;

export const FooterSocial = styled.div`
  max-width: 28rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  p {
    color: #ffffff;
  }
`;

export const FooterCopyrights = styled.div`
  max-width: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.4rem;
    font-weight: 500;
    color: #ffffff;
  }
`;

export const FooterMenuContainer = styled.div`
  max-width: 28rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

  @media (orientation: landscape) {
    max-width: 36rem;
  }
`;

export const FooterList = styled.ul`
  max-width: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const FooterHeading = styled.h1`
  display: block;
  font-size: 2rem;
  color: #ffffff;
`;

export const FooterLink = styled(Link)`
  display: block;
  font-weight: 500;
  color: #ffffff;
`;

export const Dot = styled.span`
  display: block;
  margin: 0 1rem;
  color: #ffffff;
  font-size: 2rem;
  font-weight: 900;
`;
