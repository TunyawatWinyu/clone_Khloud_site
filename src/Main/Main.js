import LogoLoop from "../LogoLoop/LogoLoop";
import "../Main/main.css";
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
  const product = [
    {
      id: 1,
      imgHover:
        "https://khloudfoods.com/cdn/shop/files/Truffle_White_Cheddar_4pk.png?v=1768316496&width=2000",
      imgBase:
        "https://khloudfoods.com/cdn/shop/files/Truffle_White_Cheddar_Front.png?v=1768316493&width=2500",
      title:
        "Truffle and White Cheddar Protein Popcorn (Standard Size) - Shop now at Target ",
      price: 23.99,
    },
    {
      id: 2,
      imgHover:
        "https://khloudfoods.com/cdn/shop/files/Cinnamon-Roll-PDP-2.png?v=1765170021&width=2500",
      imgBase:
        "https://khloudfoods.com/cdn/shop/files/Cinnamon-Roll-PDP-1.png?v=1765170021&width=2500",
      title: "Cinnamon Roll Protein Popcorn (Standard Size) ",
      price: 23.99,
    },
    {
      id: 3,
      imgHover:
        "https://khloudfoods.com/cdn/shop/files/1x1_Popped.png?v=1765244461&width=1250",
      imgBase:
        "https://khloudfoods.com/cdn/shop/files/White_Cheddar_Front.png?v=1765244461&width=2000",
      title: "White Cheddar Protein Popcorn (Standard Size) ",
      price: 23.99,
    },
    {
      id: 4,
      imgHover:
        "https://khloudfoods.com/cdn/shop/files/ProductImages-22.png?v=1765260085&width=2500",
      imgBase:
        "https://khloudfoods.com/cdn/shop/files/Variety_Pack_02_1.png?v=1765260085&width=2500",
      topTitle: "Pack of 6 | $5.99 / bag",
      title: "Protein Popcorn Variety Pack (Standard Size) ",
      price: 35.99,
    },
    {
      id: 5,
      imgHover:
        "https://khloudfoods.com/cdn/shop/files/SSKC_4pk.png?v=1765244072&width=2500",
      imgBase:
        "https://khloudfoods.com/cdn/shop/files/SSKC_Front.png?v=1765244072&width=2500",
      title: "Sweet and Salty Kettle Corn Protein Popcorn (Standard Size) ",
      price: 23.99,
    },
    {
      id: 6,
      imgHover:
        "https://khloudfoods.com/cdn/shop/files/1x1Popped.png?v=1765244244&width=2500",
      imgBase:
        "https://khloudfoods.com/cdn/shop/files/OOSS_Front.png?v=1765244244&width=2500",
      title: "Olive Oil and Sea Salt Protein Popcorn (Standard Size) ",
      price: 23.99,
    },
  ];
  const [hoverdImgId, setHoveredImgId] = useState(null);
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
      <div className="choose-product">
        <div className="choose-product-h1">
          <h1>ENJOY EVERY BITE</h1>
        </div>
        <div className="product">
          <ul>
            {product.map((p) => {
              return (
                <li>
                  <a className="image-box">
                    <img
                      className={p.imgBase ? "" : "imgHovered"}
                      key={p.id}
                      src={hoverdImgId === p.id ? p.imgHover : p.imgBase}
                      onMouseEnter={() => setHoveredImgId(p.id)}
                      onMouseLeave={() => setHoveredImgId(null)}
                    />
                  </a>
                  <div className="title-product">
                    <p style={{ fontSize: "0.9rem" }}>{p.topTitle}</p>
                    <p>{p.title}</p>
                    <div className="price">
                      <p>23,99$</p>
                    </div>
                    <button className="button-add-to-cart">Add To Cart</button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
