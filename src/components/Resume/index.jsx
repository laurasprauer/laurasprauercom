import React from 'react';
import PropTypes from 'prop-types';

// import styles
import styles from './styles.module.scss';

import Job from '../Job';
import DownloadResume from '../DownloadResume';

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
    // add darkMode class if darkMode is true
    let containerClasses = `${styles.container}`;
    if (this.props.darkMode) {
      containerClasses = `${styles.container} ${styles.darkMode}`;
    }
    return (
      <div className={containerClasses}>
        <div className={styles.wrapper}>
          <h1>Laura Sprauer</h1>
          <h2>
            Resume
            <DownloadResume darkMode={this.props.darkMode} />
          </h2>

          <div className={styles.timelineContainer}>
            <div id="timeline-content" className={styles.timelineContent}>
              <Job
                darkMode={this.props.darkMode}
                jobTitle="Lead Front End Engineer"
                companyName="Quotient"
                companyLink="https://www.quotient.com/"
                jobDescription="I was promoted to Lead Front End Engineer in the spring of 2020, about 2 years after the Quotient Technology acquisition of Ahalogy. In addition to my previous responsibilities as a JavaScript Developer on the Ahalogy Muse Product team - I’m now the leader of the Cincinnati Product Media front end codebases, and a mentor for new employees. While still maintaining our older <a href='https://emberjs.com/' target='_blank' rel='noopener noreferrer'>Ember</a> codebases, now I’m also contributing to other Quotient products - many of which utilize the <a href='https://angular.io/' target='_blank' rel='noopener noreferrer'>Angular</a> Javascript framework."
                start="2020"
                end="Present"
              />
              <Job
                darkMode={this.props.darkMode}
                jobTitle="JavaScript Developer"
                companyName="Ahalogy"
                companyLink="https://www.ahalogy.com/"
                jobDescription="As a Front End Engineer on the Ahalogy Muse Product team my responsibilities included building new features for both internal and external users based on provided UI designs, and implementing bug fixes and quick hotfixes as needed. Mainly using the <a href='https://emberjs.com/' target='_blank' rel='noopener noreferrer'>Ember</a> Javascript Framework, the Muse web application helps facilitate influencer relationships with brands. <br><br>In the summer of 2018, Ahalogy was acquired by Quotient Technology."
                start="2018"
                end="2020"
              />
              <Job
                darkMode={this.props.darkMode}
                jobTitle="Web Application Developer"
                companyName="Thriveplan"
                companyLink="null"
                jobDescription="Tasked with development of the StorySimple web application. Responsibilities included building new features using the <a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'>React</a> JavaScript library, assisting in deployment of new releases, implementing bug fixes as needed, interviewing users about the StorySimple application to gather insight, collaborating with the development team on process improvement, and designing and programming an interactive user interface."
                start="2017"
                end="2018"
              />
              <Job
                darkMode={this.props.darkMode}
                jobTitle="Interactive Designer"
                companyName="DonorDrive"
                companyLink="https://www.donordrive.com/"
                jobDescription="Responsible for turning creative briefs into compelling interactive experiences for a range of non-profit and for-profit clients. As an interactive designer for Global Cloud (now DonorDrive) I built new websites using the <a href='https://www.murasoftware.com/' target='_blank' rel='noopener noreferrer'>Mura CMS</a> and <a href='https://coldfusion.adobe.com/' target='_blank' rel='noopener noreferrer'>ColdFusion</a>, implemented bug fixes as needed on existing websites, collaborated with the design team on interactive user interfaces, and spoke with customers about their technology needs. Working with clients such as <a href='https://www.kroger.com/' target='_blank' rel='noopener noreferrer'>Kroger</a>, <a href='https://winefestival.com/' target='_blank' rel='noopener noreferrer'>Cincinnati Wine Festival</a>, and the <a href='https://www.somethingextra.org/' target='_blank' rel='noopener noreferrer'>Down Syndrome Association of Middle Tennessee</a>."
                start="2016"
                end="2017"
              />
              <Job
                darkMode={this.props.darkMode}
                jobTitle="Interactive Designer"
                companyName="HyperDrive"
                companyLink="https://hyperdrivei.com/"
                jobDescription="Tasked with design and development of digital marketing components. Responsibilities include designing and building marketing emails and websites, collaborating with the design team on interactive user interfaces, and creating marketing graphics and video animations to be shared on social media. Working with clients such as <a href='https://www.sysco.com/' target='_blank' rel='noopener noreferrer'>Sysco Corporation</a>, <a href='https://www.advancepierre.com/' target='_blank' rel='noopener noreferrer'>Advance Pierre Foods</a>, and <a href='https://www.larosas.com/' target='_blank' rel='noopener noreferrer'>Larosa’s Family Pizzeria</a>."
                start="2014"
                end="2016"
              />
              <Job
                darkMode={this.props.darkMode}
                jobTitle="Education"
                companyName="Bowling Green State University"
                companyLink="https://www.bgsu.edu/"
                jobDescription="Bachelor of Fine Arts (BFA), Digital Art <br> Minor in Computer Science <br><br>Activities and Societies: <a href='https://bgsu.siggraph.org/' target='_blank' rel='noopener noreferrer'>Computer Art Club: SIGGRAPH Chapter</a>, <a href='https://www.bgsu.edu/learning-and-theme-communities/arts-village.html' target='_blank' rel='noopener noreferrer'>Arts Village</a>, <a href='https://www.bgsu.edu/news/2014/06/murals-brighten-toledo-communities.html' target='_blank' rel='noopener noreferrer'>Toledo Old South End Mural Project</a>, <a href='https://www.bgsu.edu/news/2018/09/last-in-a-series-trip-to-navajo-nation-changes-students-lives.html' target='_blank' rel='noopener noreferrer'>Navajo Nation Cultural Immersion Experience</a>"
                start="2010"
                end="2013"
              />
            </div>
            <div className={styles.timelineLine} style={{ height: this.state.timelineHeight }}>
              <div className={styles.line}/>
            </div>
          </div>

          <div className={styles.skills}>
            <div className={styles.skillsTitle}>Known Technologies</div>
            <div id="known-technologies" className={styles.skillsDescription}>
              <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>,&ensp;
              <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">Redux</a>,&ensp;
              <a href="https://angular.io/" target="_blank" rel="noopener noreferrer">Angular</a>,&ensp;
              <a href="https://emberjs.com/" target="_blank" rel="noopener noreferrer">Ember</a>,&ensp;
              Javascript,&ensp;CSS/SCSS,&ensp;HTML,&ensp;SVG,&ensp;Web Animation,&ensp;
              <a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">Webpack</a>,&ensp;
              JSON,&ensp;
              <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js</a>,&ensp;
              GIT,&ensp;
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Github</a>,&ensp;
              Linters,&ensp;
              <a href="https://jquery.com/" target="_blank" rel="noopener noreferrer">JQuery</a>,&ensp;
              <a href="https://wordpress.com/" target="_blank" rel="noopener noreferrer">Wordpress</a>,&ensp;
              <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">Firebase</a>,&ensp;
              <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">AWS</a>,&ensp;
              <a href="https://www.heroku.com/" target="_blank" rel="noopener noreferrer">Heroku</a>,&ensp;
              <a href="https://www.serverless.com/" target="_blank" rel="noopener noreferrer">Serverless</a>,&ensp;
              <a href="https://www.atlassian.com/software/jira" target="_blank" rel="noopener noreferrer">JIRA</a>,&ensp;
              Kanban,&ensp;Agile Methodology,&ensp;
              <a href="https://www.php.net/" target="_blank" rel="noopener noreferrer">PHP</a>,&ensp;
              <a href="https://coldfusion.adobe.com/" target="_blank" rel="noopener noreferrer">ColdFusion</a>,&ensp;
              <a href="https://www.murasoftware.com/" target="_blank" rel="noopener noreferrer">Mura CMS</a>,&ensp;
              Email Development,&ensp;
              <a href="https://www.sketch.com/" target="_blank" rel="noopener noreferrer">Sketch</a>,&ensp;
              <a href="https://www.adobe.com/products/illustrator.html" target="_blank" rel="noopener noreferrer">Adobe Illustrator</a>,&ensp;
              <a href="https://www.adobe.com/products/photoshop.html" target="_blank" rel="noopener noreferrer">Adobe Photoshop</a>,&ensp;
              <a href="https://www.invisionapp.com/" target="_blank" rel="noopener noreferrer">Invision</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Resume.propTypes = {
  darkMode: PropTypes.string.isRequired,
};
