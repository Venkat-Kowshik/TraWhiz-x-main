import React from "react";
import logo from "../../Assets/icons/adventour.png";

export const Footer = () => {
  return (
    <div>
      <footer class="footer mt-auto py-3">
        <div class="container mt-4">
          <div className="row g-3">
            <div className="col-lg-6">
              <div className="d-inline-flex">
                <img src={logo} style={{ width: "30px" }} alt="" />
                <h6 className="mt-2 ms-2">TraWhiz</h6>
              </div>
              <p className="sub mt-2">
              TraWhiz is an innovative chatbot designed to enhance the travel experience for users by 
              providing personalized assistance, recommendations, and information during their journeys. 
              This chatbot is specifically tailored for travelers, whether they are planning a trip, 
              navigating a new destination, or seeking travel-related information.
              </p>
            </div>
            <div className="col-lg-2 col-sm-6 col-xs-6 mt-3">
              <h6>Sitemap</h6>
              <div className="footer-links mt-4">
                <p className="sub">Services</p>
                <p className="sub">About Us</p>
                <p className="sub">Bookings</p>
                <p className="sub">Cancellation</p>
              </div>
            </div>
           
            <div className="col-lg-2 col-sm-6 col-xs-6 mt-3">
              <h6>Support</h6>
              <div className="footer-links mt-4">
                <p className="sub">
                  Amrita School of Engineering
                  <br />
                  Kollam
                  <br/>
                  Kerala
                </p>
                <p className="sub">
                  trawhiz@gmail.com <br />
                  +91 9854622521
                </p>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <h6 style={{ fontSize: "14px" }}> ● Instagram ● YouTube</h6>
          </div>
          <hr />
          <div className="row">
            <div className="d-flex justify-content-between">
              <p style={{ color: "#6c9999", fontSize: "12px" }}>
                Ⓒ 2023 TraWhiz All Rights Reserved
              </p>
              <div className="quick-links d-flex gap-4">
                <h6 style={{ fontSize: "14px" }}>Terms & Condition </h6>
                <h6 style={{ fontSize: "14px" }}>Privacy Policy </h6>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
