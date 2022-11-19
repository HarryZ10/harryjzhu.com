import React from "react";
import * as S from "./ProgressBarStyles.js";

const ProgressBar = ({ progress, children }) => {
  return (
    <S.ProgressBarContainer>
      <S.ProgressBar progress={progress} />
      {children}
    </S.ProgressBarContainer>
  );
};

export default ProgressBar;
