import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
      </Section>
      <Projects />
      <Timeline />
    </Layout>
  );
};

export default Home;
