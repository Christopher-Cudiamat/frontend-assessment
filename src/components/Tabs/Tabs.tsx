"use client";

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import "./styles.css";

interface Item {
  title: string;
  content: string;
}

interface TabsProps {
  items: Item[];
  className?: string;
}

const Tabs = ({ items, className = "" }: TabsProps) => {
  const [defaultActiveItem] = items;
  return (
    <Container className={className}>
      <Tab.Container
        id="desktop-tab"
        defaultActiveKey={defaultActiveItem.title}
      >
        <Row className="tabs">
          <Col lg={12}>
            <Nav className="tabs__nav">
              {items.map((item: Item) => (
                <Nav.Item className="tabs__nav-item">
                  <Nav.Link
                    eventKey={item.title}
                    className="tabs__nav-link"
                  >
                    {item.title}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col lg={12}>
            <Tab.Content className="tabs__nav-content">
              {items.map((item: Item) => (
                <Tab.Pane
                  eventKey={item.title}
                  dangerouslySetInnerHTML={{
                    __html: item.content,
                  }}
                  className="tabs__nav-pane"
                />
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Tabs;
