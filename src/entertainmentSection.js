import React from "react";
import styled from "styled-components";
import img from "./img/section-bg.jpg";
import { Section, Container, Paragraph, H3Title } from "./styles.js/index.js";

const StyledSection = styled(Section)`
  background: url(${img}) no-repeat bottom/cover;
  padding: 10rem 0;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 1.3rem;
`;

const StyledH3Title = styled(H3Title)`
  font-size: 2rem;
`;

const EntertainmentSection = () => {
  return (
    <StyledSection id="entertainment">
      <Container>
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
      </Container>
    </StyledSection>
  );
};

export default EntertainmentSection;
