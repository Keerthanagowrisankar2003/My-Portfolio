import React, { Fragment, useState } from 'react';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { AiFillGithub } from 'react-icons/ai';
import './MyWork.css';

function MyWork() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleProjectHover = (index) => {
    setHoveredProject(index);
  };

  const projects = [
    {
      title: "WeBlog",
      images: ["../portfolio-images/Blog1.jpg", "../portfolio-images/Blog2.jpg", "../portfolio-images/Blog3.jpg"],
      description: "The Weblog Project is a frequently updated web page used for personal commentary or business content.This site allows Bloggers to share information, opinions, and updates on various topics. The users can also view  other people's posts and also they can post their own ideas on a particular topic.It has been developed using React Js and scss for frontend and Node Js for server and MySQL for Backend.",
      sourceLink: "https://github.com/Keerthanagowrisankar2003/Blog"
    },
    {
      title: "Spese",
      images: ["../portfolio-images/Spese1.png","../portfolio-images/Spese2.png"],
      description: "Spese is a Expense Tracker Web application designed to help users track and manage their expenses efficiently. It allows users to categorize their expenses. The users can track the expenses on a particular category they have spent.They can also track the expense on a particular day,month and year.It has been developed using React Js and SCSS for front-end, Node Js for server and MySQL for backend",
      sourceLink: "https://github.com/Keerthanagowrisankar2003/Expenditure-calculator"
    },
    {
      title: "Event Management System",
      images: ["../portfolio-images/Event1.jpg", "../portfolio-images/Event2.jpg", "../portfolio-images/Event3.jpg", "../portfolio-images/Event4.jpg"],
      description: "The Event Management System is web-based project where students can gain information about the upcoming events within our college .It has been developed using React Js,CSS for front-end  and flask - a pythom framework for backend.",
      sourceLink: "https://github.com/INIKA-N/agile-projectsL"
    }
  ];
  

  return (
    <Fragment>
      <div className="col p-4">
        <div className="p-4 slide-in-top">
          <div className="row">
            <div className="col-6">
              <h2 className="ff-jose fw-bold ls-2">Something I've Built</h2>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`col-md-4 text-center my-2 project-item ${hoveredProject === index ? 'expanded' : ''}`}
                onMouseEnter={() => handleProjectHover(index)}
                onMouseLeave={() => handleProjectHover(null)}
              >
                <div id={`carouselExampleControls${index + 1}`} className="carousel slide my-1" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    {project.images.map((image, imageIndex) => (
                      <div key={imageIndex} className={`carousel-item ${imageIndex === 0 ? 'active' : ''}`}>
                        <img src={image} className="d-block w-100" alt={`Slide ${imageIndex + 1}`} />
                      </div>
                    ))}
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleControls${index + 1}`} data-bs-slide="prev">
                    <GrPrevious />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleControls${index + 1}`} data-bs-slide="next">
                    <GrNext />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <h5 className="ff-jose my-1">{project.title}</h5>
                <div className={`project-description ${hoveredProject === index ? 'show' : ''}`}>
                  <p>{project.description}</p>
                </div>
                <a href={project.sourceLink} className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank" rel="noreferrer">
  <AiFillGithub /> Source Code
</a>

              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
  
}

export default MyWork;
