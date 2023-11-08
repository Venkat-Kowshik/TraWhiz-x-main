import React from "react";
import Fade from "react-reveal/Fade";
import HomeBanner from "../Components/HomeComponents/HomeBanner";


export const Home = () => {
  return (
    <div>
      <Fade up>
        <HomeBanner />
      </Fade>
 
    </div>
  );
};
