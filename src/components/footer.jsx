import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();

  const goToApplication = () => {
    navigate("/application");
  };

  return (
    <Container>
      <div className="content">
        <p className="title">
          Early applications encouraged. Limited seats are available.
        </p>
        <div className="down">
          <p className="down-title">Application Deadline</p>
          <p>Last Date: March 19, 2023</p>
          <button onClick={goToApplication}>Start application now</button>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--red);

  .content {
    height: 90%;
    display: flex;
    padding: 20px 0;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media only screen and (min-width: 1200px) {
      width: 1200px;
    }

    @media only screen and (max-width: 1024px) {
      width: 95%;
    }

    p.title {
      font-size: 1.5em;
      font-weight: 700;
      color: var(--white);
      text-align: center;
    }

    .down {
      width: 100%;
      height: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      p.down-title {
        font-size: 1.3em;
        font-weight: 700;
        color: var(--white);
      }

      p {
        font-size: 1.2em;
        color: var(--white);
      }

      button {
        width: 20%;
        height: 50px;
        border: none;
        border-radius: 5px;
        background: var(--white);
        color: var(--red);
        font-size: 1.2em;
        cursor: pointer;

        @media only screen and (max-width: 768px) {
          width: 70%;
        }
      }
    }
  }
`;

export default Footer;
