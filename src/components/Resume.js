import React, { Fragment } from 'react'
import { SiCodechef, SiHackerrank, SiLeetcode } from 'react-icons/si';

function Resume() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 bg-dark slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">Keerthana G</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                <div className="col-md-6">
                        
                        <h4 className="ff-jose ls-2">EDUCATION</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">BE - Computer Engineering</h4>
                                <h6 className="blue-label px-2 py-1">2021 - 2025</h6>
                                <p className="m-0">Kongu Engineering College</p>
                                <p>CGPA: 7.79</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">HSC</h4>
                                <h6 className="blue-label px-2 py-1">2020</h6>
                                <p className="m-0">Vani Vidhyalaya Matric Hr.Sec School</p>
                                <p>Grade: 91 %</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">SSLC</h4>
                                <h6 className="blue-label px-2 py-1">2018</h6>
                                <p className="m-0">Vani Vidhyalaya Matric Hr.Sec School</p>
                                <p>Grade: 86 %</p>
                            </li>
                        </ul>

                    </div>
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">Activities</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Executive Member</h4>
                                <h5 className="m-0">Computer Science and Engineering Coding Club</h5>
                                <h6 className="blue-label px-2 py-1">2021 - 2022</h6>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Office Bearer</h4>
                                <h5 className="m-0">Computer Science and Engineering Association</h5>
                                <h6 className="blue-label px-2 py-1">2022 - Present</h6>
                            </li>
                           
                        </ul>
                        <h4 className="ff-jose ls-2">Badges</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Problem Solver -  <img className="img-fluid" src="../images/bronze-batch.png" alt="..." style={{ maxWidth: '5%', height: 'auto' }} ></img>(CodeChef)</h4>           
                                </li>
                                <li>
                                <h4 className="ff-jose my-1 text-red">Daily Streaks -  <img className="img-fluid" src="../images/bronze-batch.png" alt="..." style={{ maxWidth: '5%', height: 'auto' }} ></img>(CodeChef)</h4>
                               
                                
                            </li>
                            
                        </ul>
                        
                    </div>
                  
                </div>

                <hr></hr>
                
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">PROFILE</h4>
                        <h1>
                            <a href="https://www.codechef.com/users/keerthanag2003" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiCodechef className="zoom-on-hover"/>
                            </a> 
                            <a href="https://leetcode.com/keerthanagowrisankar/" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiLeetcode className="zoom-on-hover"/>
                            </a> 
                        </h1>
                    </div>
                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default Resume