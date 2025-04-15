import AboutGradient from "./components/AboutSection/AboutGradient";
import AboutMain from "./components/AboutSection/AboutMain";
import SubAboutSection from "./components/AboutSection/SubAboutSection";
import ExperienceMain from "./components/ExperienceSection/ExperienceMain";
import ProjectMain from "./components/ExperienceSection/ProjectSection/ProjectMain";
import HelperSection from "./components/HelperSection";
import MeAboutMain from "./components/MeAboutSection/MeAboutMain";
import NavbarMain from "./components/Navbar/Navbarmain";
import SkillsMain from "./components/SkillsSection/SkillsMain";
import SubSkills from "./components/SkillsSection/SubSkills";

function App() {
  return (
    <main className="font-body overflow-hidden">
      <NavbarMain />
      <AboutMain />
      <AboutGradient />
      <SubAboutSection />
      <MeAboutMain />
      <SkillsMain />
      <SubSkills/>
      <ExperienceMain/>
      <ProjectMain/>
      <HelperSection />
    </main>
  );
}

export default App;
