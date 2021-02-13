/*import React, { useState } from "react";
import thumb1 from "../image/thumb1.png";
import thumb2 from "../image/thumb2.png";
import thumb3 from "../image/thumb3.png";
import "../App.css";

const Selector1 = () => {

  const [count, setCount] = useState({
    images: [
      "https://freepngimg.com/thumb/coffee/62120-coffee-frappuccino-drink-latte-starbucks-unicorn.png",
      "https://freepngimg.com/thumb/starbucks/77325-frappuccino-drink-chocolate-starbucks-matcha-white.png",
      "https://freepngimg.com/thumb/coffee/62115-tea-coffee-drink-starbucks-latte-free-download-image.png",
    ],

    selectedImage:
      "https://freepngimg.com/thumb/coffee/62115-tea-coffee-drink-starbucks-latte-free-download-image.png",
    in: 0,
  });

  const backgroundStyle = {
    background: `url('${count.selectedImage}')`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };
  const handleClick = () => {
      setCount((prevState)=>{
        if (prevState.in === 2) {
            return {
              in: 0,
              selectedImage:count.images[0],
            };
        }
      })
   
  };
  const handleClick = () => {
    setCount(count.in === 2);
  };
  const handleChange = () => {
    setCount((prevState) => {
      if (prevState.in === 2) {
        return {
          in: 0,
          selectedImage:count.images[0],
        };
      } else {
        return {
          in: prevState.in + 1,
          selectedImage: count.images[prevState.in + 1],
        };
      }
    });
  };

  return (
    <div className="contenedor-change">
      <div key={count.selectedImage}>
        <div style={backgroundStyle} className="wave wave5" />
        <div style={backgroundStyle} className="wave wave4" />
        <div style={backgroundStyle} className="wave wave3" />
        <div style={backgroundStyle} className="wave wave2" />
        <div style={backgroundStyle} className="wave wave1" />
        <div style={backgroundStyle} className="wave wave0" />
      </div>

      <ul className="thumb">
        <li>
          <img onClick={handleChange} src={thumb1} alt="" />
        </li>
        <li>
          <img onClick={handleChange} src={thumb2} alt="" />
        </li>
        <li>
          <img onClick={handleChange} src={thumb3} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default Selector1;*/
