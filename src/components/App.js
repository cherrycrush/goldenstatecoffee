import React from 'react';
import '../App.css';
import ContactForm from './ContactForm';
import Nav from './Nav';
import Footer from './Footer';
import Banner from './Banner';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Card />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
