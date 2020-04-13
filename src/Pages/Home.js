import React from "react";
import Typical from "react-typical";

const Home = () => {
  return (
    <div>
      <div className="layout-module--content--3nIku">
        <div>
          <div className="main-module--container--1lrTs">
            <h1>
              <div className="Typist">
                <Typical
                  steps={[
                    "Hello!",
                    2400,
                    "Hey!",
                    2400,
                    "Hi!",
                    2400,
                    "salam!",
                    2400,
                    "hola!",
                    2400,
                    "Hollo",
                    2400,
                  ]}
                  loop={1}
                  wrapper="span"
                />
                <span className="Cursor Cursor--blinking">|</span>
              </div>
            </h1>
            <h2 className="index-module--title--1LAhw">
              I'm Osama
              <span
                role="img"
                aria-label="wave"
                className="index-module--wave--1raQG"
              >
                👋
              </span>
              <br />
              I&nbsp;
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="heart"
                className="svg-inline--fa fa-heart fa-w-16 index-module--heart--2QORB"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                ></path>
              </svg>
              &nbsp;developing software!
              <br />
            </h2>
            <p>
              I am a <strong>software engineer</strong> primarily working on 🌐
              and 📱 apps.
            </p>
            <p>
              I get Network Engineering Cisco Certified IT Network and A
              passionate Full Stack Software Developer, I mostly work with
              <strong> JavaScript (⚛️ React Native &amp; ReactJS)</strong>, but
              also have experience with 🐍 Python and its frameworks
              <strong> Flask</strong>, <strong>Django</strong>, and others.
            </p>
            <p>
              I love contributing in
              <strong>&nbsp;📖 open source communities </strong>and am open for
              any
              <strong>
                &nbsp;👨‍🏫 receive questions and answer them with guidance or any
                other
              </strong>
              &nbsp;which you might need.
            </p>
            <p>
              If that's the case, feel free to&nbsp;
              <a className="main-module--link--2kFqk" href="/contact">
                contact me
              </a>
              &nbsp;or&nbsp;
              <a className="main-module--link--2kFqk" href="/projects">
                know more about my work
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
