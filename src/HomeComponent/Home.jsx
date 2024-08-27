import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons'; 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons'; 
import Navbar from '../NavbarComponent/Navbar';
import About from '../AboutComponent/About';
import Skill from '../SkillComponent/Skill';
import Project from '../ProjectComponent/Project';
import { ContactUs } from '../EmailComponent/Send';
import '../HomeComponent/Home.css';



export default class Home extends Component {
  render() {
    return (
      <div className="  home  pb-4">
        <div className='text-center  container   my-name '>
          <h2 className='text-white'>Hello, I'm</h2>
          <h1>Mahmoud Hamaad</h1>
          <h3>Full Stack Developer</h3>
          <div>
            <button type="button" className="btn btn-outline-primary me-3 text-prinary ">Download Cv</button>
            <button type="button" className="btn btn-outline-info bg-info text-dark ms-3  ">Contact Me</button>
          </div>
          <div className='d-flex justify-content-between w-100 '>
        

          <div className=' d-flex social-icon'>
            <a href="">            <FontAwesomeIcon icon={faFacebook} className='social-icon-item' /> {/* Use FontAwesomeIcon */}            </a>
            <a href="">
            <FontAwesomeIcon icon={faSquareTwitter} className='social-icon-item' /> 
            </a>
            <a href="">
            <FontAwesomeIcon icon={faLinkedin} className='social-icon-item' /> 
            </a>
            <a href="">
            <FontAwesomeIcon icon={faGooglePlusG} className='social-icon-item' />           
            </a>
            </div>

            <div className='img'>
            <img src={process.env.PUBLIC_URL + '/img/unnamed (1).jpg'} alt="Description of your image" />
          </div>
            <div className=' ms-auto Scroll '>
              <a href="" className='bg-denger'>Scroll down</a>
            </div>
            </div>

        </div>
        <About/>
        <Skill/>
        <Project/>
        <ContactUs/>
        <Navbar />


      </div>
    );
  }
}
