import React from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// import styles
import styles from './styles.module.scss';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
    };
  }

  recordMessage = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // check to make sure all the correct info was provided
    if (name === '') {
      this.setState({
        error: 'Oops! You forgot to add your name.',
      });
    } else if (email === '') {
      this.setState({
        error: 'Oops! You forgot to add your email address.',
      });
    } else if (this.validateEmail(email) === false) {
      this.setState({
        error: 'Oops! This is not a valid email address',
      });
    } else if (message === '') {
      this.setState({
        error: 'Oops! You forgot to add a message.',
      });
    } else if (this.validateEmail(email) === true) {
      // we have all the values we need! let's save it to firebase

      // let's get the date
      const today = new Date();
      const date = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

      // create the message obj  w/ all the correct values and a date
      const messageObj = {
        name,
        email,
        message,
        date,
      };

      // create a new firebase key
      const newMessageKey = firebase.database().ref().push().key;
      // sav the messageObj to the firebase update
      const firebaseUpdates = {
        [`/messages/${newMessageKey}`]: messageObj,
      };
      // update firebase
      firebase.database().ref().update(firebaseUpdates);

      // push to the thank you page
      this.props.history.push('/thanks');
    }
  }

  validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,:\s@`]+(\.[^<>()\[\]\\.,:\s@`]+)*)|(`.+`))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  render() {
    // display the correct error message
    let displayError = null;
    if (this.state.error !== null) {
      displayError = <p className={styles.error}>{this.state.error}</p>;
    }

    return (
      <div className={styles.container} >
        <div className={styles.wrapper} >
          <h1>Let&#39;s Talk!</h1>
          <form>
            <input type="text" id="name" name="name" placeholder="Your Name..." />
            <input type="text" id="email" name="email" placeholder="Your Email..." />
            <textarea id="message" name="message" placeholder="Your Message..." />
            {displayError}
            <input type="submit" value="Send Message" className={styles.btn} onClick={this.recordMessage} />
          </form>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Contact);
