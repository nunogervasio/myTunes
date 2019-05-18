import React from "react";
import styled from "styled-components";
import img from "./img/cards.png";
import { FaChevronRight } from "react-icons/fa";
import {
  Section,
  Container,
  SubTitle,
  Paragraph,
  Image
} from "./styles.js/index.js";

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  text-align: left;
  @media screen and (max-width: 780px) {
    flex-direction: column;
  }
`;

const Link = styled.a`
  color: var(--secondary-color);
`;

const RightSide = styled.div`
  margin-left: 10px;
`;
const LeftSide = styled.div`
  margin-right: 10px;
`;
const GiftCardsSection = () => {
  return (
    <Section id="gift-cards" light>
      <StyledContainer>
        <LeftSide>
          <Image src={img} />
        </LeftSide>
        <RightSide>
          <SubTitle>Gift Cards</SubTitle>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
            expedita tempore quasi omnis a aut et totam illo fuga accusamus
            dolorum vero, ut harum consectetur. Minima molestias officiis culpa
            non sed dicta itaque. Et aliquam illo obcaecati molestias veritatis
            porro.
          </Paragraph>
          <Paragraph>Already have an Orange MyTunes Music Gift Card?</Paragraph>
          <hr />
          <Link href="#">
            <FaChevronRight /> Redeem
          </Link>
        </RightSide>
      </StyledContainer>
    </Section>
  );
};

export default GiftCardsSection;
