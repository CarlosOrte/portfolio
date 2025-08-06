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
                Delivering user-centered designs that combine creativity and
                functionality. With experience in creating wireframes,
                prototypes, and high-fidelity designs.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Creating user personas and wireframes.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Developing prototypes using Figma and Adobe XD.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Conducting usability testing and user research.
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
                Specializing in developing responsive and interactive web
                interfaces with modern tools and frameworks, ensuring an
                engaging user experience.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Building responsive websites with HTML, CSS, and JavaScript.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Developing dynamic web applications with React.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Integrating APIs and optimizing website performance.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Maintaining cross-browser compatibility and accessibility.
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
