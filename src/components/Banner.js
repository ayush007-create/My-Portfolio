import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import headerImg from '../assets/img/header-img.svg'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from 'react-scroll';
function Banner(props) {
    const [loopnum,setLoopnum] = useState(0)
    const toRotate = ["Web Developer","Web Designer","Software Developer"]
    const [text,setText] = useState('')
    const [isDelete,setDelete] = useState(false)
    const [delta,setDelta] = useState(300 - Math.random()*100)
    const period = 2000

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)

        return () =>{clearInterval(ticker)}
    },[text])
    const tick = ()=>{
        let i = loopnum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDelete ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);
        setText(updatedText);
        if(isDelete){
            setDelta(prevdelta => prevdelta/2);
        }
        if(!isDelete && updatedText === fullText){
            setDelete(true);
            setDelta(period);
        }
        else if(isDelete && updatedText === ''){
            setDelete(false);
            setLoopnum(loopnum+1);
            setDelta(500);
        }
    }
  return(
    <section className='banner' id='home'>
    <div className="container">
        <div className="row align-items-center">
            <div xs={12} md={6} xl={7} className="col">
            <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                <span className="tagline">Welcome to My Portfolio</span>
                <h1>Hi I'm Ayush Sharma <br /><span className='wrap'>{text}</span></h1>
                <p>To achieve a responsible position and explore myself more efficiently in an industry with full determination and to expand my knowledge by working hard and learning new technologies.</p>
                <Link
                to="connect" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}
                ><button type="button">Let's Connect<i class="bi bi-arrow-right-circle" to="/contact"></i></button></Link>
            </div>}
            </TrackVisibility>
            </div>
            <div xs={12} md={6} xl={5} className="col">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="headerImg"/>
                </div>}
            </TrackVisibility>
            </div>
        </div>
    </div>
    </section>
  )
}

Banner.propTypes = {

}

export default Banner

