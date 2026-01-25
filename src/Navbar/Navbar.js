import Tablet from "./Tablet/Tablet";
import Mobile from "./Mobile/Mobile";
import Desktop from "./Desktop/Desktop";

import "./navbar.css";

export default function Navbar({
  qtyProduct,
  setQtyProduct,
  product,
  cart,
  onUpdateCartQty,
}) {
  return (
    <>
      <div className="top-nav">
        <p>
          Luxury has entered the snack aisle. Truffle and White Cheddar is now
          available at target. <a>Shop Now</a>
        </p>
      </div>

      <Mobile />
      <Tablet />
      <Desktop
        qtyProduct={qtyProduct}
        setQtyProduct={setQtyProduct}
        product={product}
        cart={cart}
        onUpdateCartQty={onUpdateCartQty}
      />
    </>
  );
}
