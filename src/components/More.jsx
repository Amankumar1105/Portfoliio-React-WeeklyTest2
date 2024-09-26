import React from 'react';
import styled from 'styled-components';

const MoreContainer = styled.section`
  margin-left: 250px;
  padding: 4rem;
  background-color: #ffffff;
  min-height: 100vh;
`;

const More = () => {
  return (
    <MoreContainer id="more">
      <h2 style={{marginLeft: "2rem"}}>More Information</h2>
      <p style={{marginLeft: "2rem"}}>
        I am continuously learning and growing as a developer. I enjoy solving problems, collaborating with teams, and building projects that can have a positive impact.
      </p>
    </MoreContainer>
  );
};

export default More;
