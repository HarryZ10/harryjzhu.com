import React from "react";
import {
  DiFirebase,
  DiReact,
  DiResponsive,
  DiStylus,
  DiUikit,
  DiZend,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Hr, Hr2 } from "../Projects/ProjectsStyles";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I've worked with a wide range of technologies for full-stack web and game
      development, including design patterns, frameworks, and libraries.
    </SectionText>

    <List>
      <ListItem>
        <DiFirebase size="3rem" />
        <Hr2 />
        <ListContainer>
          <ListTitle>Web</ListTitle>
          <ListParagraph>
            <strong>Front-end Experience with</strong> <br />
            React, Boostrap, CSS, Node, <br />
            Material UI, Styled Components. <br />
          </ListParagraph>
          <br />
          <ListParagraph>
            <strong>Back-end Experience with</strong> <br />
            Python, Javascript, Node, <br />
            MongoDB, Rest APIs, GraphQL, <br />
            C#, and Express <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <Hr2 />
        <ListContainer>
          <ListTitle>Security</ListTitle>
          <ListParagraph>
            <strong>Familiar with</strong>
            <br />
            Google Cloud Platform, Firebase, <br />
            Docker, Cloud Storage, Shell, <br />
            Identity Management, API, <br />
            Container Security, and vulnerability scanning.
            <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiUikit size="3rem" />
        <Hr2 />
        <ListContainer>
          <ListTitle>Other Skills</ListTitle>
          <ListParagraph>
            <strong>
              Experience with <br />
            </strong>
            C/C++, Scala, Java, <br />
            Splunk, MongoDB, Figma, <br />
            Git, Github, Heroku, and <br />
            Web Deployment, Unity
            <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
