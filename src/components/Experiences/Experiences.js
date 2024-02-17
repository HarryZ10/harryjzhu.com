import React from "react";
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
    University: {
      jobTitle: "Web Software Development Intern @",
      duration: "AUG 2021 - MAY 2024",
      desc: [
        "Spearheaded the implementation of 20+ data pipelines in Node.js, achieving a dramatic 99% reduction in manual build time and accelerating development workflows, optimizing operational efficiency and content delivery speed",
        "Revamped 10% of content pages with HTML and CSS and support the retirement effort of 1,000+ legacy pages",
        "Produced 100+ web pages with JavaScript, resulting in a 70% enhancement in stakeholder engagement" 
      ]
    },

    Liminal : {
      jobTitle: "Software Engineer Intern @",
      duration: "JUN 2023 - AUG 2023",
      desc: [
        "Architected a feature flag service housing 7+ features using React.js and Flask with database connectivity, reducing manual software configuration time by 99% (e.g., developer pages, enabling fake hardware)",
        "Optimized battery cell testing process efficiency by offloading 50+ synchronous log messages per minute using pub/subs and ZeroMQ, a messaging queue pattern",
        "Refactored the OPC to Redis communication mechanism to resolve race conditions, leading to a 20% increase in improved network stability with PLC field devices",
        "Fun things: Connected with six other interns on the software and data team, discovered new technologies, and went on many lunches and coffee runs with the team!"
      ]
    },
    Recidiviz: {
      jobTitle: "Software Engineering Intern @",
      duration: "JUNE 2022 - AUG 2022",
      desc: [
        "Pioneered a command module with 20+ API scripts that perform comprehensive IAM policy audits and reports elevated privileges in 17 B2B platforms, reducing manual verification time by 90%",
        "Implemented a CI/CD pipeline for source code analysis (e.g., CodeQL), reducing found vulnerabilities by 100%",
        "Built a pipeline of three automation scripts utilizing pub/sub that boosted transparency of alerts by 90% across disparate cloud environments, implementing 12+ security control measures and log metrics in Google Cloud",
        "Empowered standard security benchmarks by 20% to integrate multi-factor authentication corporate security policies"
      ]
    },
    "NW Natural": {
      jobTitle: "Security Analyst Intern @",
      duration: "MAY 2021 - AUG 2021",
      desc: [
        "Led a security inventory documentation effort of 20+ in-house hardware and external software servers that maintain the infrastructure for the organization",
        "Developed 6 SQL queries, resulting in a 20% increase of identifying suspicious login activity in privileged systems",
        "Created six interactive dashboards and real-time alerts, leading to a 10% reduction in incident response time"
      ]
    },
    "Gameheads '20": {
      jobTitle: "Game Engineer @",
      duration: "MAY 2020 - DEC 2020",
      desc: [
        "Led a 50% reduction in UI load time by engineering UI/UX flows and internal backend connectivity services",
        "Orchestrated management of 120+ pull requests using Trello, contributing to a 95% achievement rate per sprint",
        "Performed 20+ test verifications for 5+ game features in line with the team's OKRs, and engaged in A/B testing with 23+ stakeholders, resulting in a 70% enhancement to UX quality and level metrics, up to the published demo build"
      ]
    },
    Gameheads: {
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
          value={value}
          onChange={handleChange}
          textColor="#fff"
          aria-label="Vertical tabs example"
          className="tabs-menu"
        >
          {Object.keys(experienceItems).map((key, index) => (
            <Tab className="MuiTab-wrapper" label={key} {...a11yProps(index)} />
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
