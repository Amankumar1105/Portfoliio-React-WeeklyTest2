import React from 'react';
import styled from 'styled-components';

const CertificatesContainer = styled.section`
  margin-left: 250px;
  padding: 4rem;
  background-color: #ffffff;
  min-height: 100vh;
`;

const Certificates = () => {
  return (
    <CertificatesContainer id="certificates">
      <h2 style={{marginLeft: "2rem"}}>Certificates</h2>
      <ul>
        <li>Full Stack Web Development - Geekster</li>
        <li>JavaScript Data Structures and Algorithms - Geekster, FreeCodeCamp</li>
        <li>React Advanced Concepts - Geekster</li>
        <li>Data Structures And Algorithms - Geekster, Hacker Rank, Leetcode</li>
        <li>MySQL - Geekster</li>
      </ul>
    </CertificatesContainer>
  );
};

export default Certificates;
