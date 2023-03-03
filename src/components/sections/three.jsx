import React from "react";
import styled from "styled-components";

//images
import Students from "../../assets/Students.png";
import Professionals from "../../assets/Professinals.png";

const Three = () => {
  return (
    <Container>
      <p className="title">Who is this Program for?</p>
      <div className="content">
        <div className="column">
          <p className="header">Students</p>
          <div className="image">
            <img src={Students} alt="students" />
          </div>
          <p className="about">
            Students who are pursuing undergraduation in science, arts, computer
            applications, engineering, commerce.
          </p>
        </div>
        <div className="column">
          <p className="header">Tech Professionals</p>
          <div className="image">
            <img src={Professionals} alt="students" />
          </div>
          <p className="about">
            Tech professionals looking to transition to a Managerial role and
            effectively lead end-to-end AI projects and solve complex business
            problems
          </p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 470px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 50px 0;

  @media only screen and (min-width: 1200px) {
    width: 1200px;
  }

  @media only screen and (max-width: 1200px) {
    width: 90%;
  }

  p.para {
    width: 65%;
    text-align: center;
    font-size: 1.2em;
    margin: 20px 0 30px 0;
  }

  p.title {
    font-size: 2em;
    font-weight: 700;
    color: var(--red);
  }

  .content {
    width: 85%;
    height: 70%;
    margin: 50px 0 0 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    .column {
      width: 40%;
      height: 100%;
      display: flex;
      flex-direction: column;

      p.header {
        font-size: 1.4em;
        font-weight: 700;
        color: var(--red);
      }

      p.about {
        margin: 10px 0 0 0;
      }
    }

    p {
      font-size: 1.2em;
      margin: 0 0 20px 0;
    }
  }
`;

export default Three;
