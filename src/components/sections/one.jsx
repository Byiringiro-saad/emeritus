import React from "react";
import styled from "styled-components";

const One = () => {
  return (
    <Container>
      <p className="title">Program Charter</p>
      <p className="para">
        Develop AI technical skillsets amongst young and working population to
        help them with employment opportunities & enhance their current set of
        skills
      </p>
      <p className="title">Program Outcomes</p>
      <div className="content">
        <div className="column">
          <div className="box">
            <div className="bullet"></div>
            <p>
              Learn how to implement artificial intelligence techniques and
              devise cutting-edge solutions to real-life problems within your
              organisation
            </p>
          </div>
          <div className="box">
            <div className="bullet"></div>
            <p>
              Develop a comprehensive understanding of AI concepts and identify
              the best models to fit various business situations
            </p>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <div className="bullet"></div>
            <p>
              Interact and collaborate with industry experts to understand the
              technical and business applications of AI
            </p>
          </div>
          <div className="box">
            <div className="bullet"></div>
            <p>
              Gain hands-on learning in identifying, defining, designing,
              implementing and monitoring AI projects
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 60px 0 50px 0;

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
    line-height: 70px;
    color: var(--red);
  }

  .content {
    width: 85%;
    height: 70%;
    margin: 30px 0 0 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .column {
      width: 40%;
      height: 100%;
      display: flex;
      margin: 20px 40px 0 0;
      flex-direction: column;

      .box {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        margin: 0 0 40px 0;

        .bullet {
          width: 10px;
          height: 10px;
          padding: 5px 5px;
          margin: 0 10px 0 0;
          border-radius: 50%;
          background: var(--red);
        }

        p {
          margin: -5px 0 0 0;
        }
      }
    }

    p {
      font-size: 1.2em;
      margin: 0 0 20px 0;
    }
  }
`;

export default One;
