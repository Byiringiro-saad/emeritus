import React from "react";
import styled from "styled-components";

//images
import First from "../../assets/First.png";
import Second from "../../assets/Second.png";
import Third from "../../assets/Third.png";
import Fourth from "../../assets/Fourth.png";

const Four = () => {
  return (
    <Container>
      <p className="title">Program Highlights</p>
      <div className="content">
        <div className="box">
          <img src={First} alt="first" />
          <p>
            Live Classes <br /> + Offline content
          </p>
        </div>
        <div className="box">
          <img src={Second} alt="first" />
          <p>
            Live Project <br /> + Assignments
          </p>
        </div>
        <div className="box">
          <img src={Third} alt="first" />
          <p>
            4 weeks of <br /> Capstone Project
          </p>
        </div>
        <div className="box">
          <img src={Fourth} alt="first" />
          <p>
            10+ Office Hours <br /> with Industry Experts
          </p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 300px;
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
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .box {
      width: 280px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      p {
        text-align: center;
        margin: 20px 0 0 0;
        font-size: 1.2em;
      }
    }
  }
`;

export default Four;
