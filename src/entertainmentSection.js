import React from "react";
import styled from "styled-components";
import img from "./img/section-bg.jpg";
import {
  Section,
  Container,
  SubTitle,
  Paragraph,
  H3Title,
  Image,
  ButtonA
} from "./styles.js/index.js";

const StyledSection = styled(Section)`
  background: url(${img}) no-repeat bottom/cover;
  padding: 10rem 0;
`;

const StyledContainer = styled(Container)``;

const StyledParagraph = styled(Paragraph)`
  font-size: 1.3rem;
`;

const StyledSubTitle = styled(SubTitle)`
  font-size: 2.5rem;
  margin: 0;
`;

const StyledH3Title = styled(H3Title)`
  font-size: 2rem;
`;

const EntertainmentSection = () => {
  return (
    <StyledSection id="entertainment">
      <StyledContainer>
        <StyledH3Title>
          A world of entertainment. Available wherever you are.
        </StyledH3Title>
        <StyledParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          veniam nobis, nisi ut expedita, doloribus reprehenderit explicabo non
          velit repellat alias saepe inventore repellendus? Molestias suscipit
          eos tempora? Quae quaerat cumque in veritatis impedit dolorum sapiente
          recusandae minima quo aperiam quam, excepturi quasi totam ad quas?
          Ipsam laudantium soluta delectus!
        </StyledParagraph>
      </StyledContainer>
    </StyledSection>
  );
};

export default EntertainmentSection;
