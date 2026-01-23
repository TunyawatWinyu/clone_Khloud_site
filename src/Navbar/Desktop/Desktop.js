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

export default function Desktop() {
  const [isHovered, setIsHovered] = useState(true);
  return (
    <>
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
