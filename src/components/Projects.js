import colorSharp2 from '../assets/img/color-sharp2.png'
import React from 'react'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import projImg4 from '../assets/img/project-img4.png'
import ProjectCards from './ProjectCards'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
function Projects(props) {
    const projects = [
        {
            title:"Hyspter | A Music Website",
            description:"A spotify clone which plays music uninterruptedly",
            imageUrl: projImg1,
        },
        {
            title:"CraveYard",
            description:"The online food delivery website!",
            imageUrl: projImg2,
        },
        {
            title:"TextUtils",
            description:"A react based application which modifies your text.",
            imageUrl: projImg3,
        },
        {
            title:"Random Joke Generator",
            description:"A Javacript application which generates random joke with javascript API.",
            imageUrl: projImg4,
        }
    ]
  return (
        <section className="projects" id="Projects">
        <div className="container my-5">
            <div className="row">
                <div className="col">
                <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__slideInUp": ""}>
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore itaque voluptate odio quas eaque! Eveniet, labore earum. Alias id dolore nam maxime cum, iure quisquam, doloribus quos possimus, commodi asperiores?</p>
                    </div>}
                </TrackVisibility>
                    <div className="mid row my-3">
                        {
                            projects.map((element)=>{
                                return(
                                    <ProjectCards title={element.title} desc={element.description} img={element.imageUrl}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        <img className='background-image-right' src={colorSharp2} alt="" />
    </section>
  )
}

export default Projects

