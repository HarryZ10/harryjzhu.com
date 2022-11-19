import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 2rem;
  margin-bottom: 2rem;
  background-color: white;
  position: relative;
  bottom: 0;
  z-index: 100;
`;

export const Span = styled.span`
  font-size: 1.5rem;
  color: red;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-left: 6px;
    font-size: 0.9rem;
  }
`;

export const Text = styled.div`
  width: 150px;
  margin: 0 auto;
  color: black;
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 0.9rem;
    // center text
    text-align: center;
  }
`;
