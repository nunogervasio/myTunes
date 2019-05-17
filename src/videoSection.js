import React from "react";
import styled from "styled-components";
import img from "./img/mockup2.png";
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

const VideoSection = () => {
  return (
    <StyledSection id="video" light>
      <StyledContainer>
        <StyledH3Title>
          The movie and TV collection you always wished for. Granted.
        </StyledH3Title>
        <StyledParagraph>
          With over 100,000 movies and TV shows to choose from, there’s always
          something great to watch on myTunes and if you watch on Orange TV 4K,
          you’ll be able to enjoy a tremendous selection of your favorite
          content in 4K HDR. So get ready to enjoy episodes of your favorite TV
          shows or hit movies you’ve been waiting to see — anytime, anywhere.
          Just tap to play, or even download if you’re going somewhere you won’t
          have Wi-Fi.
        </StyledParagraph>
        <ButtonA secondary>Read More</ButtonA>
        <Image src={img} />
      </StyledContainer>
    </StyledSection>
  );
};

export default VideoSection;
