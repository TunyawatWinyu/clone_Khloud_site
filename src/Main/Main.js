import LogoLoop from "../LogoLoop/LogoLoop";
import "../Main/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWheatAlt } from "@fortawesome/free-solid-svg-icons";

const imageLogos = [
  {
    icon: <FontAwesomeIcon icon={faWheatAlt} size="2px" />,
    alt: "WHOLE GRAIN",
    href: "https://company1.com",
  },
  {
    src: "/logos/company2.png",
    alt: "Company 2",
    href: "https://company2.com",
  },
  {
    src: "/logos/company3.png",
    alt: "Company 3",
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
        style={{ height: "200px", position: "relative", overflow: "hidden" }}
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
    </div>
  );
}
