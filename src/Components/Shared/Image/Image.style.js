import styled from "styled-components";

export const ImageElement = styled.img`
  max-width: 100%;
  width: 80%;
  user-select: none;

  /* De adaugat la rezolutii de PC */
  /* transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
  } */

  @media (orientation: landscape) {
    width: 100%;
  }
`;
