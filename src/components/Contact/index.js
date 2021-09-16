import React, { useState } from "react";
import "./contact.css";
import { checkFirstName, checkLastName, checkMessage, validateEmail } from '../../utils/helpers';

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    
    
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "firstName") {
      setFirstName(inputValue);
    } else if (inputType === "lastName") {
      setLastName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();


    if (!validateEmail(email)) {
      setErrorMessage('Please enter correct email address');
      return alert('Please enter a valid email address')
      
    }

    if (!checkFirstName(firstName)) {
      setErrorMessage(
        `Please enter a valid first name`
      );
      return;
    }
    if (!checkLastName(lastName)) {
      setErrorMessage(
        `Please enter a valid last name`
      );
      return;
    }
    if (!checkMessage(message)) {
      setErrorMessage(
        `Please enter a valid message`
      );
      return;
    }
    // Alert the user their first and last name, clear the inputs
    alert(
      `Thanks for your email ${firstName} ${lastName}, Thom Williams will get right back to you...`
    );
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="content-container">
      <h4>Contact Thom Williams direct at: <a href="mailto: thomwilliams1990@gmail.com">thomwilliams1990@gmail.com</a></h4>
      <h4>Or via the following form:</h4>
      <form className="form">
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </section>
  );
}

export default Form;
