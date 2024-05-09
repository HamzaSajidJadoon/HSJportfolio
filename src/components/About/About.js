import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import "../../../src/App.css";

function About() {
  const skillSet = [
    {
      skill: "HTML5/CSS3",
      progress: 70,
    },
    {
      skill: "Bootsrap5/React Bootsrap",
      progress: 80,
    },
    {
      skill: "SASS",
      progress: 65,
    },
    {
      skill: "Javascript",
      progress: 60,
    },
    {
      skill: "ReactJS",
      progress: 55,
    },
    {
      skill: "WordPress",
      progress: 70,
    },
  ];
  const expSet = [
    {
      CompanyName: "Octaloop Technologies",
      myRole: "Lead React Native Developer",
      startDate: "Sep 2023",
      now: "Feb 2024",
    },
    {
      CompanyName: "Octaloop Technologies",
      myRole: "React Native Developer",
      startDate: "July 2022",
      now: "Sep 2023",
    },
    {
      CompanyName: "Maniwebify",
      myRole: "Junior Developer",
      startDate: "Feb 2022",
      now: "June 2022",
    },
  ];
  return (
    <div>
      <div className="main-content">
        <section className="about active section" id="About">
          <div className="container">
            <div className="row">
              <div className="section-title padd-15">
                <h2>About Me</h2>
              </div>
            </div>

            <div className="row">
              <div className="about-content padd-15">
                {/* <!--About Content Section  --> */}
                <div className="row">
                  <div className="about-text padd-15 className= mw-50">
                    <h3>
                      I'm Hamza Sajid Jadoon
                    </h3>
                    <p>
                    I am an experienced mobile app developer with almost three years of expertise in React Native,
                     focused on crafting exceptional cross-platform applications. Proficient in React, 
                     I have also developed skills in the MERN stack, further broadening my proficiency 
                     in both front-end and back-end development. This combination of skills enables me
                      to provide holistic full-stack solutions that merge seamless functionality with
                       compelling design. I am committed to transforming innovative concepts into sophisticated,
                        high-performance applications and websites.
                    </p>
                    {/* <p>
                      A professional Front-End Web Developer, responsibly
                      creating website designs by using coding and markup
                      languages such as HTML5, CSS3, Bootstrap5, SASS JavaScript
                      & Reactjs also hands on experience on wordpress. Now
                      working at
                      <span>
                        <a href="#"> OCTALOOP TECHNOLOGIES</a>
                      </span>
                      , I am applying my expertise in designing user
                      interactions on the web application.
                    </p> */}
                  </div>
                </div>
                {/* <!--About Personal Info and Skills Section  --> */}
                <div className="row">
                  <div className="personal-info padd-15">
                    <div className="row">
                      <div className="info-item padd-15">
                        <p>
                          Birthday : <span>9 Jan 1997</span>
                        </p>
                      </div>
                      <div className="info-item padd-15">
                        {/* <p>
                          Age : <span>23</span>
                        </p> */}
                      </div>
                      <div className="info-item padd-15">
                        <p>
                          Website :
                          <span>
                            <a
                              href="https://github.com/hamzasajidjadoon"
                              target="_blank"
                            >
                              https://github.com/hamzasajidjadoon
                            </a>
                          </span>
                        </p>
                      </div>
                      <div className="info-item padd-15">
                        <p>
                          Email :<span>hamzasajidjadoon1997@gmail.com</span>
                        </p>
                      </div>
                      <div className="info-item padd-15">
                        <p>
                          Degree : <span>BSCS</span>
                        </p>
                      </div>
                      <div className="info-item padd-15">
                        <p>
                          Phone : <span>Dubai: +971581284866</span> <span>Pakistan: +923219595380</span>
                        </p>
                      </div>
                      <div className="info-item padd-15">
                        <p>
                          City : <span>Islamabad</span>
                        </p>
                      </div>
                      <div className="info-item padd-15">
                        <p>
                          Remote Work : <span>Available</span>
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="buttons padd-15">
                        <Link to="/contactPage" className="btn hire-me">
                          Hire Me
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  {/* <!--About Educational Info Section  --> */}
                  <div className="education padd-15">
                    <h3 className="title">Education</h3>
                    <div className="row">
                      <div className="timeline-box padd-15">
                        <div className="timeline shadow-dark">

                                {/* <!-- TimeLine Items --> */}
                                <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-date">
                              <i className="fa fa-calendar"></i>2017 - 2021
                            </h3>
                            <h4 className="timeline-title">
                              Bachelor in Computer science
                            </h4>
                            <p className="timeline-text">
                              Iqra University Islamabad
                            </p>
                          </div>
                      

                          {/* <!-- TimeLine Items --> */}
                          <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-date">
                              <i className="fa fa-calendar"></i>2014 - 2016
                            </h3>
                            <h4 className="timeline-title">
                              Intermediate
                            </h4>
                            <p className="timeline-text">
                             Askria College Saddar Rawalpindi
                            </p>
                          </div>

                        {/* <!-- TimeLine Items --> */}
                        <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-date">
                              <i className="fa fa-calendar"></i>2013
                            </h3>
                            <h4 className="timeline-title">Matriculation</h4>
                            <p className="timeline-text">
                              G.H.S No 3 Abbottabad
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!--About Experience Info Section  --> */}

                  <div className="education padd-15">
                    <h3 className="title">Experience</h3>
                    <div className="row">
                      <div className="timeline-box padd-15">
                        <div className="timeline shadow-dark">
                          {/* <!-- TimeLine Items --> */}
                          {expSet.map((item) => {
                            return (
                              <div className="timeline-item">
                                <div className="circle-dot"></div>
                                <h3 className="timeline-date">
                                  <i className="fa fa-calendar"></i>
                                  {item.startDate} - {item.now}
                                </h3>
                                <h4 className="timeline-title">
                                  {item.CompanyName}
                                </h4>
                                <p className="timeline-text">
                                  <span>Role: </span>
                                  {item.myRole}
                                </p>
                              </div>
                            );
                          })}

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
