import "../Footer/Footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="pre-footer">
          <div className="dots">
            ........................................................................................................
            ........................................................................................................
            ........................................................................................................
            ........................................................................................................
          </div>
          <div className="footer-message">
            <img
              className="heart"
              src="https://khloudfoods.com/cdn/shop/files/Khloud_Icons_Nutritional_Outlined_LowSodium_1_641e1b1b-3ef0-4eb2-a52b-3f4df3a5112c.svg?v=1743791993&width=400"
            />
            <h2>
              FOR THE EVERYDAY MOMENTS <span>THAT</span> MATTER
            </h2>
            <img
              className="signature"
              src="https://khloudfoods.com/cdn/shop/files/KhloeSignatureRGB.svg?v=1745608313&width=400"
            />
          </div>
          <div className="dots">
            ........................................................................................................
            ........................................................................................................
            ........................................................................................................
            ........................................................................................................
          </div>
        </div>
        <div className="footer-container">
          <div className="popcorn-section">
            <ul>
              <p>SHOP POPCORN</p>
              <li>
                <a>Shop All</a>
              </li>
              <li>
                <a>Olive Oil & Sea Salt Protein Popcorn</a>
              </li>
              <li>
                <a>White Cheddar Protein Popcorn</a>
              </li>
              <li>
                <a>Sweet & Salty Kettle Corn Protein Popcorn</a>
              </li>
              <li>
                <a>Khloud Protein Popcorn Variety Pack</a>
              </li>
            </ul>
          </div>
          <div className="about-us-section">
            <ul>
              <p>ABOUT US</p>
              <li>
                <a>Our Story</a>
              </li>
              <li>
                <a>Find in Stores</a>
              </li>
              <li>
                <a>FAQs</a>
              </li>
              <li>
                <a>Shipping & Returns</a>
              </li>
            </ul>
          </div>
          <div className="support-section">
            <ul>
              <p>SUPPORT</p>
              <li>
                <a>Contac Us</a>
              </li>
              <li>
                <a>Manage Plan</a>
              </li>
              <li>
                <a>Privacy Policy</a>
              </li>
              <li>
                <a>Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="social-section">
            <p>SEE WHAT'S POPPIN</p>
            <br />
            <p>
              Subscribe to stay up to <br /> date with Khloud
            </p>
            <form>
              <input
                className="button-input-form"
                type="text"
                Placeholder="Enter Your Email"
              />
              <button className="button-subscribe-form">Subscribe</button>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
}
