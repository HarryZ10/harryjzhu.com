import Link from "next/link";
import React from "react";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInfoCircle,
  // AiFillMediumCircle,
} from "react-icons/ai";

import {
  Span,
  Dot,
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div3>
      <SocialIcons
        href="https://github.com/HarryZ10"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://linkedin.com/in/harryjzhu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      {/* <SocialIcons
        href="https://medium.com/@byharryzhu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillMediumCircle size="3rem" />
      </SocialIcons> */}
      <SocialIcons
        href="https://iam.harryjzhu.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillInfoCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
