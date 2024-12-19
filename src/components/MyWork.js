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
      title: "Spese",
      images: ["../portfolio-images/Spese1.png","../portfolio-images/Spese2.png"],
      description: "Spese is an Expense Tracker web application designed to help users track and manage their expenses efficiently. It allows users to categorize their expenses and monitor spending within specific categories. Users can also track their expenses by day, month, and year. It has been developed using React.js and SCSS for the front-end, Node.js with Express.js for the server, and MySQL as the database.",
      sourceLink: "https://github.com/Keerthanagowrisankar2003/Expenditure-calculator"
    },
    {
      title: "WeBlog",
      images: ["../portfolio-images/Blog1.jpg", "../portfolio-images/Blog2.jpg", "../portfolio-images/Blog3.jpg"],
      description: "The Weblog Project is a frequently updated website designed for sharing personal commentary or business content. This platform allows bloggers to share information, opinions, and updates on various topics. Users can view other people's posts and contribute their own ideas on specific topics. It has been developed using React.js and SCSS for the front-end, with Node.js and Express.js for the back-end server, and MySQL as the database.",
      sourceLink: "https://github.com/Keerthanagowrisankar2003/Blog"
    },
    {
      title: "Internet Speed Test Website",
      images: ["../portfolio-images/Internet_Speed_Test.png"],
      description: "The Internet Speed Test Website is a web-based project where users can test their internet connection speed and view metrics like upload speed, download speed, and latency. It has been developed using React.js and SCSS for the front-end and Node.js with Express.js for the back-end.",
      sourceLink: "https://github.com/Keerthanagowrisankar2003/Internet-Speed-Test"
    },
    {
      title: "Event Management System",
      images: ["../portfolio-images/Event1.jpg", "../portfolio-images/Event2.jpg", "../portfolio-images/Event3.jpg", "../portfolio-images/Event4.jpg"],
      description: "The Event Management System is web-based project where students can gain information about the upcoming events within our college .It has been developed using React Js,CSS for front-end  and flask - a pythom framework for backend.",
      sourceLink: "https://github.com/INIKA-N/agile-projects"
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
