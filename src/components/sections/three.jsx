import React from "react";
import styled from "styled-components";

const Three = () => {
  return (
    <Container>
      <p className="title">Who is this Program for?</p>
      <div className="content">
        <p>
          <span>Students</span> who are pursuing undergraduation in science,
          arts, computer applications, engineering, commerce.
        </p>
        <p>
          <span>Tech professionals</span> looking to transition to a Managerial
          role and effectively lead end-to-end DS, ML & AI projects and solve
          complex business problems
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

      span {
        font-weight: 800;
      }
    }
  }
`;

export default Three;
