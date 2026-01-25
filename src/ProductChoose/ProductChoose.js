import { useState } from "react";
import "../ProductChoose/ProductChoose.css";

const handlerAdddToCart = () => {};

export default function ProductChoose({
  product,
  onAddProductToCart,
  qtyProduct,
}) {
  const [hoverdImgId, setHoveredImgId] = useState(null);
  return (
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
                  <button
                    onClick={() => onAddProductToCart(p, 1)}
                    className="button-add-to-cart"
                  >
                    Add To Cart
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
