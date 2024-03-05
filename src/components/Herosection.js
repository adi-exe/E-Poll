import React from "react";
import { Link } from "react-router-dom";

const Herosection = () => {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="img1 col-12 col-sm-8 col-lg-6">
            <img
              src="https://img.freepik.com/free-vector/online-electronic-voting_74855-4448.jpg?w=1380&t=st=1709587141~exp=1709587741~hmac=62c3e26bc045c8af160f45cbd22d7293320255eec8fa7e2e4bba0467fbf491b7"
              className="d-block mx-lg-auto img-fluid rounded"
              alt="Bootstrap Themes"
              width={700}
              height={500}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Welcome to E-Polls<br></br>- A Decentralised Voting System
            </h1>
            <p className="lead">
              The Voting System designed to cast vote with the maximum security
              and complete anonymity. The system is based on the latest
              Ethereum-Polygon based Blockchain technology. It will make sure
              that each person is allowed to vote only once.
            </p>
            <div className=" bb d-grid gap-2 d-md-flex justify-content-md-start">
              <Link
                to="/address"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Cast Your Vote{" "}
              </Link>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                tutorial
              </button>
            </div>
            <div className=" bb d-grid gap-2 d-md-flex justify-content-md-start">
              <Link
                to="/register"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Orkes Registration{" "}
              </Link>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                tutorial
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
