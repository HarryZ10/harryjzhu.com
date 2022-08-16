import React, { useEffect, useRef } from 'react';

export function GetResumePDF() {
  const containerRef = useRef(null);

  useEffect(() => {
    let instance, PSPDFKit;
    (async function GCC11YEARS() {
      PSPDFKit = await import("pspdfkit");

      instance = await PSPDFKit.load({
        container: containerRef.current,
        document: "/resume.pdf",
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
    duties: "",
    accomplishments: "",
    userResearch: "",
    img: [
      '/images/11Y/1.png',
      '/images/11Y/2.png',
      '/images/11Y/3.png',
    ],
  },
  {
    title: 'Confined Indorms',
    description:"'Confined Indorms' is an isometric, interactive, non-linear management game where you choose your own tasks to complete in the dorm stuck in quarantine.",
    image: '/images/2.png',
    tags: ['C#', 'Unity', 'Programmer', 'Project Manager'],
    visit: 'https://gameheads.itch.io/confined-indorms',
    id: 1,
    duties: "",
    accomplishments: "",
    userResearch: "",
    img: [
      '/images/11Y/1.png',
      '/images/11Y/2.png',
      '/images/11Y/3.png',
    ],
  },
  {
    title: 'SpectrCare',
    description:"MySpectorHome, an iOS app, is where residents can support to the underserved community, and pinpoint street encampments that need extra assistance.",
    image: '/images/4.png',
    tags: ['Winner', 'Swift', 'iOS', 'Figma', 'UX/UI', 'Rest API'],
    source: 'https://github.com/HarryZ10/mySpectr',
    visit: 'https://www.youtube.com/watch?v=-Q0xte4u9N0',
    id: 2,
    summary: 'Summary',
    duties: "",
    accomplishments: "",
    userResearch: "",
    img: [
      '/images/11Y/1.png',
      '/images/11Y/2.png',
      '/images/11Y/3.png',
    ],
  },
  {
    title: 'Pickabox',
    description: "Pickabox is a user-friendly web application where everyday Wikipedia users dive deep and learn from API-generated informational articles.",
      image: '/images/3.png',
      tags: ['Winner', 'React', 'Node', 'Python', 'API', 'Firebase'],
    source: 'https://github.com/kristofgazso/pickabox.space',
    visit: 'https://devpost.com/software/pickabox',
    id: 3,
    summary: 'Pickabox is a user-friendly web application where everyday Wikipedia users dive deep and learn from API-generated informational articles',
    duties: "",
    accomplishments: "",
    userResearch: "",
    img: [
      '/images/11Y/1.png',
      '/images/11Y/2.png',
      '/images/11Y/3.png',
    ],
  },
  {
    title: 'ACM Code Jam v2',
    description: "A weekend-long hackathon, hosted by ACM @ GFU, where students will work collaboratively on a team to build a technical project in 30 hours.",
      image: '/images/6.png',
      tags: ['Winner', 'React', 'Node', 'Python', 'API', 'Firebase'],
    visit: 'https://live.foxacmw.com',
    id: 4,
    summary: 'A weekend-long hackathon, hosted by ACM @ GFU, where students will work collaboratively on a team to build a technical project in 30 hours.',
    duties: "",
    accomplishments: "",
    userResearch: "",
    img: [
      '/images/11Y/1.png',
      '/images/11Y/2.png',
      '/images/11Y/3.png',
    ],
  }
];
