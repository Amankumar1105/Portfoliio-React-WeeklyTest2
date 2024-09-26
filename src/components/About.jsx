import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  margin-left: 250px;
  padding: 4rem;
  background-color: #f4f4f4;
  min-height: 100vh;
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <h2 style={{marginLeft: "2rem"}}>About Me</h2>
      <p style={{marginLeft: "2rem"}}>
        I am a full stack developer with expertise in HTML, CSS, JavaScript, React, Node.js, PHP, Laravel, Tailwind, MySQL, and data structures. I am passionate about development and am actively seeking opportunities to showcase my skills.
      </p>
    </AboutContainer>
  );
};

export default About;
