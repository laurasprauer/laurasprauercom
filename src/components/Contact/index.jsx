import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import $ from 'jquery';

// import styles
import styles from './styles.module.scss';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
    };
  }

  handleSuccess = () => {
    // push to the thank you page
    this.props.history.push('/thanks');
  }

  handleError = () => {
    this.setState({
      error: 'Oops! Something went wrong and your form was not submitted. If you continue to have issues feel free to email me directly at lspraue@gmail.com.',
    });
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
      // let's get the date
      const today = new Date();
      const date = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

      const API_URL = 'https://dvgubrw32d.execute-api.us-east-1.amazonaws.com/default/serverless-dev-sendEmail/sendEmail';

      const payload = {
        name,
        email,
        message,
        date,
      };

      $.ajax({
        contentType: 'application/json',
        data: JSON.stringify(payload),
        dataType: 'json',
        type: 'POST',
        url: API_URL,
      })
        .done(() => this.handleSuccess())
        .fail(() => this.handleError());
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
      <div className={styles.container}>
        <div className={styles.wrapper}>
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
