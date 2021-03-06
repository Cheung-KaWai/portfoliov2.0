import React from "react";
import styled from "styled-components";
import ListLinks from "../Articles/ListLinks";
import useWindowSize from "../UI/useWindowSize";

export default function Articles({ id, articles }) {
  const [width, height] = useWindowSize();

  return (
    <ArticlesContainer width={width} id={id}>
      <ArticlesContent>
        <ArticlesTitle>Articles</ArticlesTitle>
        <Articlesubtitle>- Documenting my learning journey</Articlesubtitle>
        <ListLinks articles={articles} />
      </ArticlesContent>
    </ArticlesContainer>
  );
}

const ArticlesContainer = styled.section`
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #e9ecef;
  padding: 2rem;
`;

const ArticlesContent = styled.div`
  width: 100rem;
  height: 100%;
  padding: 10rem 0;
`;

const ArticlesTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 600;
  color: #495057;
  position: relative;
`;

const Articlesubtitle = styled.p`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;
