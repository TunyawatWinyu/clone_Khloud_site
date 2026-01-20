import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
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

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(true);
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [isOpenShop, setIsOpenShop] = useState(false);
  return (
    <>
      <div className="top-nav">
        <p>
          Luxury has entered the snack aisle. Truffle and White Cheddar is now
          available at target. <a>Shop Now</a>
        </p>
      </div>

      {/* Mobile */}
      <nav className="nav-mobile">
        <div className="nav-bars-left">
          <a
            className="hamburger"
            onClick={() => setIsOpenMobile(!isOpenMobile)}
          >
            <FontAwesomeIcon icon={faBars} size="xl" color="#0757cc" />
          </a>
          <div className={`hamburger-subMenu ${isOpenMobile ? "open" : ""}`}>
            <div className="hamburger-subMenu-inner">
              <div className="hamburger-subMenu-list">
                <div className="close-button">
                  <a className="close">
                    <FontAwesomeIcon
                      className="close"
                      icon={faX}
                      size="l"
                      onClick={() => {
                        setIsOpenMobile(false);
                        setIsOpenShop(false);
                      }}
                    />
                  </a>
                </div>
                <div className="find-button">
                  <a className="find-button-hamburger" href="/find">
                    <FontAwesomeIcon
                      style={{ marginRight: "10px" }}
                      icon={faLocationDot}
                    />
                    Find near you
                  </a>
                </div>
                <div className="section-1">
                  <div className="shop-protein-popcorn">
                    <div
                      className="shop-protein-popcorn-angle"
                      onClick={() => setIsOpenShop(!isOpenShop)}
                    >
                      <p style={{ fontSize: "1.1rem" }}>
                        SHOP PROTEIN POPCORN{" "}
                      </p>
                      <FontAwesomeIcon
                        className="AngleRight"
                        icon={faAngleRight}
                      />
                    </div>
                    <div
                      className={`shop-protein-popcorn-list ${isOpenShop ? "open-shop" : ""} `}
                    >
                      <ul>
                        <div className="back-and-close">
                          <p
                            onClick={() => setIsOpenShop(false)}
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
                              marginRight: "30px",
                              color: "var(--main-color)",
                            }}
                            className="close"
                            icon={faX}
                            size="l"
                            onClick={() => {
                              setIsOpenMobile(false);
                              setIsOpenShop(false);
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
                <div className="diveder"></div>
                <div className="section-2">
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
        <div className="logo-mobile">
          <a>Khloud</a>
        </div>
        <div className="header-actions mobile-head-action">
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
      {/* Tablet */}
      <nav className="nav-tablet">
        <div className="nav-bars-left-tablet">
          <a
            className="hamburger"
            onClick={() => setIsOpenMobile(!isOpenMobile)}
          >
            <FontAwesomeIcon icon={faBars} size="xl" color="#0757cc" />
          </a>
          <div
            className={`hamburger-subMenu-tablet ${isOpenMobile ? "open" : ""}`}
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
                        setIsOpenMobile(false);
                        setIsOpenShop(false);
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
                      onClick={() => setIsOpenShop(!isOpenShop)}
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
                      className={`shop-protein-popcorn-list-tablet ${isOpenShop ? "open-shop" : ""} `}
                    >
                      <ul>
                        <div className="back-and-close-tablet">
                          <p
                            onClick={() => setIsOpenShop(false)}
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
                              marginRight: "30px",
                              color: "var(--main-color)",
                            }}
                            className="close-tablet"
                            icon={faX}
                            size="l"
                            onClick={() => {
                              setIsOpenMobile(false);
                              setIsOpenShop(false);
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

      {/* Desktop */}
      <nav className="nav-desktop">
        <div className="nav-left">
          <div className="nav-item--has-submenu">
            <span
              onMouseEnter={() => setIsHovered(false)}
              onMouseLeave={() => setIsHovered(true)}
            >
              shop protein popcorn
              <FontAwesomeIcon
                className={`icon ${isHovered ? "flipped" : ""}`}
                style={{ marginLeft: "10px" }}
                icon={faAngleUp}
              />
            </span>
            <div className="subMenu">
              <div className="subMenu-inner">
                <div className="subMenu-list">
                  <ul>
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
                <div className="subMenu-img">
                  <img src="https://khloudfoods.com/cdn/shop/files/image_571.png?v=1759863359&width=1600" />
                  <div className="overlay-text">
                    <p>
                      <span>Subscribe and seve 10%</span> <br />
                      <br />
                      Never run out of Khloud
                    </p>
                    <a href="#">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="why-khloud" href="#">
            Why khloud?
          </a>
        </div>

        <div className="Logo">
          <a>Khloud</a>
        </div>
        <div className="header-actions">
          <a className="button" href="#">
            <FontAwesomeIcon
              style={{ marginRight: "10px" }}
              icon={faLocationDot}
            />
            Find near you
          </a>
          <a href="#">
            <FontAwesomeIcon style={{ fontSize: "1.5rem" }} icon={faUser} />
          </a>
          <a href="#">
            <FontAwesomeIcon
              style={{ fontSize: "1.5rem" }}
              icon={faCartShopping}
            />
          </a>
        </div>
      </nav>
    </>
  );
}
