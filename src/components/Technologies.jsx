import {useEffect} from 'react'
import '../sass/technologies.css';
import Aos from "aos";
import "aos/dist/aos.css";

const Technologies = props => {
    useEffect(() => {
        Aos.init({duration: 2000})

    }, []);
    return (
        <div className="technologies__container">
            <div data-aos="fade-right" className="technologies__container__title"><h2>My Technologies</h2></div>
            <div className="technologies__container__elements">
                <div data-aos="fade-down" className="technologies__container__element">
                    <div className="technologies__container__element__image">
                        <img alt="html" src="./html-icon.png"/>
                    </div>
                    <div className="technologies__container__element__title">Django</div>
                    <div className="technologies__container__element__description">I build robust and scalable backend
                        applications using Django. I develop RESTful APIs, handle database design with ORM, and
                        implement authentication and authorization systems. I focus on writing clean, maintainable code
                        and optimizing performance.
                    </div>
                </div>
                <div data-aos="fade-down" className="technologies__container__element">
                    <div className="technologies__container__element__image">
                        <img alt="css" src="./css-icon.png"/>
                    </div>
                    <div className="technologies__container__element__title">FastAPI</div>
                    <div className="technologies__container__element__description">I create high-performance APIs with
                        FastAPI, leveraging its asynchronous capabilities for speed and efficiency. I use FastAPI for
                        building microservices and backend components that require fast response times and easy
                        integration with modern frontend frameworks.
                    </div>
                </div>
                <div data-aos="fade-down" className="technologies__container__element">
                    <div className="technologies__container__element__image">
                        <img alt="js" src="./js-icon.png"/>
                    </div>
                    <div className="technologies__container__element__title">React</div>
                    <div className="technologies__container__element__description">I develop dynamic and responsive user
                        interfaces with React. I work on creating reusable components, managing state with hooks or
                        context, and integrating frontend applications with backend APIs to deliver seamless user
                        experiences.
                    </div>
                </div>
                <div data-aos="fade-down" className="technologies__container__element">
                    <div className="technologies__container__element__image">
                        <img alt="django" src="./django-icon.png"/>
                    </div>
                    <div className="technologies__container__element__title">Azure</div>
                    <div className="technologies__container__element__description">I deploy, manage, and scale
                        applications on Microsoft Azure. I use Azure services like App Services, Azure Functions, and
                        Azure Storage, and I implement infrastructure automation and monitoring to ensure reliability
                        and scalability.
                    </div>
                </div>
                <div data-aos="fade-down" className="technologies__container__element">
                    <div className="technologies__container__element__image">
                        <img alt="react" src="./react-icon.png"/>
                    </div>
                    <div className="technologies__container__element__title">Terraform</div>
                    <div className="technologies__container__element__description">I manage cloud infrastructure as code
                        using Terraform. I write modular, reusable Terraform configurations to provision and maintain
                        resources in Azure, enabling consistent and repeatable deployments across environments.
                    </div>
                </div>
                <div data-aos="fade-down" className="technologies__container__element">
                    <div className="technologies__container__element__image">
                        <img alt="git" src="./git-icon.png"/>
                    </div>
                    <div className="technologies__container__element__title">Git</div>
                    <div className="technologies__container__element__description">I use Git for version control to
                        manage codebases efficiently. I follow best practices with branching strategies, pull requests,
                        and code reviews to maintain code quality and collaborate effectively with teams.
                    </div>
                </div>
            </div>
            <div className="technologies__container__secondtitle"><h2>Rest technologies</h2></div>
            <div className="technologies__container__restelement">
                <div className="technologies__container__restelement__title">
                    Redux
                </div>
                <div className="technologies__container__restelement__title">
                    Python
                </div>
                <div className="technologies__container__restelement__title">
                    Sass
                </div>
                <div className="technologies__container__restelement__title">
                    Django Rest Framework
                </div>
                <div className="technologies__container__restelement__title">
                    Rest
                </div>
                <div className="technologies__container__restelement__title">
                    PostgreSQL
                </div>
                <div className="technologies__container__restelement__title">
                    MySQL
                </div>
                <div className="technologies__container__restelement__title">
                    GitHub
                </div>
                <div className="technologies__container__restelement__title">
                    Gitlab
                </div>
                <div className="technologies__container__restelement__title">
                    Mercurial
                </div>
                <div className="technologies__container__restelement__title">
                    Celery
                </div>
                <div className="technologies__container__restelement__title">
                    Bem
                </div>
                <div className="technologies__container__restelement__title">
                    Redis
                </div>
                <div className="technologies__container__restelement__title">
                    Docker
                </div>
                <div className="technologies__container__restelement__title">
                    Gis technologies
                </div>
                <div className="technologies__container__restelement__title">
                    Heroku
                </div>
                <div className="technologies__container__restelement__title">
                    Github actions
                </div>
                <div className="technologies__container__restelement__title">
                    Ansible
                </div>
            </div>


        </div>
    )
}


export default Technologies
