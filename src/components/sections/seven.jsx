import React from "react";
import styled from "styled-components";

//images
import Anup from "../../assets/Anup.png";
import Vaibhav from "../../assets/Vaibhav.png";
import VOne from "../../assets/VOne.png";
import VTwo from "../../assets/VTwo.png";
import VThree from "../../assets/VThree.png";
import VFour from "../../assets/VFour.png";

const Seven = () => {
  return (
    <Container>
      <p className="title">Program Mentors</p>
      <div className="content">
        <div className="column">
          <div className="top">
            <img src={Vaibhav} alt="vaibhav" className="profile" />
            <div className="universities">
              <div className="small">
                <img src={VOne} alt="one" />
                <p>IIT Madras Alumni</p>
              </div>
              <div className="small">
                <img src={VTwo} alt="one" />
                <p>Nasscom Deeptech club mentor</p>
              </div>
            </div>
          </div>
          <p className="name">Vaibhav Goyal</p>
          <div className="down">
            <p>
              An technology leader with 19+ years of experience in building deep
              tech businesses & products with high performance teams and
              managing enterprise customers & startups. Specialises in dealing
              with AI, SaaS, Enterprise & complex digital products
            </p>
          </div>
        </div>
        <div className="column">
          <div className="top">
            <img src={Anup} alt="Anup" className="profile" />
            <div className="universities">
              <div className="small">
                <img src={VThree} alt="one" />
                <p>Ex-Scholar at Northwestern University</p>
              </div>
              <div className="small">
                <img src={VFour} alt="one" />
                <p>Ex-Scholar at Cornell University</p>
              </div>
            </div>
          </div>
          <p className="name">Anup Sawant</p>
          <div className="down">
            <p>
              16yrs+ of experience in architecting and developing intelligent
              applications. Worked with several US & India clients in financial
              services, healthcare, automotive etc. Expertise in complex model
              development (using NLP, Computer vision, Multimodal) MLOps & data
              centric AI
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 30px 0;

  @media only screen and (min-width: 1200px) {
    width: 1200px;
  }

  @media only screen and (max-width: 1024px) {
    height: 650px;
    width: 95%;
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
    flex-flow: row-reverse;

    @media only screen and (max-width: 1024px) {
      align-items: flex-start;
    }

    .column {
      width: auto;
      height: auto;
      padding: 20px;
      margin: 0 10px;
      border-radius: 5px;
      background: var(--gray);

      .top {
        width: 100%;
        height: 45%;
        display: flex;
        flex-direction: row;

        @media only screen and (max-width: 1024px) {
          flex-direction: column;
        }

        img.profile {
          margin: 0 10px 0 0;

          @media only screen and (max-width: 1024px) {
            width: 120px;
            margin: 0 0 20px 0;
          }
        }

        .universities {
          width: 50%;
          display: flex;
          flex-direction: column;

          @media only screen and (max-width: 1024px) {
            width: 100%;
          }

          .small {
            width: 100%;
            height: 50%;
            display: flex;
            flex-direction: row;
            align-items: center;

            @media only screen and (max-width: 1024px) {
              margin: 0 0 15px 0;
            }

            p {
              font-size: 1.2em;
              margin: 0 0 0 10px;
            }

            img {
              width: 46px;
              height: 37px;
            }
          }
        }
      }

      p.name {
        font-size: 1.3em;
        font-weight: 700;
        margin: 20px 0 10px 0;
      }

      .down {
        width: 100%;
        height: auto;
        margin: 20px 0 0 0;

        p {
          font-size: 1.2em;
        }
      }
    }
  }
`;

export default Seven;
