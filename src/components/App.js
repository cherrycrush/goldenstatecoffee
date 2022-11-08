import React from 'react';
import '../App.css';
import ContactForm from './ContactForm';
import Nav from './Nav';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <section className="top-banner">
        <img id="logo" src="images/sun-text.svg" alt="Logo"></img>
        <img id="logotext" src="images/logotype-colourful.svg" alt="Logo Text"></img>
      </section>
      <section className="content">
        <img className="star" src="images/decoration-pink.svg" alt=""></img>
        <h3>Our Story</h3>
        <img className="star" src="images/decoration-orange.svg" alt=""></img>
        <p>Our story is reminiscent of the 70's and embody the warmth of the Golden State California.</p>
      </section>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
