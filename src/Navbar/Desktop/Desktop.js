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
import "../Desktop/Desktop.css";

export default function Desktop({
  qtyProduct,
  setQtyProduct,
  product,
  cart,
  onUpdateCartQty,
}) {
  const [isHovered, setIsHovered] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);

  const TotalPrice = (cart) => {
    let totale = 0;
    cart.map((p) => (totale = totale + p.price * p.qty));
    const rounded = Math.round(totale * 100) / 100;
    return rounded;
  };

  const TotaleProductCart = (cart) => {
    let TotaleProduct = 0;
    cart.map((p) => (TotaleProduct = TotaleProduct + p.qty));

    return TotaleProduct;
  };

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
          <a className="cartP" href="#" onClick={() => setCartOpen(!cartOpen)}>
            <FontAwesomeIcon
              style={{ fontSize: "1.5rem" }}
              icon={faCartShopping}
            />
          </a>
          <p>{TotaleProductCart(cart)}</p>

          <div className={`cart ${cartOpen ? "open-cart" : ""}`}>
            <ul>
              {cart.map((el) => {
                const price = el.price * el.qty;

                return (
                  <>
                    <li key={el.id}>
                      <div className="product-cart">
                        <div className="left-side">
                          <img src={el.imgBase} alt={el.title} />
                          <p>{el.title}</p>
                        </div>
                        <div className="right-side">
                          <p>{Math.round(price * 100) / 100}$</p>
                          <input
                            type="number"
                            min="0"
                            value={el.qty}
                            onChange={(e) => {
                              const value = Number(e.target.value);
                              onUpdateCartQty(
                                el.id,
                                Number.isNaN(value) ? 1 : value,
                              );
                            }}
                          />
                        </div>
                      </div>
                    </li>
                    <div className="divider"></div>
                  </>
                );
              })}
            </ul>
            <div className="total-in-cart">
              <h3>
                Totale: <span>{TotalPrice(cart)}$</span>
              </h3>
            </div>
            <div className="toCheckOut">
              <button className="btn">CheckOut</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
