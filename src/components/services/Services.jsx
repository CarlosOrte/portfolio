import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>
      <div className="services__container container grid">
        {/* UX/UI Design Service */}
        <div className="services__content">
          <div>
            <i className="uil uil-vector-square services__icon"></i>
            <h3 className="services__title">
              UX/UI <br /> Design
            </h3>
          </div>
          <span
            className="services__button"
            onClick={() => {
              toggleTab(1);
            }}
          >
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">UX/UI Design</h3>
              <p className="services__modal-description">
                [cite_start]I am a recent graduate with certifications in user experience, looking for opportunities to apply my skills on real projects[cite: 13, 24]. [cite_start]I create functional and human-centered solutions[cite: 15].
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    [cite_start]Creation of UX/UI, wireframes and web redesign[cite: 17].
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    [cite_start]Design solutions for innovative projects[cite: 15].
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    [cite_start]Implementation of artificial intelligence to optimize design and creative processes[cite: 14].
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Frontend Development Service */}
        <div className="services__content">
          <div>
            <i className="uil uil-browser services__icon"></i>
            <h3 className="services__title">
              Frontend <br /> Development
            </h3>
          </div>
          <span
            onClick={() => {
              toggleTab(2);
            }}
            className="services__button"
          >
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Frontend Development</h3>
              <p className="services__modal-description">
                [cite_start]As a recent graduate, I am specialized in responsive and interactive web interfaces[cite: 13, 27]. [cite_start]I have experience in creating websites with WordPress and developing dynamic web applications with React[cite: 17, 29].
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    [cite_start]Responsive websites with HTML, CSS, and JavaScript[cite: 29].
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    [cite_start]Developing with React[cite: 29].
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    [cite_start]Content creation for social media and web pages[cite: 17].
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Backend Development Service */}
        <div className="services__content">
          <div>
            <i className="uil uil-database services__icon"></i>
            <h3 className="services__title">
              Backend <br /> Development
            </h3>
          </div>
          <span
            onClick={() => {
              toggleTab(3);
            }}
            className="services__button"
          >
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Backend Development</h3>
              <p className="services__modal-description">
                [cite_start]I have a professional certificate in backend development with experience in Django[cite: 29, 31, 32]. I create scalable and functional solutions for web applications.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    [cite_start]Server-side development with Django[cite: 29].
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    API integration and database management.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    [cite_start]AI and Prompting to optimize development processes[cite: 14, 39].
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;