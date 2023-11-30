"use client";

import Link from "next/link";
import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col, Container } from "react-bootstrap";
import "./styles.css";
interface Item {
  id: string;
  image: string;
  text: string;
  link: string;
}
interface CardsSectionProps {
  items: Item[];
}

const CardsSection = ({ items }: CardsSectionProps) => {
  return (
    <Container
      as="section"
      className="cards-section"
    >
      <Row
        as="ul"
        className="cards-section__container"
      >
        {items.map((item: Item) => (
          <Col
            as="li"
            lg={4}
            key={item.id}
            className="cards-section__card-container"
          >
            <Card className="cards-section__card">
              <div className="cards-section__card-image-container">
                <Card.Img
                  variant="top"
                  src={item.image}
                  className="cards-section__card-image"
                />
              </div>
              <Card.Body className="cards-section__card-body">
                <Card.Text className="cards-section__card-text">
                  {item.text}
                </Card.Text>
                <Link
                  href={item.link}
                  className="cards-section__card-button"
                >
                  Read more
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardsSection;
