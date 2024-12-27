import React from "react";
import "./Contact.css";
import { Icon } from "@iconify/react";
function Contact() {
  return (
    <div>
      <div className="main-content">
        <section class="contact active section" id="Contact">
          <div class="container">
            <div class="row">
              <div class="section-title padd-15">
                <h2>Contact Me</h2>
              </div>
            </div>

            <h3 class="contact-title padd-15">Have You Any Questions ?</h3>
            <h4 class="contact-sub-title padd-15">I'M AT YOUR SERVICES</h4>

            <div class="row">
              {/* <!-- =======Contact Info Item Start --> */}
              <div class="contact-info-item padd-15">
                <div class="icon">
                  <i class="fa fa-phone"> </i>
                </div>
                <h4>Call Me</h4>
                <p>Pakistan: +92 3219595380</p>
              </div>
              {/* <!-- =======Contact Info Item End --> */}

              {/* <!-- =======Contact Info Item Start --> */}
              <div class="contact-info-item padd-15">
                <div class="icon">
                  {/* <i class="fa fa-map-marker"> </i> */}
                  <i class="fa fa-linkedin"> </i>
                </div>
                <h4>LinkedIn</h4>
                <p>
                  <a href="https://www.linkedin.com/in/hamzasajidjadoon/" target="_blank">My LinkedIn Profile</a>
                </p>
              </div>
              {/* <!-- =======Contact Info Item End --> */}

              {/* <!-- =======Contact Info Item Start --> */}
              <div class="contact-info-item padd-15">
                <div class="icon">
                  <i class="fa fa-envelope"> </i>
                </div>
                <h4>Email</h4>
                <p>hamzasajidjadoon1997@gmail.com</p>
              </div>
              {/* <!-- =======Contact Info Item End --> */}

              {/* <!-- =======Contact Info Item Start --> */}
              <div class="contact-info-item padd-15">
                <div class="icon">
                  <i class="fa fa-globe-europe"> </i>
                </div>
                <h4>GitHub</h4>
                <p>
                  <a href="https://github.com/hamzasajidjadoon" target="_blank">
                   My GitHub Profile
                  </a>
                </p>
              </div>
              {/* <!-- =======Contact Info Item End --> */}
            </div>

            <h3 class="contact-title padd-15">SEND ME AN EMAIL</h3>
            <h4 class="contact-sub-title padd-15">
              I'M VERY RESPONSIVE TO MESSAGES
            </h4>

            {/* <!-- =======Contact Form --> */}

            <div class="contact-form padd-15">
              <form>
                <div class="row">
                  <div class="form-item col-6 padd-15">
                    <div class="form-group">
                      {/* <!-- name --> */}
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="Name"
                      />
                    </div>
                  </div>

                  {/* <!-- Email --> */}
                  <div class="form-item col-6 padd-15">
                    <div class="form-group">
                      <input
                        type="email"
                        name="user_email"
                        class="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>

                {/* <!-- Subject --> */}
                <div class="row">
                  <div class="form-item col-12 padd-15">
                    <div class="form-group">
                      <input
                        type="text"
                        name="subject"
                        class="form-control"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                </div>

                {/* <!-- Message --> */}
                <div class="row">
                  <div class="form-item col-12 padd-15">
                    <div class="form-group">
                      <textarea
                        name="message"
                        class="form-control"
                        id=""
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                </div>
                {/* <!-- Submit Button --> */}
                <div class="row">
                  <div class="form-item col-12 padd-15">
                    <div class="form-group">
                      <button type="submit" class="btn">
                        Send Message
                      </button>

                       {/* Send Email Button */}
                {/* <div className="row">
                  <div className="form-item col-12 padd-15">
                    <div className="form-group">
                      <a
                        href="mailto:hamzasajidjadoon1997@gmail.com?subject=Contact%20Message&body=Hello%20Hamza,%20I%20have%20a%20question%20for%20you."
                        className="btn"
                      >
                        Send Message
                      </a>
                    </div>
                  </div>
                </div> */}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
