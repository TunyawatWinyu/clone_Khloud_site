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

export default function Mobile() {
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [isOpenShop, setIsOpenShop] = useState(false);
  return (
    <>
      {" "}
      {/* Mobile */}
      <nav className="nav-mobile">
        <div className="nav-bars-left-mobile">
          <a
            className="hamburger-mobile"
            onClick={() => setIsOpenMobile(!isOpenMobile)}
          >
            <FontAwesomeIcon icon={faBars} size="xl" color="#0757cc" />
          </a>
          <div
            className={`hamburger-subMenu-mobile ${isOpenMobile ? "open-mobile" : ""}`}
          >
            <div className="hamburger-subMenu-inner-mobile">
              <div className="hamburger-subMenu-list-mobile">
                <div className="close-button-mobile">
                  <a className="close-mobile">
                    <FontAwesomeIcon
                      className="close-mobile"
                      icon={faX}
                      size="l"
                      onClick={() => {
                        setIsOpenMobile(false);
                        setIsOpenShop(false);
                      }}
                    />
                  </a>
                </div>
                <div className="find-button-mobile">
                  <a className="find-button-hamburger-mobile" href="/find">
                    <FontAwesomeIcon
                      style={{ marginRight: "10px" }}
                      icon={faLocationDot}
                    />
                    Find near you
                  </a>
                </div>
                <div className="section-1-mobile">
                  <div className="shop-protein-popcorn-mobile">
                    <div
                      className="shop-protein-popcorn-angle-mobile"
                      onClick={() => setIsOpenShop(!isOpenShop)}
                    >
                      <p style={{ fontSize: "1.1rem" }}>
                        SHOP PROTEIN POPCORN{" "}
                      </p>
                      <FontAwesomeIcon
                        className="AngleRight-mobile"
                        icon={faAngleRight}
                      />
                    </div>
                    <div
                      className={`shop-protein-popcorn-list-mobile ${isOpenShop ? "open-shop-mobile" : ""} `}
                    >
                      <ul>
                        <div className="back-and-close-mobile">
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
                            className="close-mobile"
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
                <div className="diveder-mobile"></div>
                <div className="section-2-mobile">
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
        <div className="logo-mobile-mobile">
          <a>Khloud</a>
        </div>
        <div className="header-actions mobile-head-action-mobile">
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
