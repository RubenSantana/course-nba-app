import React from "react";
import NewsSlider from "../widgets/NewsSlider/slider";

const Home = () => (
  <div>
    <NewsSlider
      type="featured"
      start={3}
      amount={6}
      settings={{ dots: true }}
    />
  </div>
);

export default Home;
