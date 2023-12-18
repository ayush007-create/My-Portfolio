import React from 'react'
import PropTypes from 'prop-types'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import colorSharp from '../assets/img/color-sharp.png'
function Skills(props) {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
        <section className='skills' id='Skills'>
        <div className="container">
            <div className="row">
                <div className="col"> 
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>A skill is the learned ability to act with determined results with good execution often within a given amount of time, energy, or both. Skills can often be divided into domain-general and domain-specific skills.</p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                        <div className="item">
                            <img src={meter1} alt=""/>
                            <h5>HTML/CSS</h5>
                        </div>
                        <div className="item">
                            <img src={meter2} alt=""/>
                            <h5>Javascript</h5>
                        </div>
                        <div className="item">
                            <img src={meter3} alt=""/>
                            <h5>Java</h5>
                        </div>
                        <div className="item">
                            <img src={meter1} alt=""/>
                            <h5>Python</h5>
                        </div>
                        <div className="item">
                            <img src={meter2} alt=""/>
                            <h5>React Js</h5>
                        </div>
                        <div className="item">
                            <img src={meter3} alt=""/>
                            <h5>SQL</h5>
                        </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img src={colorSharp} alt="" className="background-image-left" />
    </section>
  )
}

Skills.propTypes = {

}

export default Skills

