import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../sass/projects.css'

const Projects = () => {
    const click = (web) => {
        window.open(web, '_blank', 'noopener,noreferrer');
    }
    return (
        <div className="projects__container">
            <div className="projects__container__title"><h2>Projects</h2></div>
            <div className="projects__container__elements">
                <div className="projects__container__element">
                    <div className="projects__container__element__title">TrueEffects</div>
                    <div className="projects__container__element__image">
                        <div className="projects__container__element__image--img"><img alt="trueeffects"
                                                                                       src="./trueeffects.png"/></div>
                    </div>
                    <div className="projects__container__element__buttons">
                        <div className="projects__container__element__buttons__livebutton"
                             onClick={() => click('https://true-effects.pl')}>Live<FontAwesomeIcon
                            icon={faArrowUp}/></div>
                        <div className="projects__container__element__buttons__githubbutton"
                             onClick={() => click('https://github.com/michal-lejwoda/true-effects')}>Github<img
                            alt="github" src="./GitHub-Mark-Light-64px.png"/></div>
                    </div>
                    <div className="projects__container__element__description">
                        <div className="projects__container__element__smalltitle">Fitness Tracking Application True
                            Effects
                        </div>
                        <div className="projects__container__element__content">
                            A comprehensive fitness application designed to help users monitor their physical activity
                            and
                            track body measurements. The platform allows users to create personalized workouts, schedule
                            them in a calendar, and adjust training plans as needed. A built-in achievements system
                            motivates users by unlocking rewards for consistent activity and completed milestones,
                            making
                            fitness both engaging and rewarding.
                        </div>
                        <div className="projects__container__element__technologies">
                            Technologies: Django, Django Rest Framework, Docker, React, Redux, Github actions, Sass, PostgreSQL, WebSockets
                        </div>
                    </div>
                </div>
                <div className="projects__container__element">
                    <div className="projects__container__element__title">Flashcards</div>
                    <div className="projects__container__element__image">
                        <div className="projects__container__element__image--img"><img alt="flashcards"
                                                                                       src="./flashcards.png"/></div>
                    </div>
                    <div className="projects__container__element__buttons">
                        <div className="projects__container__element__buttons__livebutton"
                             onClick={() => click('https://www.language-flashcards.pl')}>Live<FontAwesomeIcon
                            icon={faArrowUp}/></div>
                        <div className="projects__container__element__buttons__githubbutton"
                             onClick={() => click('https://github.com/michal-lejwoda/my_flashcards')}>Github<img alt="github"
                                                                                                   src="./GitHub-Mark-Light-64px.png"/>
                        </div>
                    </div>
                    <div className="projects__container__element__description">
                        <div className="projects__container__element__smalltitle">Flashcard & Language Learning Platform</div>
                        <div className="projects__container__element__content">
                            An interactive learning application focused on flashcards and language exercises. In
                            addition to
                            flashcards, the platform offers 10 different types of exercises for both English and German,
                            helping users improve vocabulary and grammar. Content can be easily managed and customized
                            through an intuitive Wagtail CMS interface, allowing administrators to create and organize
                            exercises efficiently. The platform encourages regular practice with features such as
                            vocabulary
                            revision and progress tracking.
                        </div>
                        <div className="projects__container__element__technologies">
                            Technologies: Django, Docker, React, Typescript, Github actions, PostgreSQL, Pytest, Celery, Redis, Flower, Sentry, Wagtail
                        </div>
                    </div>
                </div>
                <div className="projects__container__element">
                    <div className="projects__container__element__title">Personal Trainer</div>
                    <div className="projects__container__element__image">
                        <div className="projects__container__element__image--img"><img alt="personal-trainer"
                                                                                       src="./personal-trainer-michal.png"/></div>
                    </div>
                    <div className="projects__container__element__buttons">
                        <div className="projects__container__element__buttons__livebutton"
                             onClick={() => click('https://www.personal-trainer-michal.pl')}>Live<FontAwesomeIcon
                            icon={faArrowUp}/></div>
                        <div className="projects__container__element__buttons__githubbutton"
                             onClick={() => click('https://github.com/michal-lejwoda/trainer_page')}>Github<img alt="github"
                                                                                                       src="./GitHub-Mark-Light-64px.png"/>
                        </div>
                    </div>
                    <div className="projects__container__element__description">
                        <div className="projects__container__element__smalltitle">Personal Trainer Website with Booking & Payments</div>
                        <div className="projects__container__element__content">
                            A modern, responsive website for a personal trainer, designed to showcase services and
                            encourage
                            potential clients to book training sessions. The platform features a complete booking
                            system
                            integrated with Stripe payments, enabling users to reserve and pay for sessions directly
                            online.
                            Clear presentation of offers and a streamlined booking process enhance the client
                            experience
                            and
                            help convert visitors into paying customers.
                        </div>
                        <div className="projects__container__element__technologies">
                            Technologies: Fastapi, Docker, React, Alembic, Github actions, Tailwind, PostgreSQL, APScheduler
                        </div>
                    </div>
                </div>
                <div className="projects__container__element">
                    <div className="projects__container__element__title">Reviews Scrapper</div>
                    <div className="projects__container__element__image">
                        <div className="projects__container__element__image--img"><img alt="reviews-scrapper"
                                                                                       src="./scrapper-omi.png"/></div>
                    </div>
                    <div className="projects__container__element__buttons">
                        <div className="projects__container__element__buttons__livebutton"
                             // onClick={() => click('https://atrakcje.herokuapp.com/')}
                        >
                            Soon
                        </div>
                            {/*<FontAwesomeIcon icon={faArrowUp}/></div>*/}
                        <div className="projects__container__element__buttons__githubbutton"
                             onClick={() => click('https://github.com/michal-lejwoda/web_grades_scrapper')}>Github<img alt="github"
                                                                                                       src="./GitHub-Mark-Light-64px.png"/>
                        </div>
                    </div>
                    <div className="projects__container__element__description">
                        <div className="projects__container__element__smalltitle">Media Review Aggregator Website
                        </div>
                        <div className="projects__container__element__content">

                            Originally developed as a Discord bot, this project evolved into a standalone web
                            platform
                            that
                            aggregates review data from sources such as OpenCritic, Metacritic, and IMDb. The
                            application
                            scrapes relevant information and presents key ratings and summaries to the user in an
                            accessible
                            format. It serves as a quick and reliable reference point for evaluating games, movies,
                            and
                            TV
                            shows without the need to browse multiple websites.
                        </div>
                        <div className="projects__container__element__technologies">
                            Technologies: Fastapi, Docker, React, BeautifulSoup, Github actions, Tailwind, Typescript, pytest
                        </div>
                    </div>
                </div>
                <div className="projects__container__element">
                    <div className="projects__container__element__title">Contour Algorithm</div>
                    <div className="projects__container__element__image">
                        <div className="projects__container__element__image--img"><img alt="Contour Algorithm"
                                                                                       src="./contour-algorithm.png"/></div>
                    </div>
                    <div className="projects__container__element__buttons">
                        <div className="projects__container__element__buttons__livebutton"
                             // onClick={() => click('https://atrakcje.herokuapp.com/')}
                        >This is only Algorithm
                            {/*<FontAwesomeIcon icon={faArrowUp}/>*/}
                        </div>
                        <div className="projects__container__element__buttons__githubbutton"
                             onClick={() => click('https://github.com/michal-lejwoda/contour-generator')}>Github<img alt="github"
                                                                                                       src="./GitHub-Mark-Light-64px.png"/>
                        </div>
                    </div>
                    <div className="projects__container__element__description">
                        <div className="projects__container__element__smalltitle">Contour Algorithm</div>
                        <div className="projects__container__element__content">
                            A C++ algorithm designed for processing LiDAR point cloud data and converting it into
                            contour
                            lines. The solution efficiently interprets elevation data, applies smoothing and
                            filtering
                            techniques, and outputs accurate topographic representations. This functionality can be
                            integrated into GIS applications, mapping tools, or terrain analysis software, enabling
                            better
                            visualization and understanding of geographic data.
                        </div>
                        <div className="projects__container__element__technologies">
                            Technologies: C++, Liblas, Gdal
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects
