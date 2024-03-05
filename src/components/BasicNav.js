import React from "react";
import { Link } from "react-router-dom";
import "./components.css";

function BasicNav() {
  return (
    <>
      <nav id="myheader" className="navbar  py-5 navbar-expand-lg ">
        <div className="container-fluid">
          <a
            style={{
              fontSize: "60px",
              color: "#def2f1",
            }}
            className="head mx-5 navbar-brand "
            href="/"
          >
            E-Polls
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div>
              <Link
                to="/result"
                type="button"
                class="btn1 mx-0 py-2 px-4  btn btn-lg btn-primary"
              >
                Show result
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default BasicNav;
