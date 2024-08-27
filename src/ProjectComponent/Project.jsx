import React, { Component } from 'react';
import '../ProjectComponent/Project.css';

const projectData = [

  {
    imgSrc: `${process.env.PUBLIC_URL}/img/Screenshot_9-4-2024_133321_ecommerce-ap.netlify.app (1).jpeg`,
    title: 'FreshCart',
    description: 'html | CSS | React',
    githubLink: '#',
    websiteLink: '#'
  },
  {
    imgSrc: `${process.env.PUBLIC_URL}/img/Screenshot 2024-07-22 150642.png`,
    title: 'Modify',
    description: 'html | CSS | JS',
    githubLink: '#',
    websiteLink: '#'
  },
  {
    imgSrc: `${process.env.PUBLIC_URL}/img/Screenshot 2024-01-20 142251.png`,
    title: 'Restaurant',
    description: 'HTML | CSS | JS | Bootstrap',
    githubLink: '#',
    websiteLink: '#'
  },
 
  {
    imgSrc: `${process.env.PUBLIC_URL}/img/Screenshot 2024-01-20 141758.png`,
    title: 'Egyption Party',
    description: 'html | CSS | jquery',
    githubLink: '#',
    websiteLink: '#'
  },
 
  {
    imgSrc: `${process.env.PUBLIC_URL}/img/Screenshot 2024-07-31 124138.png`,
    title: 'Mvc',
    description: 'html | CSS | C#| MVC',
    githubLink: '#',
    websiteLink: '#'
  },
  
  {
    imgSrc: `${process.env.PUBLIC_URL}/img/Screenshot 2024-01-20 135113.png 1 (1).png`,
    title: 'BookMarker',
    description: 'html | CSS | JS',
    githubLink: '#',
    websiteLink: '#'
  }
];

export default class Project extends Component {
    render() {
      return (
        <div className='container pt-5 mt-5 project-width'>
          <div className='text-center pb-2 pt-5 pb-5'>
            <h2>My Recent Works</h2>
            <h1>Projects</h1>
          </div>
          <div className='row   '>
            {projectData.map((project, index) => (
              <div key={index} className='col-md-4 col-sm-10  mb-xl-5 m-sm-auto mb-sm-4   '>
                <div className='project'>
                  <div>
                    <img src={project.imgSrc} alt="Screenshot" />
                  </div>
                  <div>
                    <div className='ms-2'>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    </div>
                   
                    <div className='d-flex justify-content-lg-start   justify-content-around '>
                      <button type="button" className="btn  git ">
                        <a className='text-info' href={project.githubLink}>Github</a>
                      </button>
                      <button type="button" className="btn btn-primary vist ms-4">
                        <a href={project.websiteLink}>Visit Website</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
