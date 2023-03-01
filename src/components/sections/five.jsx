import React from "react";
import styled from "styled-components";

const Five = () => {
  return (
    <Container>
      <p className="title">Learning Outcomes</p>
      <div className="content">
        <div className="column">
          <p>
            Learn how to implement artificial intelligence techniques and devise
            cutting-edge solutions to real-life problems within your
            organisation
          </p>
          <p>
            Develop a comprehensive understanding of AI concepts and identify
            the best models to fit various business situations
          </p>
        </div>
        <div className="column">
          <p>
            Interact and collaborate with industry experts to understand the
            technical and business applications of AI
          </p>
          <p>
            Gain hands-on learning in identifying, defining, designing,
            implementing and monitoring AI projects
          </p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 250px;
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
    width: 80%;
    height: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;

    .column {
      width: auto;
      height: 100%;
      display: flex;
      margin: 20px 0 0 0;
      flex-direction: column;

      p {
        margin: 0 0 40px 0;
      }
    }

    p {
      font-size: 1.2em;
      margin: 0 0 20px 0;
    }
  }
`;

export default Five;
