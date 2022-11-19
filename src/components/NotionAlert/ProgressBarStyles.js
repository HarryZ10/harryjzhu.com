import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  width: 80%;
  height: 10px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.25);
`;

export const ProgressBar = styled.div`
  margin-top: 30px;
  width: ${({ progress }) => `${progress}%`};
  height: 10px;
  background: linear-gradient(270deg, #9fadc7 0%, #945dd6 100%);
`;
