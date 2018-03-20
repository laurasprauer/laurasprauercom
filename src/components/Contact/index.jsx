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
          <h1>Let&#39;s Talk!</h1>
          <form>
            {/* <label for="who">Your Name</label> */}
            <input type="text" id="who" name="who" placeholder="Your Name..." />
            {/* <label for="who">Your Email</label> */}
            <input type="text" id="who" name="who" placeholder="Your Email..." />
            {/* <label for="message">Your Message</label> */}
            <textarea id="message" name="message" placeholder="Your Message..." />
            <input type="submit" value="Send Message" className={styles.btn} onClick={this.sendMessage} />
          </form>
        </div>
      </div>
    );
  }
}
