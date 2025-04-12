
import AboutGradient from "./components/AboutSection/AboutGradient";
import AboutMain from "./components/AboutSection/AboutMain";
import SubAboutSection from "./components/AboutSection/SubAboutSection";
import NavbarMain from "./components/Navbar/Navbarmain";

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <AboutMain/>
      <AboutGradient/>
      <SubAboutSection/>
    </main>
  );
}

export default App;
