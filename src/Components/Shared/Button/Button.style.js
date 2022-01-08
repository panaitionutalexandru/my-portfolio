import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonElement = styled(Link)`
  display: block;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-weight: 700;
  color: #ffffff;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  user-select: none;
`;
