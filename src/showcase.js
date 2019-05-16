import React from "react";
import styled from "styled-components";
import img from "./img/showcase.jpg";

import {
  Section,
  Container,
  Title,
  SubTitle,
  Paragraph,
  Header
} from "./styles.js";

const StyledSection = styled(Section)`
  margin: 0;
  padding: 0;
  background: url(${img}) no-repeat center/cover;
  width: 100%;
  height: 100vh;
  /* gets rid of extra space above navbar */
  overflow-y: hidden;
  @media (max-width: 576px) {
    height: 50vh;
  }
`;

const StyledContainer = styled(Container)`
  margin-top: 25vh;
  @media (max-width: 576px) {
    margin-top: 12vh;
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 1.3rem;
  max-width: 1100px;
  @media (max-width: 576px) {
    display: none;
  }
`;

const StyledTitle = styled(Title)`
  font-size: 4rem;
  margin-bottom: 0;
  @media (max-width: 576px) {
    font-size: 3rem;
  }
`;

const StyledSubTitle = styled(SubTitle)`
  font-size: 2rem;
  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

const StyledHeader = styled(Header)``;
const Showcase = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <StyledTitle>myTunes</StyledTitle>
        <StyledSubTitle>
          Your music, movies, and TV shows take center stage.
        </StyledSubTitle>
        <StyledParagraph>
          myTunes is the best way to organize and enjoy the music, movies, and
          TV shows you already have — and shop for the ones you want. Enjoy all
          the entertainment myTunes has to offer on your Mac and PC.
        </StyledParagraph>
      </StyledContainer>
    </StyledSection>
  );
};

export default Showcase;
