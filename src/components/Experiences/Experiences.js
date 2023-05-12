import React, { useState, useEffect } from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import FadeIn from "../FadeIn/FadeIn";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Experiences() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const experienceItems = {
    "George Fox": {
      jobTitle: "Full-Stack Web Developer Intern @",
      duration: "AUG 2021 - PRESENT",
      desc: [
        "Developed 10+ Node scripts to automate routine and internal tasks, boosting efficiency and reliability",
        "Created large-scale content using CSS, HTML, and Apache Velocity (Java) for the University website",
        "Updated 95+ webpages in response to more than 106 stakeholders' requests to implement new content and styling in accordance with their acceptance criteria",
        "Demonstrated collaboration and communication skills that influenced the reduction of the product backlog by 75%"
      ]
    },
    "CS Dept - GFU": {
      "jobTitle": "Computer Science Teaching Assistant @",
      "duration": "AUG 2022 - PRESENT",
      "desc": [
        "Tutored and monitored performance of students about introductory computer science concepts such as Data Structures, Relational Databases, Object-Oriented Design, and Analysis of Algorithms. Languages composed of Python, Java, Scala, and C/C++."
      ]
    },
    Recidiviz: {
      jobTitle: "Software Engineering Intern @",
      duration: "JUNE 2022 - AUG 2022",
      desc: [
        "Developed and deployed Python cloud scripts to audit for user admin privileges for 16+ vendors",
        "Implemented JSX/Javascript solutions to resolve 26 vulnerabilities in the primary data platform and dismiss 192 irrelevant security alerts found using continuous integration workflows with open-source code scanning tools (Dockle, Trivy, and CodeQL)",
        "Led the 90% increase of (12+) new security controls with cloud log-based metrics to alert the security team of all cloud events during staging deployment to production"
      ]
    },
    'NW Natural': {
      jobTitle: "Security Analyst Intern @",
      duration: "MAY 2021 - AUG 2021",
      desc: [
        "Assessed and built efficient Splunk queries, reports, dashboards, and alerts to maximize cybersecurity readiness & productivity by 30%",
        "Reviewed and analyzed millions of internal system events, 2,300+ security alerts, and network activity for potential threats and risks, boosting cyber security readiness of the organization by 30%",
        "Developed and deployed various cybersecurity/IT policies and procedures in the organization",
        "Documented current security features on 20+ hardware/network servers that maintain the necessary infrastructure to sustain an efficient security posture"
      ]
    },
    'Gameheads \'20': {
      jobTitle: "Project Manager & Gameplay Engineer @",
      duration: "MAY 2020 - DEC 2020",
      desc: [
        "Enforced Scrum, industry project management frameworks, and 120+ deliverables, issues, and feedback for a cross-functional team of seven",
        "Implemented and deployed C# scripts for UI elements, animations, dialogue, music, visual add-ons, and event systems",
        "Corresponded with 11 stakeholders and 9 experts for A/B testing for the minimum viable prototype stages in development"
      ]
    },
    'Gameheads \'19': {
      jobTitle: "Lead Game Designer @",
      duration: "MAY 2019 - DEC 2019",
      desc: [
        "Established static and dynamic metrics such as movement speed, object animation speed, object spawn rate, and metric properties of player and enemy objects",
        "Designed and prototyped 10+ versions of the level layout upon iterations of drafting player progression in a confined 3D marine world",
        "Implemented and deployed the feature for the Players’s ability to eat and complete objectives"
      ]
    },
    "UC Berkeley": {
      jobTitle: "Information Technology Intern @",
      duration: "FEB 2019 - MAY 2019",
      desc: [
        "Upgraded and reimaged 10+ workstations in academic centers that affected 7000+ on-campus residents",
        "Collaboratively helped set up and monitored 10+ network switches in 5+ academic lecture halls and 3 campus retail stores",
        "Received coaching and major networking support from technicians and engineers"
      ]
    },
    "EBMUD Water": {
      jobTitle: "Data Analyst Intern @",
      duration: "JUNE 2018 - JULY 2018",
      desc: [
        "Queried and extracted 10,000+ PPI, water consumption per day, wastewater usage, and finance charges from the organizational customer database using SQL and PL/SQL",
        "Performed critical data entry for edge cases on the jurisdiction border of the Utility's district, along with additional research to populate 3,000+ cells regarding tax information and APN values",
        "Contributed to a medium-risk research project by reviewing 200+ physical records in the Archival department, marking 50+ keywords and phrases for investigative processes into executive leadership and their legislative and business actions"
      ]
    },
    "CT Oakland": {
      jobTitle: "Administrative Intern @",
      duration: "JAN 2017 - JUNE 2017",
      desc: [
        "Conducted research and compiled student data for academic program evaluations, resulting in improved program efficiency and effectiveness",
        "Organized physical records chronologically, resulting in a 50% improvement in retrieval time and a 100% decrease of outdated documents",
        "Categorized 30,000+ emails that was in the director's inbox using relevant labels, resulting in improved email management and a 50% reduction in response time.",
        "Surveyed 20+ laptop & electronic resources, leading to identification of areas for optimization"
      ]
    }
  };


  return (
    <Section id="tech">
      <SectionDivider />
      <SectionTitle main>Experiences</SectionTitle>
      <SectionText>
        I've worked with a wide range of technologies for full-stack web and game
        development, including design patterns, frameworks, and libraries.
      </SectionText>
      <Box
        sx={{ flexGrow: 1, bgcolor: '#131214', display: 'flex', height: '100%', width: '100%' }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          textColor="#fff"
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          {Object.keys(experienceItems).map((key, index) => (
            <Tab classname="MuiTab-wrapper" label={key} {...a11yProps(index)} />
          ))}
        </Tabs>

        {Object.keys(experienceItems).map((key, index) => (
          <TabPanel value={value} index={index}>
            <span className="experience-job-title">
              {experienceItems[key]['jobTitle'] + " "}
            </span>
            <span className="experience-job-company">{key}</span>
            <div className="experience-job-duration">
              {experienceItems[key]['duration']}
            </div>
            <ul className="job-description">
              {experienceItems[key]['desc'].map(function (descItem, idx) {
                return (
                  <FadeIn delay={`${idx + 1}00ms`}>
                    <li key={idx}>{descItem}</li>
                  </FadeIn>
                )
              }
              )}
            </ul>
          </TabPanel>
        ))}
      </Box>
    </Section>
  );
}
