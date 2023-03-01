import React from "react";
import styled from "styled-components";

//images
import One from "../assets/One.png";
import Two from "../assets/Two.png";
import Three from "../assets/Three.png";
import Four from "../assets/Four.png";

const Sticky = () => {
  return (
    <Container>
      <div className="box ">
        <div className="icon">
          <img src={One} alt="one" />
        </div>
        <div className="para">
          <p className="title">WELCOME SESSION</p>
          <p>April 1, 2023</p>
          <p className="title">CLASSES START</p>
          <p>April 8, 2023</p>
          <p className="italic">Application Deadline: March 19, 2023</p>
        </div>
      </div>
      <div className="border"></div>
      <div className="box ">
        <div className="icon">
          <img src={Two} alt="one" />
        </div>
        <div className="para">
          <p className="title">DURATION</p>
          <p>6 months for students</p>
          <p>3 months for tech professionals</p>
          <p className="italic">Offline</p>
        </div>
      </div>
      <div className="border"></div>
      <div className="box ">
        <div className="icon">
          <img src={Three} alt="one" />
        </div>
        <div className="para">
          <p className="title">PROGRAM FEE</p>
          <p>INR 1,00,000 for students</p>
          <p>INR 1,50,000 for tech professionals </p>
          <p className="italic">Pay in multiple Instalments</p>
        </div>
      </div>
      <div className="border"></div>
      <div className="box ">
        <div className="icon">
          <img src={Four} alt="one" />
        </div>
        <div className="para">
          <p className="title">ELIGIBILITY</p>
          <p>Minimum (10+2) grade passed in any discipline</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: var(--red);

  .box {
    width: 20%;
    height: 80%;
    margin: 0 20px;
    padding: 0 0 0 20px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    .icon {
      margin: 0 10px 0 0;
    }

    .para {
      display: flex;
      flex-direction: column;

      p {
        color: var(--white);
      }

      p.title {
        font-size: 1.5em;
      }

      p.italic {
        margin: 10px 0 0 0;
        font-style: italic;
        color: var(--gray);
      }
    }
  }

  .border {
    width: 1px;
    height: 80%;
    background: var(--gray);
  }
`;

export default Sticky;
