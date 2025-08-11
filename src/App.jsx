import React,{useRef} from "react"
import './App.css';
import './sass/navbar.css';
import { faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Helmet} from "react-helmet";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Aboutme from "./components/Aboutme.jsx";
import Technologies from "./components/Technologies.jsx";
import Projects from "./components/Projects.jsx";
import ParticleTest from "./components/ParticleTest.jsx";

function App() {
  const aboutmeRef = useRef(null);
  const technologiesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null)
  const navLinks = useRef(null)
  const executeScrollAboutMe = () => {
    navLinks.current.classList.toggle("open")
    aboutmeRef.current.scrollIntoView()
  }
  const executeScrollTechnologies = () =>
  {
    navLinks.current.classList.toggle("open")
    technologiesRef.current.scrollIntoView()
  }
  const executeScrollProjects = () => {
    navLinks.current.classList.toggle("open")
    projectsRef.current.scrollIntoView()
  }
  const executeScrollContact = () => {
    navLinks.current.classList.toggle("open")
    contactRef.current.scrollIntoView()
  }
  const hamburgerClick = () => {
    navLinks.current.classList.toggle("open")

  }
  return (
    <div className="App">
      <Helmet>
        <title>Portfolio</title>

        <link rel="icon" type="mylogo.png" href="mylogo.ico" sizes="16x16" />
      </Helmet>
      <nav>
        <div className="navbar">
          <div className="navbar__menulogo" onClick={hamburgerClick}><FontAwesomeIcon icon={faBars} size="2x" /></div>
          <ul className="navbar__links" ref={navLinks}>
            <li><div onClick={executeScrollAboutMe} >About me</div></li>
            <li><div onClick={executeScrollTechnologies}>Technologies</div></li>
            <li><div onClick={executeScrollProjects}>Projects</div></li>
            <li><div onClick={executeScrollContact}>Contact</div></li>
          </ul>
        </div>
      </nav>
      {/*<ParticleTest />*/}
      <section className="header"><Header executeScrollProjects={executeScrollProjects}/></section>
      <section ref={aboutmeRef} className="aboutme"><Aboutme /></section>
      <section ref={technologiesRef} className="technologies"><Technologies /></section>
      <section ref={projectsRef} className="projects"><Projects /></section>
      <section ref={contactRef} className="footer"><Footer /></section>

    </div>

  );
}

export default App;
