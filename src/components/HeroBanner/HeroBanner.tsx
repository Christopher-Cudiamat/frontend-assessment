"use client";

import React from "react";
import Image from "next/image";
import "./styles.css";
import useWindowSize from "@/hooks/useWindowSize";
interface HeroBannerProps {
  desktopImage: string;
  mobileImage: string;
  altText: string;
  title: string;
  subtitle: string;
}

const HeroBanner = ({
  desktopImage,
  mobileImage,
  altText,
  title,
  subtitle,
}: HeroBannerProps) => {
  const windowSize = useWindowSize();
  const desktopScreenSize = 1024;

  return (
    <section className="hero-banner">
      <Image
        src={windowSize.width > desktopScreenSize ? desktopImage : mobileImage}
        alt={altText}
        fill
        priority={true}
        className="hero-banner__image"
      />
      <div className="hero-banner__overlay" />
      <div className="hero-banner__title-container">
        <h1 className="hero-banner__title">{title}</h1>
        <h2 className="hero-banner__subtitle">{subtitle}</h2>
      </div>
    </section>
  );
};

export default HeroBanner;
