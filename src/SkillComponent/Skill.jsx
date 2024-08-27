import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import '../SkillComponent/Skill.css';



export default class Skill extends Component {
  render() {
    return (
      <div className='container '>
        <div className='text-center pt-5 mt-5 pb-5'>
          <h2>The skills I have</h2>
          <h1>My Experience</h1>
        </div>
    <div className='row pt-5 justify-content-between d-flex  ex '>
      <div className='col-md-5  col-sm-10  flex-grow-1 text-center skill me-xl-3 mb-sm-1'>
        <h2 className='p-4'>Frontend Development</h2>
        <div className='row d-flex align-content-center justify-content-center col'>
          <div className='col-md-5'>
            <div className='row align-items-start'>
              <div className='col-3 icon'>
                <FontAwesomeIcon icon={faCircleCheck} />
              </div>
              <div className='col-md-5'>
                <h1>HTML</h1>
                <p className='text-center p-0'>Experienced</p>
              </div>
            </div>
          </div>
          <div className='col-md-5'>
            <div className='row align-items-start'>
              <div className='col-3 icon'>
                <FontAwesomeIcon icon={faCircleCheck} />
              </div>
              <div className='col-md-5'>
                <h1>CSS</h1>
                <p className='text-center'>Experienced</p>
              </div>
            </div>
          </div>
          <div className='col-md-5'>
            <div className='row align-items-start'>
              <div className='col-3 icon'>
                <FontAwesomeIcon icon={faCircleCheck} />
              </div>
              <div className='col-md-5'>
                <h1>JS</h1>
                <p className='text-center'>Intermediate</p>
              </div>
            </div>
          </div>
          <div className='col-md-5'>
            <div className='row align-items-start'>
              <div className='col-3 icon'>
                <FontAwesomeIcon icon={faCircleCheck} />
              </div>
              <div className='col-md-5'>
                <h1>React</h1>
                <p className='text-center'>Intermediate</p>
              </div>
            </div>
          </div>
          <div className='col-md-5'>
            <div className='row align-items-start'>
              <div className='col-3 icon'>
                <FontAwesomeIcon icon={faCircleCheck} />
              </div>
              <div className='col-md-5'>
              <h1>Bootstrap</h1>
              <p className='text-center p-0'>Experienced</p>
              </div>
            </div>
          </div>
          <div className='col-md-5'>
            <div className='row align-items-start'>
              <div className='col-3 icon'>
                <FontAwesomeIcon icon={faCircleCheck} />
              </div>
              <div className='col-md-5'>
                <h1>jquery</h1>
                <p className='text-center p-0'>Experienced</p>
              </div>
            </div>
          </div>
         
        </div>
      </div>

      <div className='col-md-5 col-sm-10 col-lg-5 flex-grow-1 text-center skill ms-xl-3'>
        <h2 className='p-4'>Backend Development</h2>
        <div className='row d-flex align-content-center justify-content-center col'>
          <div className='col-md-5'>
            <div className='row align-items-start'>
              <div className='col-3 icon'>
                <FontAwesomeIcon icon={faCircleCheck} />
              </div>
              <div className='col-md-5'>
                <h1>SQL</h1>
                <p className='text-center p-0'>Experienced</p>
              </div>
            </div>
          </div>
          <div className='col-md-5'>
            <div className='row align-items-start'>
              <div className='col-3 icon'>
                <FontAwesomeIcon icon={faCircleCheck} />
              </div>
              <div className='col-md-5'>
                <h1>C#</h1>
                <p className='text-center'>Intermediate</p>
              </div>
            </div>
          </div>
          <div className='col-md-5'>
            <div className='row align-items-start'>
              <div className='col-3 icon'>
                <FontAwesomeIcon icon={faCircleCheck} />
              </div>
              <div className='col-md-5'>
                <h1>shopify</h1>
                <p className='text-center'>Intermediate</p>
              </div>
            </div>
          </div>
          <div className='col-md-5'>
            <div className='row align-items-start'>
              <div className='col-3 icon'>
                <FontAwesomeIcon icon={faCircleCheck} />
              </div>
              <div className='col-md-5'>
              <h1>Asp.net</h1>
              <p className='text-center'>Intermediate</p>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </div>






    );
  }
}
