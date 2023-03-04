// Import Next Components
import Head from "next/head";
// Import de componentes
import { HeroBanner } from "../components/HeroBanner";
import { AboutMe } from "../components/AboutMe";

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Stanley</title>
      </Head>

      <HeroBanner/>

      <AboutMe/>
    </>
  );
}
