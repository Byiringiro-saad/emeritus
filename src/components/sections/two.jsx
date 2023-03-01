import React from "react";
import styled from "styled-components";

const Two = () => {
  return (
    <Container>
      <p className="title">Program Overview</p>
      <div className="content">
        <p>
          Technologies driven by artificial intelligence (AI) have transformed
          industries and everyday life. The possibilities for AI applications
          are virtually unlimited and sought after in practically every industry
          segment.
        </p>
        <p>
          That's why global organisations are actively recruiting professionals
          with specialized skills and proficiencies needed to develop future AI
          technological innovations.
        </p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 30px 0;

  @media only screen and (min-width: 1200px) {
    width: 1200px;
  }

  @media only screen and (max-width: 1200px) {
    width: 90%;
  }

  p.title {
    font-size: 2em;
    font-weight: 700;
    color: var(--red);
  }

  .content {
    width: 70%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      font-size: 1.2em;
      margin: 0 0 20px 0;
    }
  }
`;

export default Two;
