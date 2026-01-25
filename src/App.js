import Navbar from "./Navbar/Navbar";
import "./Navbar/navbar.css";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";

import { useState, useEffect } from "react";

const products = [
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
function App() {
  const [cart, setCart] = useState(() => {
    const saveCart = localStorage.getItem("cart");
    return saveCart ? JSON.parse(saveCart) : [];
  });

  const [qtyProduct, setQtyProduct] = useState("");

  const handlerAddProductToCart = (product, qty = 1) => {
    const safeQty = Number(qty);
    setCart((prevCart) => {
      const exist = prevCart.find((item) => item.id === product.id);

      if (exist) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                qty: item.qty + (Number, isNaN(safeQty) ? 1 : safeQty),
              }
            : item,
        );
      }
      return [
        ...prevCart,
        { ...product, qty: Number.isNaN(safeQty) ? 1 : safeQty },
      ];
    });
  };

  const updateCartQty = (id, qty) => {
    const safeQty = Number.isNaN(qty) ? 1 : Math.max(1, qty);

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, qty: safeQty } : item,
      ),
    );
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar
        product={products}
        cart={cart}
        qtyProduct={qtyProduct}
        setQtyProduct={setQtyProduct}
        onUpdateCartQty={updateCartQty}
      />

      {/* Main */}
      <Main
        qtyProduct={qtyProduct}
        setQtyProduct={setQtyProduct}
        product={products}
        onAddProductToCart={handlerAddProductToCart}
      />

      {/* Fotter */}

      <Footer />
    </div>
  );
}

export default App;
