import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Experiences from "../components/Experiences/Experiences";


const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
      </Section>
      <Experiences />
      <Projects />
      <Timeline />
    </Layout>
  );
};

export default Home;
