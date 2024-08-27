import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import {faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


import '../AboutComponent/About.css';

export default class About extends Component {
  render() {
    return (
      <div className='container mt-5 pt-5 se '>
        <div className='mt-5 pb-5 mb-5'>
          <div className='text-center'>
            <h2>Get To Know</h2>
            <h1>About Me</h1>
          </div>
          <div className='row pt-5 justify-content-between  justify-content-md-around about'>
            <div className='col-md-4  col-sm-7 justify-content-around'>
              <img src={`${process.env.PUBLIC_URL}/img/my-image2.50d512e51786346454f4.jpg`} alt="Profile" />
            </div>
            <div className='col-md-6 text-center'>
              <div className='row justify-content-around information'>
                <div className='col-md-3 col-sm-4 text-center  flex-grow-1  ms-2 ms-sm-3'>
                  <div className='p-3 icon'>
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </div>
                  <div>
                    <h4>Degree</h4>
                    <p>Bsc.(Hons) Software Engineering (UG)<br/>University of Kelaniya</p>
                  </div>
                </div>
                <div className='col-md-3 col-sm-4 text-center flex-grow-1 ms-lg-4 ms-sm-3'>
                  <div className='p-3 icon'>
                  <FontAwesomeIcon icon={faBookmark} />
                  </div>
                  <div>
                    <h4>Current GPA</h4>
                    <p>Good</p>
                  </div>
                </div>
                <div className='col-md-3 col-sm-6 text-center flex-grow-1 ms-lg-4'>
                  <div className='p-3 icon'>
                  <FontAwesomeIcon icon={faGlobe} />
                  </div>
                  <div>
                    <h4>Domains</h4>
                    <p>Web Developer</p>
                  </div>
                </div>
              </div>
              <div className='col-md-12 col-sm-11  text-white text-start mt-2 myinform  m-sm-auto '>
<p>                I'm full stack Web Developer and Ihave experience in various programming languages, I am eager to contribute to innovative projects and learn from experienced professionals in the industry. I am a quick learner who is always ready to face challenges.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
