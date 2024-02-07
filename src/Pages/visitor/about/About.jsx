import AboutCertifications from "./aboutSections/AboutCertifications";
import AboutExperiance from "./aboutSections/AboutExperiance";
import AboutHero from "./aboutSections/AboutHero";
import WhyMeSection from "./aboutSections/WhyMeSection";

import "./about.css";
import Companies from "../home/companies/Companies";

const DUMMY_COMPS = [
  {
    id: 1,
    name: "Comp1",
    logo: "./assets/images.jpg",
    href: "#",
  },
  {
    id: 2,
    name: "Comp2",
    logo: "./assets/images.jpg",
    href: "#",
  },
  {
    id: 3,
    name: "Comp3",
    logo: "./assets/images.jpg",
    href: "#",
  },
  {
    id: 4,
    name: "Comp4",
    logo: "./assets/images.jpg",
    href: "#",
  },
  {
    id: 5,
    name: "Comp5",
    logo: "./assets/images.jpg",
    href: "#",
  },
];
const About = () => {
  return (
    <>
      <AboutHero />
      <WhyMeSection />
      <AboutExperiance />
      <AboutCertifications />
      <Companies companies={DUMMY_COMPS} />
    </>
  );
};

export default About;
