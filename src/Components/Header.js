import React, { useState, useEffect } from "react";
import Link from "react-router-dom/Link";
import StarfieldAnimation from "react-starfield-animation";

const Header = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") == ""
      ? "light"
      : localStorage.getItem("theme") == "dark"
      ? "light"
      : "dark"
  );

  useEffect(() => {
    if (theme == "light" || theme == "") {
      document.body.setAttribute("class", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.removeAttribute("class");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleClick = (e) => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div>
      {theme == "light" && (
        <StarfieldAnimation
          numParticles={20}
          alphaFactor={0.5}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: "-1",
          }}
        />
      )}
      <div style={{ marginLeft: "23%" }}>
        <header className="header-module--header--3A712">
          <h1>
            <a
              aria-current="page"
              className="header-module--title--33kOg"
              href="/"
            >
              osama
            </a>
          </h1>
          <Link to="/">
            <label
              className="header-module--menu--c8SGc"
              data-menu-toggle="true"
              htmlFor="hamburger-menu-toggle"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="bars"
                className="svg-inline--fa fa-bars fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                ></path>
              </svg>
            </label>
          </Link>
          <ul className="header-module--nav-list--87D9u">
            <li>
              <Link
                aria-current="page"
                className="header-module--nav-item--1ixk0 header-module--active-nav-item--26N0B"
                to="/"
              >
                <span role="img" aria-label="home">
                  🏠
                </span>
              </Link>
            </li>
            <li>
              <Link className="header-module--nav-item--1ixk0" to="/projects">
                <span role="img" aria-label="projects">
                  🛠️
                </span>
              </Link>
            </li>
            <li>
              <Link className="header-module--nav-item--1ixk0" to="/education">
                <span role="img" aria-label="education">
                  🎓
                </span>
              </Link>
            </li>
            <li>
              <Link className="header-module--nav-item--1ixk0" to="/blog">
                <span role="img" aria-label="blog">
                  ✍️
                </span>
              </Link>
            </li>
            <li>
              <Link className="header-module--nav-item--1ixk0" to="/contact">
                <span role="img" aria-label="contact">
                  ☎️
                </span>
              </Link>
            </li>
            <li>
              <label className="header-module--lightMode--kVtZt">
                <input
                  type="checkbox"
                  className="header-module--darkModeInput--xHVBP"
                  onClick={handleClick}
                />
                <span>
                  {theme == "dark" ? (
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="moon"
                      className="svg-inline--fa fa-moon fa-w-16"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="sun"
                      class="svg-inline--fa fa-sun fa-w-16 "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
                      ></path>
                    </svg>
                  )}
                </span>
                <span className="header-module--invisible--1MGB6">
                  Toggle dark mode
                </span>
              </label>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
};

export default Header;
