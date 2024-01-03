import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
import crslogo from "../img/crslogo.png";

function Home(props) {
  return (
    <>
      <div id="homeBackgroundImage" className="container-fluid">
        <div className="row">
          <div id="homeLeftCol" className="col-xs-12 col-md-4 text-center">
            <img src={crslogo} alt="Campus Recruitment System" />
          </div>
          <div
            id="homeRightCol"
            style={{ marginLeft: "8rem" }}
            className="col-xs-12 col-md-6"
          >
            <div>
              <h1 className="text-center" style={{ fontSize: "1.5rem" }}>
                CAMPUS RECRUITMENT MANAGEMENT SYSTEM
              </h1>
              <p className="textJustify">
                Making talent acquisition easy by minimising paperwork,
                improving communication, and offering a consolidated platform
                for all stakeholders, the CRMS seeks to streamline the college
                recruitment procedure. Employers may find and hire the best
                people for their companies using the CRMS, while educational
                institutions can increase the effectiveness of their placement
                process.
              </p>
            </div>
            <div id="homeAuthButtons">
              <Link
                to={{
                  pathname: "/Authenticator",
                  state: { authMode: "login" },
                }}
              >
                <button
                  style={{ backgroundColor: "#ff5757", borderColor: "#ff5757" }}
                  className="btn btn-warning btn-block"
                >
                  Log In
                </button>
              </Link>
              <Link
                to={{
                  pathname: "/Authenticator",
                  state: { authMode: "signup" },
                }}
              >
                <button className="btn btn-outline-warning btn-block">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
