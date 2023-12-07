import React from "react";

//Components
import Image from "../../components/Image";
import MapComp from "./MapComp";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="item-1">
          <MapComp />
        </div>
        <Image />
      </div>
    </>
  );
};

export default Home;
