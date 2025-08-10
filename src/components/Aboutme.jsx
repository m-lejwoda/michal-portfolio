import React, {useEffect} from 'react'
import '../sass/aboutme.css'
import Aos from "aos";
import "aos/dist/aos.css";

const Aboutme = () => {
    useEffect(() => {
        Aos.init({duration: 2000})

    }, []);
    return (
        <div data-aos="fade-right" className="aboutme__container">
            <div className="aboutme__container__title"><h2>About me</h2></div>
            <div className="aboutme__container__description">
                My name is Michał Lejwoda. I hold a master's degree in computer science from Maria Curie-Skłodowska
                University.
                Over the past 7 years, I have been developing websites, mostly in my free time, but I also worked
                professionally as a full stack developer for 2.5 years.
                During this time, I constantly strived to improve my skills and keep up with the fast-changing world of
                technology.
                I am actively learning German to broaden my opportunities and better connect with diverse teams and
                projects.
                My passion lies in exploring new technologies and innovative solutions in web development and the IT
                industry.
                Django and React are my main technologies, but I am always eager to learn and explore new tools and
                frameworks that help me enhance my abilities.
                As a dedicated, persistent, and conscientious person, I approach every project with commitment and a
                focus on quality.
                I believe in continuous learning and systematic work, which help me grow both personally and
                professionally.
            </div>
        </div>
    )
}

export default Aboutme
