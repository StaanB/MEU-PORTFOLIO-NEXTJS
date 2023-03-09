// Import Next Components
import Head from "next/head";
// Import de componentes
import { HeroBanner } from "../components/HomePage/HeroBanner";
import { AboutMe } from "../components/HomePage/AboutMe";
import { SkillsSection } from "../components/HomePage/SkillsSection/SkillsSection";
import { Habilities } from "../components/HomePage/Projects/Projects";
import { ContactMe } from "../components/HomePage/ContactMe";
import { ThemeProvider } from "../components/HomePage/ThemeProvider/ThemeContext";

export default function Home() {
  return (
    <>
      <ThemeProvider>
        <Head>
          <title>Stanley</title>
        </Head>

        <HeroBanner />

        <AboutMe />

        <SkillsSection />

        <Habilities />

        <ContactMe />
      </ThemeProvider>
    </>
  );
}
