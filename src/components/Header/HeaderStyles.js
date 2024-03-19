import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";

export const Dot = styled.span`
  color: #6dd8d0;
  content: ".";
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const Span = styled.span`
  font-size: 3rem;
  font-weight: 500;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-left: 6px;
    font-size: 2rem;
  }
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 1 / 5;
    padding-top: 8px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-area: 1 / 1 / 1 / 5;
  }
`;

export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 1 / 3 / 6;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-area: 2 / 1 / 3 / 6;
  }
`;

export const Div3 = styled.div`
  grid-area: 1 / 5 / 1 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 1 / 1 / 2;
  }
`;

// Social Icons
export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
