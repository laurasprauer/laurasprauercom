import React from 'react';

// import styles
import styles from './styles.module.scss';

export default class Contact extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  sendMessage = (e) => {
    e.preventDefault();
    console.log('send email');
  }

  render() {
    return (
      <div className={styles.container} >
        <div className={styles.wrapper} >
          <h1>Contact</h1>
          <form>
            {/* <label for="who">Who Are You?</label> */}
            <input type="text" id="who" name="who" placeholder="Name" />
            {/* <label for="message">What Would You Like To Talk About</label> */}
            <textarea id="message" name="message" placeholder="Your message..." />
            <input type="submit" value="Send Message" className={styles.btn} onClick={this.sendMessage} />
          </form>
        </div>
      </div>
    );
  }
}
