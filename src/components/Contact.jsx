import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  margin-left: 250px;
  padding: 4rem;
  background-color: #f4f4f4;
  min-height: 100vh;
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <h2 style={{marginLeft: "2rem"}}>Contact Me</h2>
      <p style={{marginLeft: "2rem"}}>Email: amanrai1105@gmail.com</p>
      <p style={{marginLeft: "2rem"}}>LinkedIn: <a href="https://www.linkedin.com/in/aman-kumar-a542381b6/">LinkedIn-Profile</a></p>
    </ContactContainer>
  );
};

export default Contact;
