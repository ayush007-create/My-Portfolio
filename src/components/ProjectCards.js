import React from 'react'
import PropTypes from 'prop-types'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
function ProjectCards(props) {
  return (
    <div sm={5} md={5} className="col mx-2 my-2">
    <TrackVisibility>
      {({ isVisible }) =>
      <div className={isVisible ? "animate__animated animate__slideInUp": ""}>
      <a target='_blank' href={props.url}><div className="proj-imgbx">
            <img src={props.img} alt=""/>
            <div className="proj-txt">
                <h4>{props.title}</h4>
                <span>{props.desc}</span>
            </div>
        </div></a>
        </div>}
      </TrackVisibility>
    </div>
  )
}

ProjectCards.propTypes = {

}

export default ProjectCards

