import React, { useRef } from 'react';
import ProjectModal from './ProjectModal';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Carousel } from 'react-responsive-carousel';
import { BlogCard, CardInfo, ExternalLinks, HeaderThree, HeaderThreeModal, Hr,Tag,
         TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects, GCC11YEARS, GDD_2020 } from '../../constants/constants';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Projects() {
  //#region Refs
  const project1Ref = useRef();
  const project2Ref = useRef();
  const project3Ref = useRef();
  const project4Ref = useRef();
  const project5Ref = useRef();
  //#endregion

  return (
    <Section id="projects">

      <SectionDivider />
      <SectionTitle main projectHeading>Projects</SectionTitle>

      {/* 11 Years */}
      {projects[0].title && (
        <ProjectModal ref={project1Ref}>
          <HeaderThreeModal>Responsibilities</HeaderThreeModal>
          <CardInfo modal>
            {projects[0].duties}
          </CardInfo>
          <HeaderThreeModal>Accomplishments</HeaderThreeModal>
          <CardInfo modal>
            {projects[0].accomplishments}
          </CardInfo>
          <HeaderThreeModal>User Research</HeaderThreeModal>
          <CardInfo modal>
            {projects[0].userResearch}
          </CardInfo>
          <HeaderThreeModal>Level Design Drafts</HeaderThreeModal>
          <Img src={projects[0].img} alt={projects[0].title} />
        </ProjectModal>
      )}

      {/* Confined Indorms */}
      {projects[1].title && (
        <ProjectModal ref={project2Ref}>
          <HeaderThreeModal>Responsibilities</HeaderThreeModal>
          <CardInfo modal>
            {projects[1].duties}
          </CardInfo>
          <HeaderThreeModal>Accomplishments</HeaderThreeModal>
          <CardInfo modal>
            {projects[1].accomplishments}
          </CardInfo>
          <HeaderThreeModal>User Research</HeaderThreeModal>
          <CardInfo modal>
            {projects[1].userResearch}
          </CardInfo>
          <HeaderThreeModal>Media</HeaderThreeModal>
          <Img src={projects[1].img} alt={projects[1].title} />
        </ProjectModal>
      )}

      {/* SpectrCare */}
      {projects[2].title && (
        <ProjectModal ref={project3Ref} id="scrollbox">
          <SimpleBar style={{ border: '10px', maxHeight: '500px' }}>
            <HeaderThreeModal>Responsibilities</HeaderThreeModal>
            <CardInfo modal>
              {projects[2].responibilities}
            </CardInfo>
            <HeaderThreeModal>Accomplishments</HeaderThreeModal>
            <CardInfo modal>
              {projects[2].accomplishments}
            </CardInfo>
            <HeaderThreeModal>User Research</HeaderThreeModal>
            <CardInfo modal>
              {projects[2].userResearch}
            </CardInfo>
            <HeaderThreeModal>Media</HeaderThreeModal>
            <Img src={projects[2].img} alt={projects[2].title} />
          </SimpleBar>
        </ProjectModal>
      )}


      {/* Pickabox */}
      {projects[3].summary && (
      <ProjectModal ref={project4Ref} id="scrollbox">
        <SimpleBar style={{ border: '10px', maxHeight: '500px' }}>
          <HeaderThreeModal>Responsibilities</HeaderThreeModal>
          <CardInfo modal>
            {projects[3].responibilities}
          </CardInfo>
          <HeaderThreeModal>Accomplishments</HeaderThreeModal>
          <CardInfo modal>
            {projects[3].accomplishments}
          </CardInfo>
          <HeaderThreeModal>User Research</HeaderThreeModal>
          <CardInfo modal>
            {projects[3].userResearch}
          </CardInfo>
          <HeaderThreeModal>Media</HeaderThreeModal>
          <Img src={projects[3].img} alt={projects[3].title} />
        </SimpleBar>
      </ProjectModal>
      
      )}

      {/* ACM Code Jam v2 */}
      {projects[4].summary && (
        <ProjectModal ref={project5Ref} id="scrollbox">
          <SimpleBar style={{ border: '10px', maxHeight: '500px' }}>
            <HeaderThreeModal>Responsibilities</HeaderThreeModal>
            <CardInfo modal>
              {projects[4].responibilities}
            </CardInfo>
            <HeaderThreeModal>Accomplishments</HeaderThreeModal>
            <CardInfo modal>
              {projects[4].accomplishments}
            </CardInfo>
            <HeaderThreeModal>User Research</HeaderThreeModal>
            <CardInfo modal>
              {projects[4].userResearch}
            </CardInfo>
            <HeaderThreeModal>Media</HeaderThreeModal>
            <Img src={projects[4].img} alt={projects[4].title} />
          </SimpleBar>
        </ProjectModal>

      )}

      <Carousel showArrows={true} className="carousel-projects">
        {/* Mapping through projects array and creating a card for each project */}
        {projects.map(({id , description, image, title, tags, source, visit, summary, duties, accomplishments, userResearch, img }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title onClick={() => { turnModalOn(id) }}>
                <AiOutlineArrowRight style={{ paddingTop:'10px' }}/> {title} 
              </HeaderThree>
              <Hr />
            </TitleContent>

            {/* Description */}
            <CardInfo>{description}</CardInfo>

            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>

            {/* External Links */}
            <UtilityList>
              { source && <ExternalLinks href={source}>Source</ExternalLinks> }
              <ExternalLinks href={visit}>Demo</ExternalLinks>
            </UtilityList>

          </BlogCard>
        ))}

        </Carousel>
    </Section>
  );


  function turnModalOn(id)
  {
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
    }
  }
}


export default Projects;
