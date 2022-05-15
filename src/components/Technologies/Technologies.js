import React from 'react';
import { DiFirebase, DiReact, DiResponsive, DiStylus, DiUikit, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Hr, Hr2 } from '../Projects/ProjectsStyles';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I've worked with a wide range of technologies for full-stack web and game development, including design patterns, frameworks, and libraries.
    </SectionText>

    <List>
      <ListItem>
        <DiFirebase size="3rem" />
        <Hr2 />
        <ListContainer>
          <ListTitle>Full-Stack Development</ListTitle>
          <ListParagraph>
            <strong>Front-end Experience with</strong> <br />
            React, React-Boostrap, Next, <br />
            Material-UI, Sass, Figma, <br />
            and Styled-Components. <br />
          </ListParagraph>
          <br />
          <ListParagraph>
            <strong>Back-end Experience with</strong> <br />
            Python, Javascript, Node, <br />
            MongoDB, Rest APIs, and Express <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <Hr2 />
        <ListContainer>
          <ListTitle>Game Development</ListTitle>
          <ListParagraph>
            <strong>Experience with</strong ><br />
            C#, Unity, Javascript, <br />
            Game Design, Level Design, <br />
            User Research, Design Thinking, <br />
            and Project Management
            

          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiUikit size="3rem" />
        <Hr2 />
        <ListContainer>
          <ListTitle>Other Skills</ListTitle>
          <ListParagraph>
            Experience with <br />
            C/C++, Scala, Java, <br />
            Splunk, PLSQL, VSCode, <br />
            Git, Github, Heroku, and <br />
            Web Deployment, <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
