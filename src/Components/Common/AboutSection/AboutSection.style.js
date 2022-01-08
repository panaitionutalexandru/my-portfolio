import styled from "styled-components";

export const Container = styled.div`
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

export const AboutSmallCtn = styled.div`
  max-width: 28rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Motto = styled.h1`
  font-size: 2.8rem;
  font-weight: 900;
  color: #ffffff;
  text-align: center;
  margin-top: 2rem;
`;
