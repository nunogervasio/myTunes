import React from "react";
import styled from "styled-components";
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
  padding: 0 0;
`;

const StyledContainer = styled(Container)``;

const FooterColumns = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  padding: 2rem;
  text-align: left;
  font-size: 14px;

  ul {
    list-style: none;
    li:first-child {
      font-size: 1.2rem;
      padding-bottom: 0.5rem;
      border-bottom: #444 solid 1px;
      margin-bottom: 1rem;
    }
  }
  @media screen and (max-width: 780px) {
    display: none;
  }
`;

const FooterBottom = styled.div`
  background: #333;
  padding: 1rem;
  text-align: center;
`;
const FooterSection = () => {
  return (
    <footer>
      <StyledSection>
        <StyledContainer>
          <FooterColumns>
            <ul>
              <li>Shop & Learn</li>
              <li>
                <a href="#">Music</a>
              </li>
              <li>
                <a href="#">Movies</a>
              </li>
              <li>
                <a href="#">Shows</a>
              </li>
              <li>
                <a href="#">Apps</a>
              </li>
              <li>
                <a href="#">Gift Cards</a>
              </li>
            </ul>

            <ul>
              <li>Orange Store</li>
              <li>
                <a href="#">Find a Store</a>
              </li>
              <li>
                <a href="#">Today at Orange</a>
              </li>
              <li>
                <a href="#">Orange Camp</a>
              </li>
              <li>
                <a href="#">Financing</a>
              </li>
              <li>
                <a href="#">Order Status</a>
              </li>
            </ul>

            <ul>
              <li>Education & Business</li>
              <li>
                <a href="#">Orange & Education</a>
              </li>
              <li>
                <a href="#">Shop For College</a>
              </li>
              <li>
                <a href="#">Orange & Business</a>
              </li>
              <li>
                <a href="#">Shop For Business</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
            </ul>

            <ul>
              <li>About Orange</li>
              <li>
                <a href="#">Newsroom</a>
              </li>
              <li>
                <a href="#">Orange Leadership</a>
              </li>
              <li>
                <a href="#">Investors</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Contact Orange</a>
              </li>
            </ul>
          </FooterColumns>
        </StyledContainer>
        <FooterBottom>Copyright &copy; 2019 Orange myTunes</FooterBottom>
      </StyledSection>
    </footer>
  );
};

export default FooterSection;
