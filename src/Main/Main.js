import LogoLoop from "../LogoLoop/LogoLoop";
import "../Main/main.css";
import ProductChoose from "../ProductChoose/ProductChoose";
import WhyKhloud from "../WhyKhloud/WhyKhloud";
import Discount from "../Discount/Discount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWheatAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Footer from "../Footer/Footer";

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

const storeLogos = [
  {
    id: "target sky blue",
    src: "https://khloudfoods.com/cdn/shop/files/target_sky_blue.svg?v=1747169245&width=4",
    alt: "target sky blue",
    style: "60px",
  },
  {
    id: "Kroger",
    src: "https://khloudfoods.com/cdn/shop/files/Kroger_Freshcart_Logo.png?v=1764106168&width=900",
    alt: "Kroger",
    style: "150px",
  },
  {
    id: "WMT",
    src: "https://khloudfoods.com/cdn/shop/files/WMT_Wordmark_True_Blue.png?v=1764106210&width=900",
    alt: "WMT",
    style: "150px",
  },
  {
    id: "Albertsons",
    src: "https://khloudfoods.com/cdn/shop/files/Albertsons_Blue_Logo.png?v=1764106183&width=900",
    alt: "Albertsons",
    style: "150px",
  },
  {
    id: "Sprouts",
    src: "https://khloudfoods.com/cdn/shop/files/Sprouts_Farmers_Market_Logo_skyblue.png?v=1747169472&width=900",
    alt: "Sprouts",
    style: "150px",
  },
  {
    id: "Wegmans",
    src: "https://khloudfoods.com/cdn/shop/files/Wegmans_Store_Icon_54a12906-6f1f-4a2c-9c84-fbabdf32d0d8.png?v=1764106200&width=900",
    alt: "Wegmans",
    style: "150px",
  },
  {
    id: "Gelson",
    src: "https://khloudfoods.com/cdn/shop/files/Gelson_s_Markets_id1RtCCqOf_0.svg?v=1767905885&width=900",
    alt: "Gelson",
    style: "150px",
  },
];

export default function Main({ qtyProduct, product, onAddProductToCart }) {
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
      <ProductChoose
        product={product}
        onAddProductToCart={onAddProductToCart}
        qtyProduct={qtyProduct}
      />
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

      {/* Why Khloud */}
      <WhyKhloud />

      {/* Discount */}
      <Discount />

      {/* Find store */}
      <div className="find-store-section">
        <h1>
          WE ARE POPPING UP <br /> EVERYWHARE
        </h1>
        <p>Khloud is now at even more retailers</p>
        <a className="button button-find-store">FIND A STORE NEAR YOU</a>
      </div>
      <div className="logo-store">
        {storeLogos.map((img) => {
          return (
            <img
              style={{ width: `${img.style}` }}
              src={img.src}
              alt={img.alt}
              href={img.href}
            />
          );
        })}
      </div>

      {/* snacking-is-looking-up */}
      <div className="snacking-is-looking-up">
        <img src="https://khloudfoods.com/cdn/shop/files/SnackingIsLookingUpDesktop_77cacfee-708a-4497-bdca-a6abfff4cff6.png?v=1748785307&width=2880" />
      </div>
    </div>
  );
}
