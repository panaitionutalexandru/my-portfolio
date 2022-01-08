import styled from "styled-components";

export const Section = styled.div`
  max-width: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &:last-of-type {
    margin-top: 4rem;
  }
`;
