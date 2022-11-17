import React from 'react';
import '../App.css';

function Banner() {
  return (
    <>
      <section className="top-banner">
        <img id="logo" src="images/sun-text.svg" alt="Logo"></img>
        <img id="logotext" src="images/logotype-colourful.svg" alt="Logo Text"></img>
      </section>
      <section className="content">
        <div className="header">
          <img id="star" src="images/decoration-pink.svg" alt=""></img>
          <h3>Our Story</h3>
          <img id="star" src="images/decoration-orange.svg" 
          alt=""></img>
        </div>
      </section>
    </>
  );
}

export default Banner;