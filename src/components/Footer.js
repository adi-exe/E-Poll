import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer  ">
        <footer className="py-2 my-3">
          <ul className="nav  border-bottom pb-1 mb-1">
            <li>
              <h2>
                doubleSlash<span className="slash">//</span>
              </h2>
            </li>
            <h3>
              Made by : &nbsp;
              <a
                class="link-1"
                href="https://www.linkedin.com/in/aditya-dhanraj-/"
              >
                Aditya &nbsp;
              </a>
              & &nbsp;
              <a href="https://www.linkedin.com/in/sandhya-exe/"> Sandhya</a>
              &nbsp; &copy;
            </h3>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;
