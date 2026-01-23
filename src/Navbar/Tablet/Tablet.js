import {
  faAngleDoubleDown,
  faAngleDown,
  faAngleUp,
  faCartShopping,
  faLocationDot,
  faBars,
  faX,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import "../Tablet/Tablet.css";

export default function Tablet() {
  const [isOpenTablet, setIsOpenTablet] = useState(false);
  const [isOpenShopTablet, setIsOpenShopTablet] = useState(false);
  return (
    <>
      {/* Tablet */}
      <nav className="nav-tablet">
        <div className="nav-bars-left-tablet">
          <a
            className="hamburger"
            onClick={() => setIsOpenTablet(!isOpenTablet)}
          >
            <FontAwesomeIcon icon={faBars} size="xl" color="#0757cc" />
          </a>
          <div
            className={`hamburger-subMenu-tablet ${isOpenTablet ? "open" : ""}`}
          >
            <div className="hamburger-subMenu-inner-tablet">
              <div className="hamburger-subMenu-list-tablet">
                <div className="close-button-tablet">
                  <a className="close-tablet">
                    <FontAwesomeIcon
                      className="close-tablet"
                      icon={faX}
                      size="l"
                      onClick={() => {
                        setIsOpenTablet(false);
                        setIsOpenShopTablet(false);
                      }}
                    />
                  </a>
                </div>
                <div className="find-button-tablet">
                  <a className="find-button-hamburger-tablet" href="/find">
                    <FontAwesomeIcon
                      style={{ marginRight: "10px" }}
                      icon={faLocationDot}
                    />
                    Find near you
                  </a>
                </div>
                <div className="section-1-tablet">
                  <div className="shop-protein-popcorn-tablet">
                    <div
                      className="shop-protein-popcorn-angle-tablet"
                      onClick={() => setIsOpenShopTablet(!isOpenShopTablet)}
                    >
                      <p style={{ fontSize: "1.1rem" }}>
                        SHOP PROTEIN POPCORN{" "}
                      </p>
                      <FontAwesomeIcon
                        className="AngleRight-tablet"
                        icon={faAngleRight}
                      />
                    </div>
                    <div
                      className={`shop-protein-popcorn-list-tablet ${isOpenShopTablet ? "open-shop" : ""} `}
                    >
                      <ul>
                        <div className="back-and-close-tablet">
                          <p
                            onClick={() => setIsOpenShopTablet(false)}
                            style={{
                              fontFamily: "var(--main-font)",
                              color: "var(--main-color)",
                            }}
                          >
                            {" "}
                            <FontAwesomeIcon icon={faAngleLeft} />
                            Back
                          </p>
                          <FontAwesomeIcon
                            style={{
                              color: "var(--main-color)",
                            }}
                            className="close-tablet"
                            icon={faX}
                            size="l"
                            onClick={() => {
                              setIsOpenTablet(false);
                              setIsOpenShopTablet(false);
                            }}
                          />
                        </div>
                        <li>
                          <a href="#">Shop All Popcorn</a>
                        </li>
                        <li>
                          <a href="#">Subscribe & Save</a>
                        </li>
                        <li>
                          <a href="#">Variety Pack</a>
                        </li>
                        <li>
                          <a href="#">Cinnamon Roll</a>
                        </li>
                        <li>
                          <a href="#">White Chaddar</a>
                        </li>
                        <li>
                          <a href="#">Sweet & Salty Kettle Corn</a>
                        </li>
                        <li>
                          <a href="#">Olive Oil & Sea Salt</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a href="/why-khloud">WHY KHLOUD ?</a>
                </div>
                <div className="diveder-tablet"></div>
                <div className="section-2-tablet">
                  <ul>
                    <li>
                      <a>OUR STORY</a>
                    </li>
                    <li>
                      <a>FIND IN STORES</a>
                    </li>
                    <li>
                      <a>FAQS</a>
                    </li>
                    <li>
                      <a>SHIPPING & RETURNS</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="logo-tablet">
          <a>Khloud</a>
        </div>
        <div className="header-actions tablet-head-action">
          <a href="/find">
            <FontAwesomeIcon icon={faLocationDot} />
          </a>
          <a href="#">
            <FontAwesomeIcon style={{ fontSize: "1.2rem" }} icon={faUser} />
          </a>
          <a href="#">
            <FontAwesomeIcon
              style={{ fontSize: "1.2rem" }}
              icon={faCartShopping}
            />
          </a>
        </div>
      </nav>
    </>
  );
}
