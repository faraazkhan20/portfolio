import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import Aero from "./components/Aero";
import AboutMe from "./components/AboutMe";
import ReactOutToMe from "./components/ReachOutToMe";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <Navbar />
      <div className="container custom-width mb-5">
        <Aero />
        <AboutMe />
        <ReactOutToMe />
        <Experience />
      </div>
    </>
  );
}

export default App;
