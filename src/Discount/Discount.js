import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Discount/Discount.css";
import {
  faPiggyBank,
  faPlaneDeparture,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";

export default function Discount() {
  return (
    <div className="discount-hero">
      <div className="discount-bg-img">
        <img src="https://khloudfoods.com/cdn/shop/files/HP-Group-Shot-Desktop_1c1fc463-32b7-43a6-9ddf-c001cb991a02.jpg?v=1768320455&width=2880" />
      </div>
      <div className="discount-text-overlay">
        <h1>
          STOCK UP & SAVE <br /> 10% ON KHLOUD
        </h1>
        <p style={{ marginBottom: "20px", marginTop: "20px" }}>
          One bag is nerver enough. Subscribe and save <br /> 10% on every order
          --- because your snack stash <br /> should nerver run dry
        </p>
        <div style={{ paddingBottom: "30px" }} className="service__discount">
          <p>
            {" "}
            <FontAwesomeIcon
              icon={faPiggyBank}
              style={{
                fontSize: "1.5rem",
                marginRight: "20px",
              }}
            />
            Save 100% on all subscription orders
          </p>
          <p>
            <FontAwesomeIcon
              icon={faPlaneDeparture}
              style={{ fontSize: "1.5rem", marginRight: "20px" }}
            />
            Free shipping on all orders
          </p>
          <p>
            {" "}
            <FontAwesomeIcon
              icon={faStopwatch}
              style={{ fontSize: "1.5rem", marginRight: "20px" }}
            />
            Pause, swap, or cancel anytime
          </p>
        </div>
        <a className="button">SUBSCRIBE NOW</a>
      </div>
    </div>
  );
}
