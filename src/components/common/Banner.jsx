import { React, useEffect, useState } from "react";
import banner1 from "../images/p1/main-foto.png";
import banner2 from "../images/p1/main-foto1.png";
import banner3 from "../images/p1/main-foto2.png";
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Banner() {
  const length = 3;
  var old = length - 1;
  var current = 0;
  const [bannerState, setBannerState] = useState(["show", "hide", "hide"]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setBannerState([
        ...bannerState,
        (bannerState[current] = "show"),
        (bannerState[old] = "hide"),
      ]);
      console.info("Banner changed");

      old = current;
      current++;

      if (current === length) {
        current = 0;
      }
    }, 4000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div className="d-flex align-items-center flex-column" id="banner">
      <a
        className={bannerState[0]}
        style={{ cursor: "pointer" }}
      >
        <img src={banner1} />
      </a>
      <a
        className={bannerState[1]}
        style={{ cursor: "pointer" }}
      >
        <img src={banner2} />
      </a>
      <a
        className={bannerState[2]}
        style={{ cursor: "pointer" }}
      >
        <img src={banner3} />
      </a>
    </div>
  );
}
