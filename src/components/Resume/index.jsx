import React from 'react';
// import { Link } from 'react-router-dom';

// import styles
import styles from './styles.module.scss';

import Job from '../Job';

export default class Resume extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timelineHeight: '0px',
    };
  }

  componentDidMount() {
    // we want to wait 1 second before triggering this height in order to create an animation
    setTimeout(() => {
      const height = document.getElementById('timeline-content').clientHeight;
      this.setState({
        timelineHeight: `${height}px`,
      });
    }, 1000);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1>Laura Sprauer</h1>
          <h2>Resume</h2>

          <div className={styles.timelineContainer}>
            <div id="timeline-content" className={styles.timelineContent}>
              <Job
                jobTitle="Lead Front End Engineer"
                companyName="Quotient"
                companyLink="https://www.quotient.com/"
                jobDescription="In the summer of 2018, Ahalogy was acquired by Quotient Technology."
                start="2020"
                end="Present"
              />
              <Job
                jobTitle="JavaScript Developer"
                companyName="Ahalogy"
                companyLink="https://www.ahalogy.com/"
                jobDescription="As a Front End Engineer on the Ahalogy Muse Product team my responsibilities included building new features for both internal and external users based off provided UI designs, and implementing bugfixes and quick hotfixes as needed. Mainly using the Ember Javascript Framework, the Muse web application helps facilitate influencer relationships with brands."
                start="2018"
                end="2020"
              />
            </div>
            <div className={styles.timelineLine} style={{ height: this.state.timelineHeight }}>
              <div className={styles.line}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
