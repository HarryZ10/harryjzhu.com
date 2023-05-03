import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 2rem;
  margin-bottom: 2rem;
  background-color: rgba(255, 255, 255, 0.14);
  position: relative;
  bottom: 0;
  z-index: 100;
`;

export const Span = styled.span`
  color: white;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-left: 6px;
    font-size: 0.9rem;
  }
`;

export const Text = styled.div`
  margin: 0 auto;
  color: black;
  font-weight: 300;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 2.5rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.9rem;
    // center text
    text-align: center;
  }
`;
