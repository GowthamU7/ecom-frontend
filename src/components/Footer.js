import React from "react";
import "./Footer.css";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";

function Footer() {
  return (
    <div className="footer">
      <a href="#">
        <button className="top">Back to top</button>
      </a>
      <MDBRow>
        <MDBCol md="6">
          <h5 className="title">BabaalDeal</h5>
          <p className="footer-intro">
            “TechMart” is a full stack interactive B2C e-commerce providing
            users with a platform to buy and review the electronics related
            accessories online which will be built with reactjs for frontend,
            redux for state management, postgres for database and DjangoREST
            framework for backend.
          </p>
        </MDBCol>
        <MDBCol md="3">
        </MDBCol>
        <MDBCol md="3">
          <h5 className="title">Have a qusetion?</h5>
          <ul>
            <li className="list-unstyled">
              {" "}
              <i className="fas fa-school"></i> SEMO computer science.
            </li>
            <li className="list-unstyled">
              <i className="fas fa-user"></i> +1 919 289 9822
            </li>
            <li className="list-unstyled">
              {" "}
              <i className="fas fa-envelope-open"></i> group12@gmail.com
            </li>
          </ul>
        </MDBCol>
      </MDBRow>

      <div className="footer-copyright text-center py-3">
        <MDBContainer className="copyright" fluid>
          &copy; {new Date().getFullYear()} Copyright: group12.
        </MDBContainer>
      </div>
    </div>
  );
}

export default Footer;
