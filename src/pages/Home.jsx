import React from "react";

import BannerSlider from "../components/shared/BannerSlider";
import MoviesRecommendations from "../components/MoviesRecommendations";
import LiveEvents from "../components/LiveEvents";

const Home = () => {
  return (
    <div className="w-full">
      <BannerSlider />
      <MoviesRecommendations />
      <LiveEvents />
    </div>
  );
};

export default Home;
