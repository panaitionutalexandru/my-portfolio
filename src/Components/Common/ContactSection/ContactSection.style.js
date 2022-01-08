import styled from "styled-components";

export const Container = styled.div`
  max-width: 28rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 6rem;

  @media (orientation: landscape) {
    max-width: 36rem;
  }
`;
