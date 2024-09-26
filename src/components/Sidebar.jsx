import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #333;
  color: white;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PersonalDetails = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Name = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const JobTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #ccc;
`;

const SectionLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  margin: 1rem 0;
  cursor: pointer;

  &:hover {
    color: #ddd;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <PersonalDetails>
        <Name>Aman Kumar</Name>
        <JobTitle>Full Stack Developer</JobTitle>
      </PersonalDetails>
      <SectionLinks>
        <Link href="#about">About</Link>
        <Link href="#certificates">Certificates</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#more">More</Link>
        <Link href="#contact">Contact</Link>
      </SectionLinks>
    </SidebarContainer>
  );
};

export default Sidebar;
