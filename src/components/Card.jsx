import React from 'react';
import '../App.css';

function Card() {
  return (
        <>
          <div className="header">
            <img id="star" src="images/decoration-pink.svg" alt=""></img>
            <h2>Our Story</h2>
            <img id="star" src="images/decoration-orange.svg" 
            alt=""></img>
          </div>
          <section className="content">
          <p>
            Our story is reminiscent of the 70's and embody the warmth of the Golden State California.
          </p>
        </section>
        </>
  );
}

export default Card;