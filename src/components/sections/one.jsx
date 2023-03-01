import React from "react";
import styled from "styled-components";

const One = () => {
  return (
    <Container>
      <p className="title">Why Learn Artificial Intelligence?</p>
      <div className="content">
        <div className="box">
          <p className="title">40.2%</p>
          <p>
            The global AI market is predicted to expand at a CAGR of 40.2% from
            2021 to 2028.
          </p>
          <p className="grayish">(Grandview Research)</p>
        </div>
        <div className="border"></div>
        <div className="box">
          <p className="title">98%</p>
          <p>
            Almost 98% of analytics jobs advertised in India are full-time,
            signifying the strengthening of the Indian analytics hiring market
          </p>
          <p className="grayish">(Analytics India Magazine, 2020)</p>
        </div>
        <div className="border"></div>
        <div className="box">
          <p className="title">₹25 to ₹65 lakh</p>
          <p>
            Data science professionals with 3-10 years of experience get annual
            salaries in the range of ₹25 lakh to ₹65 lakh. More experienced
            people can command annual salaries upwards of ₹1 crore.
          </p>
          <p className="grayish">
            (Talent Trends Report 2021 by Michael Page India, 2021)
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

  p {
    font-size: 1.2em;
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

    .border {
      width: 1px;
      height: 100%;
      margin: 0 25px;
      background: var(--grayish);
    }

    .box {
      width: 350px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      p.title {
        line-height: 50px;
      }

      p {
        text-align: center;
      }

      p.grayish {
        margin: 10px 0 0 0;
        text-transform: uppercase;
        color: var(--grayish);
      }
    }
  }
`;

export default One;
