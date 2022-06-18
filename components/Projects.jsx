import React from "react";
import styled from "styled-components";

export default function Projects() {
  return (
    <ProjectsContainer>
      <ProjectsContent>
        <ProjectsTitle>Projects</ProjectsTitle>
        <ProjectSubtitle>- List of my personal projects</ProjectSubtitle>
      </ProjectsContent>
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.section`
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #343a40;
`;

const ProjectsContent = styled.div`
  width: 100rem;
  height: 100%;
  padding: 10rem 0;
`;

const ProjectsTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 600;
  color: #f8f9fa;
  position: relative;
`;

const ProjectSubtitle = styled.p`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;