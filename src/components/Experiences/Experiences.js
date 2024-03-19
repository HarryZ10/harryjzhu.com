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

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const experienceItems = {
    'George Fox': {
      key: 1,
      jobTitle: "Web Developer Intern @",
      duration: "AUG 2021 - Present",
      desc: [
        "Engineered a monitoring tool using VueJS and NodeJS, reducing manual verification of content accuracy by 90%",
        "Developed 20+ automation scripts in NodeJS, achieving a 99% reduction in manual build time down to 2-4 seconds",
        "Optimized branding by building 100+ pages with HTML and CSS, supporting the retirement of 1,000+ legacy pages",
        "Skills Used: VueJS, NodeJS, Python, HTML, CSS"
      ]
    },
    'TRACE': {
      jobTitle: "Software Engineer Consultant (Contract) @",
      link: 'https://traceyours.com',
      duration: "MAR 2024 - Present",
      desc: [
        "Initiating active involvement in maintaining and enhancing TRACE to optimize the developer and user experience",
        "Engaging in thorough debugging to rectify critical bugs, leading to more stable application performance",
        "Skills Used: NextJS, MongoDB, React, Tailwind CSS"
      ]
    },
    'Liminal Insights': {
      key: 2,
      jobTitle: "Software Engineer Intern @",
      duration: "JUN 2023 - AUG 2023",
      desc: [
        "Architected a development platform using ReactJS and Flask, reducing manual software configuration time by 99%",
        "Optimized battery cell testing process efficiency by offloading 50+ synchronous log messages per minute using pub/subs and ZeroMQ, a messaging queue pattern",
        "Stabilized uptime and data flow of 100+ OPC events, removing race conditions involving Redis subscriptions",
        "Fun things: Connected with six other interns on the software and data team, discovered new technologies, and went on many lunches and coffee runs with the team!",
        "Skills Used: NextJS, ReactJS, Python, Flask, Docker, Postgres, Redis, ØMQ"
      ]
    },
    Recidiviz: {
      key: 3,
      jobTitle: "Software Engineering Intern @",
      duration: "JUNE 2022 - AUG 2022",
      desc: [
        "Built an access monitoring tool in Python, Docker, and GCP, reducing IAM audit time by 90% across 17 vendors",
        "Introduced over 10 new security controls and alerts in infrastructure services across 3 disparate cloud environments",
        "Resolved over 200 product vulnerabilities found in production by creating a CI/CD pipeline from SAST",
        "Empowered standard security benchmarks by 95% to integrate multi-factor authentication corporate security policies",
        "Skills Used: Python, Flask, Docker, GraphQL, Pub/Subs, Google Cloud"
      ]
    },
    "NW Natural": {
      key: 4,
      jobTitle: "Security Analyst Intern @",
      duration: "MAY 2021 - AUG 2021",
      desc: [
        "Streamlined security protocols by documenting inventory for 20+ in-house software and hardware systems",
        "Created a Splunk dashboard for real-time detection of suspicious logins and tracking pre-success failed attempts",
        "Revamped enterprise knowledge sharing by overhauling 100+ legacy SharePoint files, enhancing process efficiency",
        "Skills Used: Splunk Enterprise, Sharepoint"
      ]
    },
    "Gameheads '20": {
      key: 5,
      jobTitle: "Game Engineer @",
      duration: "MAY 2020 - DEC 2020",
      desc: [
        "Led a 50% reduction in UI load time by engineering UI/UX flows and internal backend connectivity services",
        "Orchestrated management of 120+ pull requests using Trello, contributing to a 95% achievement rate per sprint",
        "Performed 20+ test verifications for 5+ game features in line with the team's OKRs, and engaged in A/B testing with 23+ stakeholders, resulting in a 70% enhancement to UX quality and level metrics, up to the published demo build",
        "Skills Used: C#, Unity"
      ]
    },
    Gameheads: {
      key: 6,
      jobTitle: "Lead Game Designer @",
      duration: "MAY 2019 - DEC 2019",
      desc: [
        "Established static and dynamic metrics such as movement speed, object animation speed, object spawn rate, and metric properties of player and enemy objects",
        "Designed and prototyped 10+ versions of the level layout upon iterations of drafting player progression",
        "Implemented and deployed the feature for the Players’s ability to eat and complete objectives",
        "Skills Used: C#, Unity"
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
