import React from 'react';
import '../App.css';
import ContactForm from './ContactForm';
import Nav from './Nav';
import Footer from './Footer';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <p>Our story is reminiscent of the 70's and embody the warmth of the Golden State California.</p>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
