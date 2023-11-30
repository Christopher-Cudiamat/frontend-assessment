import HeroBanner from "@/components/HeroBanner/HeroBanner";
import React from "react";

const Home: React.FC = () => {
  const mobileImage = "https://via.placeholder.com/600x600";
  const desktopImage = "https://via.placeholder.com/1920x650";

  return (
    <React.Fragment>
      <HeroBanner
        mobileImage={mobileImage}
        desktopImage={desktopImage}
        altText=""
        title="Hello Developer!"
        subtitle="Lorem Ipsum dolor sit amet, consectetur adipiscing elit"
      />
    </React.Fragment>
  );
};

export default Home;
