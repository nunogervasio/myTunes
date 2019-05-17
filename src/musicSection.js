import React from "react";
import styled from "styled-components";
import img from "./img/mockup1.png";
import { FaMusic } from "react-icons/fa";
import {
  Section,
  Container,
  SubTitle,
  Paragraph,
  H3Title,
  Image,
  ButtonA
} from "./styles.js/index.js";

const StyledSection = styled(Section)``;

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

const MusicSection = () => {
  return (
    <StyledSection id="music">
      <StyledContainer>
        <StyledSubTitle>
          <FaMusic /> Music
        </StyledSubTitle>
        <StyledH3Title>45 million songs. Zero ads.</StyledH3Title>
        <StyledParagraph>
          Stream over 45 million songs, ad-free. Or download albums and tracks
          to listen to offline. All the music in your personal myTunes library —
          no matter where it came from — lives right alongside the Orange Music
          catalog. Start your free three-month trial with no commitment, and
          cancel anytime.
        </StyledParagraph>
        <ButtonA>Start Your Trail Now</ButtonA>
        <StyledParagraph>
          Orange Music is available in myTunes, and for iOS and Android devices.
        </StyledParagraph>
        <Image src={img} />
      </StyledContainer>
    </StyledSection>
  );
};

export default MusicSection;
