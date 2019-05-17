import styled from "styled-components";

export const Section = styled.section`
  padding: 2rem 0;
`;

export const Container = styled.div`
  max-width: 1180px;
  text-align: center;
  /* '0' = top and bottom and 'auto' left and right */
  margin: 0 auto;
  /* 1rem = whatever px the core html font size is (default 16px) */
  padding: 0 3rem;
`;

export const Paragraph = styled.p``;

export const Title = styled.h1``;

export const SubTitle = styled.h2``;

export const H3Title = styled.h3``;

export const Header = styled.header``;

export const Image = styled.img``;

export const Button = styled.button`
  border: none;
  padding: 1rem;
  color: #fff;
  display: inline-block;
  background: var(--primary-color);
  :hover {
    background: var(--primary-color-hover);
  }
`;
export const ButtonA = styled.a`
  cursor: pointer;
  border: none;
  padding: 1rem;
  color: #fff;
  display: inline-block;
  background: var(--primary-color);
  :hover {
    background: var(--primary-color-hover);
  }
`;
