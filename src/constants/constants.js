import React, { useEffect, useRef } from 'react';

export function GCC11YEARS() {
  const containerRef = useRef(null);

  useEffect(() => {
    let instance, PSPDFKit;
    (async function GCC11YEARS() {
      PSPDFKit = await import("pspdfkit");

      instance = await PSPDFKit.load({
        container: containerRef.current,
        document: "/gdd19.pdf",
        baseUrl: `${window.location.protocol}//${window.location.host}/`
      });

      instance.setViewState(viewState => viewState.set("showToolbar", !viewState.showToolbar));
    })();

    return () => {
      if (PSPDFKit && instance && instance.destroy) {
        PSPDFKit && PSPDFKit.unload(containerRef.current);
      }
    }
  }, []);

  return <div ref={containerRef} style={{ height: "100vh", maxHeight: "50vh" }}/>
}


export function GDD_2020() {
  const containerRef = useRef(null);

  useEffect(() => {
    let instance, PSPDFKit;
    (async function GCC11YEARS() {
      PSPDFKit = await import("pspdfkit");

      instance = await PSPDFKit.load({
        container: containerRef.current,
        document: "/gdd20.pdf",
        baseUrl: `${window.location.protocol}//${window.location.host}/`
      });

      instance.setViewState(viewState => viewState.set("showToolbar", !viewState.showToolbar));
    })();

    return () => {
      if (PSPDFKit && instance && instance.destroy) {
        PSPDFKit && PSPDFKit.unload(containerRef.current);
      }
    }
  }, []);

  return <div ref={containerRef} style={{ height: "100vh", maxHeight: "50vh" }}/>
}



export const projects = [
  {
    title: '11 Years',
    description: "'11 Years' is a 3-D marine survival game where you play as a Clownfish trying to survive from the direct and indirect human influences on the coral reef ecosystem.",
      image: '/images/1.png',
      tags: ['C#', 'Unity', 'Game Designer', 'Level Designer'],
    visit: 'https://gameheads.itch.io/11-years',
    id: 0,
    pdf: true
  },
  {
    title: 'Confined Indorms',
    description:"'Confined Indorms' is an isometric, interactive, non-linear management game where you choose your own tasks to complete in the dorm stuck in quarantine.",
    image: '/images/2.png',
    tags: ['C#', 'Unity', 'Programmer', 'Project Manager'],
    visit: 'https://gameheads.itch.io/confined-indorms',
    id: 1,
    pdf: true
  },
  {
    title: 'SpectrCare',
    description:"MySpectorHome, an iOS app, is where residents can support to the underserved community, and pinpoint street encampments that need extra assistance.",
    image: '/images/4.png',
    tags: ['Winner', 'Swift', 'iOS', 'Figma', 'UX/UI', 'Rest API'],
    source: 'https://github.com/HarryZ10/mySpectr',
    visit: 'https://www.youtube.com/watch?v=-Q0xte4u9N0',
    id: 2,
    context: 'Context',
    summary: 'Summary',
    purpose: 'Purpose',
    userResearch: 'User Research',
    ideation: 'Ideation',
    reflection: 'Reflection',
  },
  {
    title: 'Pickabox',
    description: "Pickabox is a user-friendly web application where everyday Wikipedia users dive deep and learn from API-generated informational articles.",
      image: '/images/3.png',
      tags: ['Winner', 'React', 'Node', 'Python', 'API', 'Firebase'],
    source: 'https://github.com/kristofgazso/pickabox.space',
    visit: 'https://devpost.com/software/pickabox',
    id: 3,
    context: 'Context',
    summary: 'Summary',
    purpose: 'Purpose',
    userResearch: 'User Research',
    ideation: 'Ideation',
    reflection: 'Reflection',
  },
  {
    title: 'ACM @ GFU',
    description: "ACM is a biweekly student-run club at George Fox University where students of various identities can learn and grow in the field of computer science and cybersecurity.",
      image: '/images/7.png',
      tags: ['React', 'Node', 'API', 'Computer Science'],
    source: 'https://github.com/HarryZ10/foxacmw.com',
    visit: 'https://foxacmw.com',
    id: 4,
    context: 'Context',
    summary: 'Summary',
    purpose: 'Purpose',
    userResearch: 'User Research',
    ideation: 'Ideation',
    reflection: 'Reflection',
  },
  {
    title: 'ACM Code Jam v2',
    description: "A weekend-long hackathon, hosted by ACM @ GFU, where students will work collaboratively on a team to build a technical project in 30 hours.",
      image: '/images/6.png',
      tags: ['Winner', 'React', 'Node', 'Python', 'API', 'Firebase'],
    visit: 'https://live.foxacmw.com',
    id: 5,
    context: 'Context',
    summary: 'Summary',
    purpose: 'Purpose',
    userResearch: 'User Research',
    ideation: 'Ideation',
    reflection: 'Reflection',
  }
];