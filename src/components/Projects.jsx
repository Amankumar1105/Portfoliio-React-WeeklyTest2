import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  margin-left: 250px;
  padding: 4rem;
  background-color: #f4f4f4;
  min-height: 100vh;
`;

const ProjectCard = styled.div`
  background-color: #fff;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <h2 style={{marginLeft: "2rem"}}>Projects</h2>
      <ProjectCard>
        <h3>Color Picker Chrome Extension</h3>
        <p>
          A Chrome extension that allows users to pick colors from any webpage. Built using HTML, CSS, and JavaScript.
        </p>
      </ProjectCard>
      <ProjectCard>
        <h3>Image Downloader Chrome Extension</h3>
        <p>
          A Chrome extension to download images from any webpage, built with JavaScript and CSS.
        </p>
      </ProjectCard>
    </ProjectsContainer>
  );
};

export default Projects;
