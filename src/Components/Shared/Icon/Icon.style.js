import styled from "styled-components";
import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaFacebookF,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const IconContainer = styled.div`
  max-width: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const IconElement = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  color: #667eeacd;
  padding: 0 2rem;
  cursor: pointer;

  &:not(:last-child) {
    border-right: solid 1px #667eeacd;
  }
`;

export const GithubIcon = styled(FaGithub)`
  width: 2.5rem;
  height: 2.5rem;
  display: block;
`;

export const LinkedInIcon = styled(FaLinkedinIn)`
  width: 2.5rem;
  height: 2.5rem;
  display: block;
`;
export const MailIcon = styled(FaEnvelope)`
  width: 2.5rem;
  height: 2.5rem;
  display: block;
`;

export const FacebookIcon = styled(FaFacebookF)`
  width: 2.5rem;
  height: 2.5rem;
  display: block;
`;
