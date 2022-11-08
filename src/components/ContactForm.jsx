import React from 'react';
import '../App.css';

function ContactForm() {
  return (
    <div className="contact">
      <h2>Enquiries</h2>
      <form>
        <label for="fname">First Name: </label>
        <input type="text" id="fname" name="fname" /><br></br>
        <label for="lname">Last Name: </label>
        <input type="text" id="lname" name="lname" /><br></br>
        <div className="vl">
          <label for="email">Email: </label>
          <input type="email" id="email" name="email" /><br></br>
          <label for="subject">Subject: </label>
          <input type="text" id="subject" name="subject" /><br></br>
        </div>
        <label for="message">Message: </label><br></br>
        <textarea id="message" name="message" rows="4" cols="20" />
      </form>
      <button>Submit</button>
    </div>
  );
}

export default ContactForm;