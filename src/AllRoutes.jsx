import { Route, Routes } from "react-router";
import React from "react";
import { Home } from "./Pages/Home";

import { DestinationDetails } from "./Pages/DestinationDetails";
import Destinations from "./Pages/Destinations/Destinations";


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/destinations" element={<Destinations />} />

        <Route path="/" element={<Home />}></Route>
        <Route path="/destinations/:id" element={<DestinationDetails />} />
      
      </Routes>
    </div>
  );
};

export default AllRoutes;
