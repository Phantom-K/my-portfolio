import AboutGradient from "./components/AboutSection/AboutGradient";
import AboutMain from "./components/AboutSection/AboutMain";
import SubAboutSection from "./components/AboutSection/SubAboutSection";
import ExperienceMain from "./components/ExperienceSection/ExperienceMain";
import ProjectMain from "./components/ProjectSection/ProjectMain";
import HelperSection from "./components/HelperSection";
import MeAboutMain from "./components/MeAboutSection/MeAboutMain";
import NavbarMain from "./components/Navbar/Navbarmain";
import SkillsMain from "./components/SkillsSection/SkillsMain";
import SubSkills from "./components/SkillsSection/SubSkills";
import ContactMeMain from "./components/ContactMeSection/ContactMeMain";
import FooterMain from "./components/Footer/FooterMain";

function App() {
  return (
    <main className="font-body overflow-hidden">
      <NavbarMain />
      <AboutMain />
      <AboutGradient />
      <SubAboutSection />
      <MeAboutMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectMain />
      <ContactMeMain />
      <FooterMain />
      <HelperSection />
    </main>
  );
}

export default App;
