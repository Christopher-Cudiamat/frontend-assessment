"use client";

import React, { useContext } from "react";
import {
  AccordionContext,
  useAccordionButton,
  Accordion as BootstrapAccordion,
  Container,
} from "react-bootstrap";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import "./styles.css";

interface ContextAwareToggleProps {
  children: React.ReactNode;
  eventKey: string;
}

interface Item {
  title: string;
  content: string;
}

interface AccordionProps {
  items: Item[];
  className?: string;
}

const ContextAwareToggle = ({
  children,
  eventKey,
}: ContextAwareToggleProps) => {
  const { activeEventKey } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton(eventKey);
  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      onClick={decoratedOnClick}
      className={`accordion__button ${
        isCurrentEventKey
          ? "accordion__button--active"
          : "accordion__button--not-active"
      }`}
    >
      {children}
      <ChevronDownIcon className="accordion__button-icon" />
    </button>
  );
};

const Accordion = ({ items, className = "" }: AccordionProps) => {
  const [defaultActiveItem] = items;

  return (
    <Container className={className}>
      <BootstrapAccordion
        defaultActiveKey={defaultActiveItem.title}
        className="accordion"
      >
        {items.map((item: Item) => (
          <React.Fragment>
            <ContextAwareToggle eventKey={item.title}>
              {item.title}
            </ContextAwareToggle>
            <BootstrapAccordion.Collapse
              eventKey={item.title}
              className="accordion__collapse "
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: item.content,
                }}
                className="accordion__body"
              />
            </BootstrapAccordion.Collapse>
          </React.Fragment>
        ))}
      </BootstrapAccordion>
    </Container>
  );
};

export default Accordion;
