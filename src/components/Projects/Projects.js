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
      {projects.map(({title, duties, accomplishments, userResearch, img}, index) => (
        <ProjectModal ref={index === 0 ? project1Ref : index === 1 ? project2Ref : index === 2 ? project3Ref : index === 3 ? project4Ref : project5Ref}>

          {duties !== undefined && (
            <>
            <HeaderThreeModal>Responsibilities</HeaderThreeModal>
            <CardInfo modal>
              {duties}
            </CardInfo>  
            </>
          )}

          {accomplishments !== undefined && (
            <>
            <HeaderThreeModal>Accomplishments</HeaderThreeModal>
            <CardInfo modal>
              {accomplishments}
            </CardInfo>
            </>
          )}

          {userResearch && userResearch.map((research, index) => (
            <>
            <HeaderThreeModal>User Research</HeaderThreeModal>
            <CardInfo modal key={index}>
              {research}
            </CardInfo>
            </>
          ))}

          {img && img.map((image, index) => (
            <>
            <HeaderThreeModal>Level Design Drafts</HeaderThreeModal>
            <Img key={index} src={image} />
            </>
          ))}
        </ProjectModal>
      ))}


      <Carousel showArrows={true} className="carousel-projects">
        {/* Mapping through projects array and creating a card for each project */}
        {projects.map(({id , description, image, title, tags, source, visit, summary, duties, accomplishments, userResearch, img }) => (
          <BlogCard key={id}>
            
            {/* if image is not undefined, then display image */}
            {image !== undefined && (
              
              <Img className='project-image' src={image} />
            )}

            <TitleContent>
              <HeaderThree title onClick={() => { turnModalOn(id) }}>
                {/* <AiOutlineArrowRight style={{ paddingTop:'10px' }}/>  */}
                {title} 
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
