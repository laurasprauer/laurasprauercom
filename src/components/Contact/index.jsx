import React from 'react';
import PropTypes from 'prop-types';
import AWS from 'aws-sdk';
import { withRouter } from 'react-router-dom';

// import styles
import styles from './styles.module.scss';

// Initialize the Amazon Cognito credentials provider
AWS.config.update({
  region: 'us-east-1',
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:158b53a7-e63d-4a83-bf24-d46f748f2ba7',
  }),
});

const docClient = new AWS.DynamoDB.DocumentClient();

const MAX_CHARACTER_COUNT = 500;

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      characterCount: 0,
      name: '',
      email: '',
      message: '',
    };
  }

  checkCharacterCount = () => {
    setTimeout(() => {
      // don't hate me cuz I'm beautiful
      const message = document.getElementById('message').value;

      this.setState({
        message,
        characterCount: message.length,
      });
    });
  }

  saveInput = (e) => {
    if (e.target.id === 'name') {
      this.setState({
        name: e.target.value,
      });
    } else if (e.target.id === 'email') {
      this.setState({
        email: e.target.value,
      });
    }
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

    const { name } = this.state;
    const { email } = this.state;
    const { message } = this.state;

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
        error: 'Oops! Your email address is not valid',
      });
    } else if (message === '') {
      this.setState({
        error: 'Oops! You forgot to add a message.',
      });
    } else if (message.length > MAX_CHARACTER_COUNT) {
      this.setState({
        error: 'Oops! Your message is too long. Please keep it under 500 characters',
      });
    } else if (this.validateEmail(email) === true) {
      // let's get the date
      const today = new Date();
      const date = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

      const payload = {
        TableName: 'laurasprauer-contact',
        Item: {
          name,
          email,
          message,
          date,
        },
      };

      docClient.put(payload, (err) => {
        if (err) {
          this.handleError();
        } else {
          this.handleSuccess();
        }
      });
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

    // display the character count
    let displayCharacterCount = null;
    if (this.state.characterCount <= MAX_CHARACTER_COUNT && this.state.characterCount > MAX_CHARACTER_COUNT * 0.9) {
      displayCharacterCount = <p className={styles.characterCountWarning}>{this.state.characterCount} / {MAX_CHARACTER_COUNT}</p>;
    } else if (this.state.characterCount <= MAX_CHARACTER_COUNT) {
      displayCharacterCount = <p className={styles.characterCount}>{this.state.characterCount} / {MAX_CHARACTER_COUNT}</p>;
    } else if (this.state.characterCount > MAX_CHARACTER_COUNT) {
      displayCharacterCount = <p className={styles.characterCountError}>{this.state.characterCount} / {MAX_CHARACTER_COUNT}</p>;
    }

    // should the button be disabled?
    let btn = <input type="submit" value="Send Message" className={styles.btn} onClick={this.recordMessage}/>;

    if (!(this.state.name && this.state.email && this.state.message && this.state.characterCount <= MAX_CHARACTER_COUNT)) {
      btn = <input type="submit" value="Send Message" className={styles.disableBtn} onClick={this.recordMessage}/>;
    }

    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1>Let&#39;s Talk!</h1>
          <form className={styles.formContainer} onSubmit={(e) => { e.preventDefault(); }}>
            <input type="text" id="name" name="name" placeholder="Your Name..." onKeyDown={this.saveInput} onBlur={this.saveInput} tabIndex="0" />
            <input type="text" id="email" name="email" placeholder="Your Email..." onKeyDown={this.saveInput} onBlur={this.saveInput} tabIndex="0" />
            <textarea id="message" name="message" placeholder="Your Message..." onKeyDown={this.checkCharacterCount} onBlur={this.checkCharacterCount} tabIndex="0" />
            {displayCharacterCount}
            {displayError}
            {btn}
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
