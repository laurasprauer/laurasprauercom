import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Link from '../link';

import * as styles from './styles.module.scss';

const MAX_CHARACTER_COUNT = 1000;

export const Contact = ({ darkmode }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const saveInput = (e) => {
    setError(null);
    if (e.target.id === 'name') {
      setName(e.target.value);
    } else if (e.target.id === 'email') {
      setEmail(e.target.value);
    }
  };

  const checkCharacterCount = (e) => {
    setError(null);
    setMessage(e.target.value);
    setCharacterCount(e.target.value ? e.target.value.length : 0);
  };

  const validateEmail = (em) => {
    const re =
      /^(([^<>()\[\]\\.,:\s@`]+(\.[^<>()\[\]\\.,:\s@`]+)*)|(`.+`))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(em);
  };

  const submit = (e) => {
    e.preventDefault();

    setError(null);
    let errors = [];

    const nameEl = document.getElementById('name').value;
    const emailEl = document.getElementById('email').value;
    const messageEl = document.getElementById('message').value;

    const nameValue = name ? name : nameEl;
    const emailValue = email ? email : emailEl;
    const messageValue = message ? message : messageEl;

    if (!nameValue || nameValue === '') {
      errors.push('Oops! You forgot to add your name.');
    }

    if (!emailValue || emailValue === '') {
      errors.push('Oops! You forgot to add your email address.');
    } else if (!validateEmail(emailValue)) {
      errors.push('Oops! Your email address is not valid');
    }

    if (!messageValue || messageValue === '') {
      errors.push('Oops! You forgot to add a message.');
    }

    if (messageValue.length > MAX_CHARACTER_COUNT) {
      errors.push(
        `Oops! Your message is too long. Please keep it under ${MAX_CHARACTER_COUNT} characters`
      );
    }

    if (errors.length > 0) return setError(errors);

    setLoading(true);

    const formData = new FormData();
    formData.append('name', nameValue);
    formData.append('email', emailValue);
    formData.append('message', messageValue);

    return fetch('https://getform.io/f/8d9a134a-7c2b-4dfb-9ab8-52ac4f4aa8c4', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        setLoading(false);
        setSuccess(true);
      })
      .catch((error) => {
        setLoading(false);
        setError(
          'Oops! Something went wrong and your form was not submitted. If you continue to have issues feel free to email me directly at lspraue@gmail.com.'
        );
      });
  };

  // display the character count
  let displayCharacterCount = null;
  if (
    characterCount <= MAX_CHARACTER_COUNT &&
    characterCount > MAX_CHARACTER_COUNT * 0.9
  ) {
    displayCharacterCount = (
      <p className={styles.characterCountWarning}>
        {characterCount} / {MAX_CHARACTER_COUNT}
      </p>
    );
  } else if (characterCount <= MAX_CHARACTER_COUNT) {
    displayCharacterCount = (
      <p className={styles.characterCount}>
        {characterCount} / {MAX_CHARACTER_COUNT}
      </p>
    );
  } else if (characterCount > MAX_CHARACTER_COUNT) {
    displayCharacterCount = (
      <p className={styles.characterCountError}>
        {characterCount} / {MAX_CHARACTER_COUNT}
      </p>
    );
  }

  if (success) {
    return (
      <div className={`${styles.success} ${darkmode ? styles.darkmode : ''}`}>
        <h1>Thanks!</h1>
        <p>
          I received your message and will get back to you as soon as I can.
        </p>
        <p>
          <Link to="/" darkmode={!darkmode}>
            Return to Homepage
          </Link>
        </p>
      </div>
    );
  }

  if (!success) {
    return (
      <div className={`${styles.contact} ${darkmode ? styles.darkmode : ''}`}>
        <h1>Let&apos;s Talk!</h1>
        <form>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onKeyDown={saveInput}
            onBlur={saveInput}
            tabIndex="0"
          />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email Address"
            onKeyDown={saveInput}
            onBlur={saveInput}
            tabIndex="0"
          />
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            onKeyDown={checkCharacterCount}
            onBlur={checkCharacterCount}
            tabIndex="0"
          />
          {displayCharacterCount}
          <button type="submit" onClick={submit} disabled={loading}>
            {loading ? 'Sending Message...' : 'Send Message'}
          </button>
          {error &&
            error.map((er) => {
              return (
                <p key={er} className={styles.error}>
                  {er}
                </p>
              );
            })}
        </form>
      </div>
    );
  }
};

Contact.propTypes = {
  darkmode: PropTypes.bool,
};

Contact.defaultProps = {};

export default Contact;
