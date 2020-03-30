import React from 'react';
import Styles from './index.module.css';
import Rahat from '../../images/rahat.png';

const About = () => {
  return (
    <main className={Styles.container}>
      <h1 className={Styles.headline}>About Us</h1>
      <p className={Styles.content}> Tech4Humans is podcast hosted by Rahat Chowdhury and Hasibul Chowdhury. (The last names are a coincedence among best friends) Tech4humans aims to be a platform to showcase the postivive impacts that tech can have on humanity. We focus on highlighting projects and individuals who are working towards making this impact.</p>
      <p className={Styles.content}>Some of our guests have done work to help marginalized people, raise awareness about mental health in tech, or share inspiring stories and help others break into the tech industry. We would love to have you on as a guest if you work in tech and are doing something postivive, you can contact us using this form if you are interested.</p>

      <div className={Styles.hostContainer} >
        <img className={Styles.hostpicture} src={Rahat} alt="Rahat Chowdhury Profile picture" />
        <div className={Styles.bio}>
          <h4 className={Styles.host} >Rahat Chowdhury</h4>
          <p className={Styles.bioContent}>
            Rahat is a second career developer who comes from a background in customer support management. In 2019 after completing a bootcamp, Rahat became a software engineer at American Express. He is a mental health advocate, live coding streamer, and rapper. Rahat currently spends some of his free time mentoring new developers, coding and making music.
          </p>
        </div>
      </div>

      <div className={Styles.hostContainer} >
        <img className={Styles.hostpicture} src={Rahat} alt="Rahat Chowdhury Profile picture" />
        <div className={Styles.bio}>
          <h4 className={Styles.host} >Hasibul Chowdhury</h4>
          <p className={Styles.bioContent}>
            Hasibul is a second career developer who comes from a background in customer support management. In 2019 after completing a bootcamp, Hasibul became a software engineer at American Express. He is a mental health advocate, live coding streamer, and rapper. Hasibul currently spends some of his free time being Rahat.
          </p>
        </div>
      </div>
    </main>
  )
};

export default About;
