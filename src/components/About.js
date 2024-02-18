import React, { Fragment } from 'react';

function About() {
  return (
    <Fragment>
      <div className="col py-3 d-flex align-items-center about-image">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
              <div>
                <h1 className="font-big text-red slide-in-top">About me</h1>
                <hr></hr>
                <p className='slide-in-bottom'>
                Aspiring and dedicated student, who is passionate about exploring various facets of technology and full-stack development . 
                 Eager to kickstart my career by contributing to innovative projects.
                </p>
                <p className='slide-in-bottom'>
                  Skilled in <span className="text-red ls-2">HTML, CSS, Sass, React, Node.js, Express, and MySQL </span> with hands-on experience in projects .
                  
                </p>
                <p className='slide-in-bottom'>
                Currently focusing on expanding my skills with <span className="text-red ls-2">  competitive programming.</span>
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img className="img-fluid" src="../images/About.png" alt="..." ></img>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
