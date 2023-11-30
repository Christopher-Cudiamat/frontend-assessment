import React from "react";
import cards from "../../data/cards.json";
import data from "../../data/data.json";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import CardsSection from "@/components/CardsSection/CardsSection";
import Accordion from "@/components/Accordion/Accordion";
import Tabs from "@/components/Tabs/Tabs";
import Container from "react-bootstrap/Container";
import "./styles.css";

const Home = () => {
  const mobileImage =
    "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4";
  const desktopImage =
    "https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc";

  return (
    <React.Fragment>
      <HeroBanner
        mobileImage={mobileImage}
        desktopImage={desktopImage}
        altText=""
        title="Hello Developer!"
        subtitle="Lorem Ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <CardsSection items={cards} />
      <Container
        as="section"
        className="list-section"
      >
        <Accordion
          items={data}
          className="d-block d-lg-none"
        />
        <Tabs
          items={data}
          className="d-none d-lg-block"
        />
      </Container>
    </React.Fragment>
  );
};

export default Home;
