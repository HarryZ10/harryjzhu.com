import React, { useRef } from 'react';
import ProjectModal from './ProjectModal';
import { AiOutlineArrowRight } from 'react-icons/ai';

import { BlogCard, CardInfo, ExternalLinks,
         GridContainer, HeaderThree, HeaderThreeModal, Hr,Tag,
         TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects, GCC11YEARS, GDD_2020 } from '../../constants/constants';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

function Projects() {
  //#region Refs
  const project1Ref = useRef();
  const project2Ref = useRef();
  const project3Ref = useRef();
  const project4Ref = useRef();
  const project5Ref = useRef();
  const project6Ref = useRef();
  //#endregion

  return (
    <Section id="projects">

      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>

      {projects[0].context || projects[0].pdf && (
        <ProjectModal ref={project1Ref}>
          <HeaderThreeModal>Game Design Document</HeaderThreeModal>
          <GCC11YEARS />
        </ProjectModal>
      )}

      {projects[1].context || projects[1].pdf && (
        <ProjectModal ref={project2Ref}>
          <HeaderThreeModal>Game Design Document</HeaderThreeModal>
          <GDD_2020 />
        </ProjectModal>
      )}

      {projects[2].context && (
        <ProjectModal ref={project3Ref} id="scrollbox">
          <SimpleBar style={{ border: '10px', maxHeight: '500px' }}>
            <div>
              <HeaderThreeModal>Context</HeaderThreeModal>
              <CardInfo modal>
                {projects[2].context}
              </CardInfo>

              <HeaderThreeModal>Summary</HeaderThreeModal>
              <CardInfo modal>
                {projects[2].summary}
              </CardInfo>

              <HeaderThreeModal>Purpose</HeaderThreeModal>
              <CardInfo modal>
                {projects[2].purpose}
              </CardInfo>

              <HeaderThreeModal>User Research</HeaderThreeModal>
              <CardInfo modal>
                {projects[2].userResearch}
              </CardInfo>

              <HeaderThreeModal>Ideation</HeaderThreeModal>
              <CardInfo modal>
                {projects[2].ideation}
              </CardInfo>

              <HeaderThreeModal>Reflection</HeaderThreeModal>
              <CardInfo modal>
                {projects[2].reflection}
              </CardInfo>
            </div>
          </SimpleBar>
        </ProjectModal>
      )}

        {projects[3].context && (
        <ProjectModal ref={project4Ref} id="scrollbox">
          <SimpleBar style={{ border: '10px', maxHeight: '500px' }}>
            <div>
              <HeaderThreeModal>Context</HeaderThreeModal>
              <CardInfo modal>
                {projects[3].context}
              </CardInfo>

              <HeaderThreeModal>Summary</HeaderThreeModal>
              <CardInfo modal>
                {projects[3].summary}
              </CardInfo>

              <HeaderThreeModal>Purpose</HeaderThreeModal>
              <CardInfo modal>
                {projects[3].purpose}
              </CardInfo>

              <HeaderThreeModal>User Research</HeaderThreeModal>
              <CardInfo modal>
                {projects[3].userResearch}
              </CardInfo>

              <HeaderThreeModal>Ideation</HeaderThreeModal>
              <CardInfo modal>
                {projects[3].ideation}
              </CardInfo>

              <HeaderThreeModal>Reflection</HeaderThreeModal>
              <CardInfo modal>
                {projects[3].reflection}
              </CardInfo>
            </div>
          </SimpleBar>
        </ProjectModal>
        
        )}

      {projects[4].context && (
        <ProjectModal ref={project5Ref} id="scrollbox">
          <SimpleBar style={{ border: '10px', maxHeight: '500px' }}>
            <div>
              <HeaderThreeModal>Context</HeaderThreeModal>
              <CardInfo modal>
                {projects[4].context}
              </CardInfo>

              <HeaderThreeModal>Summary</HeaderThreeModal>
              <CardInfo modal>
                {projects[4].summary}
              </CardInfo>

              <HeaderThreeModal>Purpose</HeaderThreeModal>
              <CardInfo modal>
                {projects[4].purpose}
              </CardInfo>

              <HeaderThreeModal>User Research</HeaderThreeModal>
              <CardInfo modal>
                {projects[4].userResearch}
              </CardInfo>

              <HeaderThreeModal>Ideation</HeaderThreeModal>
              <CardInfo modal>
                {projects[4].ideation}
              </CardInfo>

              <HeaderThreeModal>Reflection</HeaderThreeModal>
              <CardInfo modal>
                {projects[4].reflection}
              </CardInfo>
            </div>
          </SimpleBar>
        </ProjectModal>

      )}

      {projects[5].context && (

        <ProjectModal ref={project6Ref} id="scrollbox">
          <SimpleBar style={{ border: '10px', maxHeight: '500px' }}>
            <div>
              <HeaderThreeModal>Context</HeaderThreeModal>
              <CardInfo modal>
                {projects[5].context}
              </CardInfo>

              <HeaderThreeModal>Summary</HeaderThreeModal>
              <CardInfo modal>
                {projects[5].summary}
              </CardInfo>

              <HeaderThreeModal>Purpose</HeaderThreeModal>
              <CardInfo modal>
                {projects[5].purpose}
              </CardInfo>

              <HeaderThreeModal>User Research</HeaderThreeModal>
              <CardInfo modal>
                {projects[5].userResearch}
              </CardInfo>

              <HeaderThreeModal>Ideation</HeaderThreeModal>
              <CardInfo modal>
                {projects[5].ideation}
              </CardInfo>

              <HeaderThreeModal>Reflection</HeaderThreeModal>
              <CardInfo modal>
                {projects[5].reflection}
              </CardInfo>
            </div>
          </SimpleBar>
        </ProjectModal>

      )}

      <GridContainer>
        {/* Mapping through projects array and creating a card for each project */}
        {projects.map(({id , description, image, title, tags, source, visit }) => (

          // Creating a card for each project
          <BlogCard key={id}>

            <Img src={image} style={{ cursor: 'pointer' }} onClick={() => {
                //#region Setting the current project to the one that was clicked
                if (id === 0) {
                  project1Ref.current.open();
                } else if (id === 1) {
                  project2Ref.current.open();
                } else if (id === 2) {
                  project3Ref.current.open();
                } else if (id === 3) {
                  project4Ref.current.open();
                } else if (id === 4) {
                  project5Ref.current.open();
                } else if (id === 5) {
                  project6Ref.current.open();
                }
                //#endregion
              }} />

            <TitleContent>
              <HeaderThree title onClick={() => {
                //#region Setting the current project to the one that was clicked
                if (id === 0) {
                  project1Ref.current.open();
                } else if (id === 1) {
                  project2Ref.current.open();
                } else if (id === 2) {
                  project3Ref.current.open();
                } else if (id === 3) {
                  project4Ref.current.open();
                } else if (id === 4) {
                  project5Ref.current.open();
                } else if (id === 5) {
                  project6Ref.current.open();
                }
                //#endregion
              }}>
                <AiOutlineArrowRight style={{ paddingTop:'10px' }}/> {title} 
              </HeaderThree> {/* Title of the project */}
              <Hr />
            </TitleContent>

            {/* Description */}
            <CardInfo>{description}</CardInfo>

            <div>
              <TitleContent style={{ paddingTop: '20px' }}>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>

            {/* External Links */}
            <UtilityList>
              { source && <ExternalLinks href={source}>Source</ExternalLinks> }
              <ExternalLinks href={visit}>Demo</ExternalLinks>
            </UtilityList>

          </BlogCard>
        ))}

        </GridContainer>
    </Section>
  );

}


export default Projects;