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
    "GFU MarCom": {
      jobTitle: "Web Developer Intern @",
      duration: "AUG 2021 - MAY 2024",
      desc: [
        "Produced 50+ web pages to resolve 100+ support tickets and help to increase user conversions by 50%",
        "Engineered over 15+ REST-driven data pipelines in Node.js and Apache Velocity, enabling real-time data retrieval from the on-system CMS and reducing web page maintenance and manual building time by 99%",
        "Expanded content development by 95% with 10+ data-driven automation scripts to validate internal and routine digital management actions, such as auditing, publishing, creating, and editing web pages or sections programmatically",
        "Leveraged advanced skill in responsive design and front-end development (HTML, CSS, JavaScript) using Adobe XD to overhaul 10% of the most promoted pages, enhancing user experience and site performance by 50%"
      ]
    },
    "GFU CS Dept": {
      "jobTitle": "UG Computer Science Teaching Assistant @",
      "duration": "AUG 2022 - MAY 2024",
      "desc": [
        "Tutored and monitored performance of students about introductory computer science concepts such as Data Structures, Relational Databases, Object-Oriented Design, and Analysis of Algorithms. Languages composed of Python, Java, Scala, and C/C++."
      ]
    },
    Liminal: {
      jobTitle: "Software Engineer Intern @",
      duration: "JUN 2023 - AUG 2023",
      desc: [
        "Architected an internal and on-system feature management service to increase the integration of behavior-driven development by 50% and to support 10+ switchable feature settings on the flagship software platform, EchoStat®",
        "Designed the full-stack product extension using React.js and Postgres that uses in-house REST services to isolate the 10+ feature settings quickly without manual configuration to deploy the EchoStat® product onto customer sites",
        "Maintained battery cell test throughput while keeping all log messages of all levels by offloading the synchronous runtime logs into a pub/sub communication protocol using the asynchronous messaging library, ZeroMQ",
        "Refactored the OPC to Redis communication mechanism, leading to a 20% increase in improved stability of EchoStat® and its physical connectivity with the network to its native hardware field devices",
        "Fun things: Connected with six other interns on the software and data team, discovered new technologies, and went on many lunches and coffee runs with the team!"
      ]
    },
    Recidiviz: {
      jobTitle: "Software Engineering Intern @",
      duration: "JUNE 2022 - AUG 2022",
      desc: [
        "Pioneered a command line interface of 20+ automation scripts that performs comprehensive login and IAM group policy audits and reports elevated privileges in 17 B2B platforms, reducing manual verification time by 99%",
        "Resolved 100% of CodeQL security alerts in the production environment that was found to be OWASP’s top ten vulnerabilities discovered in popular enterprise software and codebases",
        "Built a pipeline of three automation scripts utilizing pub/sub listeners that boosted the transparency of alerts across disparate cloud environments by 90%, implementing 20+ hardening measures set by the Center for Internet Security",
        "Empowered standard security benchmarks by 20% to integrate multi-factor authentication corporate security policies"
      ]
    },
    'NW Natural': {
      jobTitle: "Security Analyst Intern @",
      duration: "MAY 2021 - AUG 2021",
      desc: [
        "Developed and deployed 6 SQL scripts, resulting in a 50% decrease in average response time for identifying suspicious login activity and enhancing security measures for privileged IT systems",
        "Created six interactive dashboards and real-time alerts based on national security benchmarks in software systems, supporting a 10% reduction in incident response time",
        "Assessed 100% of internal cybersecurity procedures, ensuring compliance with frameworks like NIST and ISO 27001"
      ]
    },
    'Gameheads 6.0': {
      jobTitle: "Game Engineer (& Project Manager) @",
      duration: "MAY 2020 - DEC 2020",
      desc: [
        "Led a 50% reduction in UI load time by engineering UI/UX flows and internal backend connectivity services",
        "Orchestrated management of 120+ pull requests using Trello, contributing to a 95% achievement rate per sprint",
        "Performed 20+ test verifications for 5+ game features in line with the team's OKRs, and engaged in A/B testing with 23+ stakeholders, resulting in a 70% enhancement to UX quality and level metrics, up to the published demo build"
      ]
    },
    'Gameheads 5.0': {
      jobTitle: "Lead Game Designer @",
      duration: "MAY 2019 - DEC 2019",
      desc: [
        "Established static and dynamic metrics such as movement speed, object animation speed, object spawn rate, and metric properties of player and enemy objects",
        "Designed and prototyped 10+ versions of the level layout upon iterations of drafting player progression in a confined 3D marine world",
        "Implemented and deployed the feature for the Players’s ability to eat and complete objectives"
      ]
    },
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
