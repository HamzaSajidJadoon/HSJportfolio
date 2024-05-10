import { Icon } from "@iconify/react";
import React from "react";
import "./Portfolio.css";
function Portfolio() {
  const projects = [
    {
      id: 0,
      thumbnail: "images/dstreakpic.JPG",
      link: "https://play.google.com/store/apps/details?id=com.drivestreak&hl=as&gl=US",
      name: "DriveStreak",
    },
    {
      id: 1,
      thumbnail: "images/ScorpionYachtImage.JPG",
      link: "https://play.google.com/store/apps/details?id=com.scorpionyacht&hl=as&gl=US",
      name: "Scorpion Yacht",
    },
    {
      id: 2,
      thumbnail: "images/SupervetImage.JPG",
      link: "https://play.google.com/store/apps/details?id=com.myall&hl=as&gl=US",
      name: "Supervet",
    },
    {
      id: 3,
      thumbnail: "images/NexgenImage.JPG",
      link: "",
      name: "Nexgen",
    },
    
  ];

  return (
    <div>
      <div classNameName="main-content">
        <section className="portfolio active section" id="Portfolio">
          <div className="container">
            <div className="row">
              <div className="section-title padd-15">
                <h2>Portfolio</h2>
              </div>
            </div>
            <div className="row">
              <div className="portfolio-heading padd-15">
                <h2>My Projects :</h2>
              </div>
            </div>
            <div className="row">
              {/* <!-- ======= Portfolio Items Start --> */}

              {projects.map((item) => {
                return (
                  <div className="portfolio-item padd-15 ">
                    <div className="portfolio-item-inner shadow-dark ">
                      <div className="portfolio-img ">
                        {/* <img src="\images\pandamax.PNG" alt="" /> */}
                        <img src={item.thumbnail} alt="" />
                      </div>
                      <div className="layer">
                        <div className="mid">
                          <a href={item.link} target="ghj">
                            <Icon
                              icon="ic:outline-open-in-new"
                              color="#ededed"
                              width="48"
                              height="48"
                            />
                          </a>

                          <h2>{item.name}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* <!-- ======= Portfolio Items End --> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Portfolio;
