import { useState, useEffect} from 'react'
import React from 'react'
import {Link} from 'react-scroll'
import PropTypes from 'prop-types'
import portfolio from '../assets/img/portfolio.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/github-mark-white.png'
import navIcon3 from '../assets/img/nav-icon3.svg'
function Navbar(props) {
    const [activeLink,setActivelink] = useState('Home')
    const [scrolled,setScrolled] = useState(false)
    useEffect(()=>{
        const onScroll = ()=>{
            if(window.scrollY>50){
                setScrolled(true)
            }
            else{
                setScrolled(false)
            }
        }
        window.addEventListener('scroll',onScroll)

        return ()=> window.removeEventListener('scroll',onScroll)
    },[])
  return (
    <nav lg={7} className={`navbar navbar-expand-lg bg-body-tertiary -${scrolled === true ?'Scrolled':''}`}>
    <div className="container-fluid">
        <a className="navbar-brand" href="/">
            <img src={portfolio} alt="LOGO" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <Link
                to="home" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}
            className={activeLink === 'Home' ? 'nav-link active':'nav-link'} onClick={()=>{setActivelink('Home')}} aria-current="page">Home</Link>
            <Link 
                to="Skills" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={100} className={activeLink === 'Skills' ? 'nav-link active':'nav-link'} onClick={()=>{setActivelink('Skills')}}>Skills</Link>
            <Link
                to="Projects" 
                spy={true} 
                smooth={true} 
                offset={-150} 
                duration={500} 
            className={activeLink === 'Projects' ? 'nav-link active':'nav-link'} onClick={()=>{setActivelink('Projects')}}>Projects</Link>
        </div>
        <span className="navbar-text">
            <div className="social-icon">
                <a target='_blank' className='socio'  href="https://www.linkedin.com/in/ayush-sharma-891489157/"><img src={navIcon1} alt=""/></a>
                <a target='_blank' className='socio'  href="https://github.com/ayush007-create"><img src={navIcon2} alt=""/></a>
                <a target='_blank' className='socio'  href="https://www.instagram.com/an.unreachable/"><img src={navIcon3} alt=""/></a>
                <Link
                to="connect" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}
                ><button type="button"><span>Let's Connects</span></button></Link>
            </div>
        </span>
        </div>
    </div>
</nav>    
  )
}

Navbar.propTypes = {
}
export default Navbar
