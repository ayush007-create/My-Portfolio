import React from 'react'
import PropTypes from 'prop-types'
import portfolio from '../assets/img/portfolio.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
function Footer(props) {
  return (
    <footer className='foot'>
    <div className="row align-items-center">
        <div sm={6} className="col">
            <img id='footimage' src={portfolio} alt="" />
        </div>
        <div sm={6} className="col">
        <div className="social-icon">
                <a className='socio' target='_blank' href="https://www.linkedin.com/in/ayush-sharma-891489157/"><img src={navIcon1} alt=""/></a>
                <a className='socio' target='_blank' href="https://github.com/ayush007-create"><img src={navIcon2} alt=""/></a>
                <a className='socio' target='_blank' href="https://www.instagram.com/an.unreachable/"><img src={navIcon3} alt=""/></a>
            </div>
            <p style={{textAlign:'center', paddingLeft:'140px',paddingTop:'20px', letterSpacing:'0.8px',color:'#B8B8B8'}}>All Rights Reserved</p>
        </div>
    </div>
    </footer>
  )
}

Footer.propTypes = {

}

export default Footer

