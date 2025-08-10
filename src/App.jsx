import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aero from "./components/Aero";
import AboutMe from "./components/AboutMe";
import ReactOutToMe from "./components/ReachOutToMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container custom-width">
        {/* <Hero /> */}
        <Aero />
        <AboutMe />
        <ReactOutToMe />
        <Experience />
        <Projects />
        <Skills />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
}

export default App;
