import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 2rem;
  margin: 2rem;
  background-color: white;
  position: relative;
  bottom: 0;
  border-radius: 0.5rem;
  z-index: 100;
`;

export const Span = styled.span`
  font-size: 3rem;
  font-weight: 200;
  color: #6dd8d0;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-left: 6px;
    font-size: 2rem;
  }
`;

export const Text = styled.div`
  width: 170px;
  margin: 0 auto;
  color: black;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;
