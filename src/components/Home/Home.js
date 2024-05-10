import React from "react";
import "./Home.css";
function Home() {
  return (
    <div>
      <section className="home active section" id="Home">
        <div className="container">
          <div className="row">
            <div className="home-info padd-15">
              {/* <h3 className="hello">
                Hello, my name is <span className="name">Hamza Sajid Jadoon </span>
              </h3> */}
              <h3 className="my-profession">
     <span className="hello">Senior Mobile App & Web App Developer | React Native | React | MERN Stack</span>
              </h3>
              <p>
              Accomplished mobile app developer with nearly
3 years of experience in React Native,
specializing in creating superior cross-platform
applications. Skilled in React, I've extended my
expertise to include the MERN stack, enhancing
my capabilities in both frontend and backend
development. My technical progression allows
me to deliver comprehensive full-stack
solutions that integrate seamless functionality
with engaging aesthetics. Dedicated to turning
innovative ideas into elegantly designed, high performance applications and websites.

                <br />
                {/* <span>Developer at: </span>
                <a href="#" className="developer-at">
                  OCTALOOP TECHNOLOGIES
                </a> */}
              </p>
              <a href="\HamzaSajidJadoonCV.pdf" className="btn hire-me">
                Download CV
              </a>
            </div>
            <div className="home-img padd-15">
              <img src="public\Images\mypic3.PNG" alt="pic" srcset="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
