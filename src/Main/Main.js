import LogoLoop from "../LogoLoop/LogoLoop";
import "../Main/main.css";
import ProductChoose from "../ProductChoose/ProductChoose";
import WhyKhloud from "../WhyKhloud/WhyKhloud";
import Discount from "../Discount/Discount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWheatAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const imageLogos = [
  {
    src: "https://cdn-icons-png.flaticon.com/512/135/135250.png",
    alt: "WHOLE GRAIN",
    href: "https://company1.com",
  },
  {
    src: "/logos/company2.png",
    alt: "NON-GMO",
    href: "https://company2.com",
  },
  {
    src: "/logos/company3.png",
    alt: "GLUTEN FREE",
    href: "https://company3.com",
  },
  {
    src: "/logos/company3.png",
    alt: "REAL INGREDIENTS",
    href: "https://company3.com",
  },
  {
    src: "/logos/company3.png",
    alt: "NO SEED OILS",
    href: "https://company3.com",
  },
  {
    src: "/logos/company3.png",
    alt: "PROTEIN PER SERVING",
    href: "https://company3.com",
  },
];

export default function Main() {
  return (
    <div className="main">
      <div className="introduction-product">
        <div className="intro-product-img">
          <img src="https://khloudfoods.com/cdn/shop/files/Truffle-HP-Hero-Desktop-Img_8d252f47-a774-4cfa-b499-f61312aa195f.png?v=1768406260&width=2880" />
          <div className="intro-product-text-ovelay">
            <h1>
              MEET TRUFFLE AND <br />
              WHITE CHEDDAR
            </h1>
            <p>
              Our Truffle and Whote Cheddar Protein Popcorn delivers a pop of
              pure luxury.
            </p>
            <a className="button-shop">SHOP POPCORN</a>
            <a className="button">FIND NEAR YOU</a>
          </div>
        </div>
      </div>
      <div
        style={{ height: "100px", position: "relative", overflow: "hidden" }}
      >
        {/* Basic horizontal loop */}
        <LogoLoop
          logos={imageLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>

      {/* ProductChoose */}
      <ProductChoose />
      <div className="brand-value">
        <div className="brand-value-img">
          <img
            src="https://khloudfoods.com/cdn/shop/files/2ndModuleBackgroundWhiteBGDesktop.png?v=1745283858&width=5760"
            alt="khloud"
          />
          <div className="brand-value-text-overlay">
            <p>
              <span>KHLOUD</span> snacks are packed with good stuff,
              <br /> zero fluff. Made with real ingredients,
              <br /> protein, and no added or artificial flavors,
              <br /> they're as clean as they are delicious
            </p>
          </div>
          <a className="button-our-store">Our Store</a>
        </div>
      </div>

      <WhyKhloud />
      <Discount />
    </div>
  );
}
