import React from "react";
import "./HomeStyling.css";
import homeBannerImage from "../../Assets/icons/homepage2.jpeg";
import { Navigate, useNavigate } from "react-router";

const HomeBanner = () => {
  const navigate = useNavigate();
  return (
    <div className="home-div">
      <div className="container mt-5 mt-sm-5">
        <div className="row gap-5">
          <div className="col-lg-7 col-md-7 col-sm-12">
            <div className="text-section pe-2 mt-lg-0 mt-sm-5">
              <h6 style={{ color: "#0CC0DF", letterSpacing: "2px" }}>
              Get ready to elevate your travel adventures with TraWhiz,
              </h6>
              <h1 className="heading">
              The Ultimate Travel Companion! {" "}
                <span style={{ color: "#0CC0DF" }}>Places.</span>🚀
              </h1>
              <p className="my-3 mb-4 sub">
              Unleash the magic of exploration with personalized recommendations and expert guidance at your fingertips.
              </p>
            </div>
            <div className="search-destinations d-flex">
              <div style={{ background: "#003366" }} className="col-5">
                <label style={{ background: 'whitesmoke',color: "#003366", padding: '10px',borderRadius:'10px'}} htmlFor="">
                  Location👇🏽
                </label>
                <br/> 
                <select
                  onChange={(e) => {
                    navigate("/destinations", {
                      state: { state: e.target.value },
                    });
                  }}
                  style={{ background: "#003366", color: "white", }}
                  className="cities form-select mt-1"
                >
                  <option value="default">-- Choose City --</option>
                  <option value="Kerala">Kerala</option>
                </select>
              </div>
              <div className="col-1 vl"></div>
              <div style={{ background: "#003366" }} className="col-5 ms-4">
                <label style={{  background: 'whitesmoke',color: "#003366", padding: '10px',borderRadius:'10px' }} htmlFor="">
                  Select Date
                </label>
                <br/>
                <input
                  style={{
                    background: "#003366",
                    color: "white",
                    width: "60%",
                  
                  }}
                  type="date"
                  className="form-control mt-1"
                />
              </div>
              <button className="btn py-0">
                <i
                  class="fa-solid fa-magnifying-glass"
                  style={{ color: "Blue", background: "transparent" ,padding:'6px'}}
                ></i>
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 float-endimage-background">
            <div className="image-background">
              <img
                src={homeBannerImage}
                className="banner-image img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
