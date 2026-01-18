import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../WhyKhloud/WhyKhloud.css";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

export default function WhyKhloud() {
  return (
    <div className="why-khloud-container">
      <div className="why-khloud-section">
        <h1>WHY KHLOUD ?</h1>
      </div>
      <div className="why-khloud-table">
        <div className="title">
          {/* TITLE LEFT */}
          <h1>
            <FontAwesomeIcon
              style={{
                position: "relative",
                right: "20%",
                top: "10%",
                fontSize: "2.5rem",
              }}
              icon={faCircleCheck}
            />
            GOOD STUFF
          </h1>

          {/* TITLE RIGHT */}
          <h1>
            <FontAwesomeIcon
              style={{
                position: "relative",
                right: "20%",
                top: "10%",
                fontSize: "2.5rem",
              }}
              icon={faCircleXmark}
            />
            ZERO FLUFF
          </h1>
        </div>

        {/* LIST */}
        <div className="list">
          <div className="list-container">
            <div className="good-stuff-list">
              <ul>
                <li>
                  <FontAwesomeIcon
                    style={{
                      position: "absolute",
                      left: "32%",
                      fontSize: "2rem",
                    }}
                    icon={faCheck}
                  />
                  simple ingredients you <br /> can pronounce{" "}
                </li>
                <p>...............................................</p>
                <li>
                  <FontAwesomeIcon
                    style={{
                      position: "absolute",
                      left: "32%",
                      fontSize: "2rem",
                    }}
                    icon={faCheck}
                  />
                  naturally-derived,
                  <br /> complete protein{" "}
                </li>
                <p>...............................................</p>
                <li>
                  <FontAwesomeIcon
                    style={{
                      position: "absolute",
                      left: "32%",
                      fontSize: "2rem",
                    }}
                    icon={faCheck}
                  />
                  made with whole
                  <br /> grains{" "}
                </li>
                <p>...............................................</p>
                <li>
                  <FontAwesomeIcon
                    style={{
                      position: "absolute",
                      left: "32%",
                      fontSize: "2rem",
                    }}
                    icon={faCheck}
                  />
                  full of flavor and taste{" "}
                </li>
              </ul>
            </div>
            <div className="zero-fluff-list">
              <ul>
                <li>
                  <FontAwesomeIcon
                    style={{
                      position: "absolute",
                      left: "53%",
                      fontSize: "2rem",
                    }}
                    icon={faX}
                  />
                  no artificial flavors
                  <br /> or colors{" "}
                </li>
                <p>...............................................</p>
                <li>
                  <FontAwesomeIcon
                    style={{
                      position: "absolute",
                      left: "53%",
                      fontSize: "2rem",
                    }}
                    icon={faX}
                  />
                  no fillers or fake
                  <br /> ingredients{" "}
                </li>
                <p>...............................................</p>
                <li>
                  <FontAwesomeIcon
                    style={{
                      position: "absolute",
                      left: "53%",
                      fontSize: "2rem",
                    }}
                    icon={faX}
                  />
                  no unhealthy seed
                  <br /> oils{" "}
                </li>
                <p>...............................................</p>
                <li>
                  <FontAwesomeIcon
                    style={{
                      position: "absolute",
                      left: "53%",
                      fontSize: "2rem",
                    }}
                    icon={faX}
                  />
                  no weird aftertaste{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
