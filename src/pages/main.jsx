import React from "react";
import styled from "styled-components";

//images
import Hero from "../assets/Hero.png";

//components
import Sticky from "../components/sticky";
import One from "../components/sections/one";
import Two from "../components/sections/two";
import Four from "../components/sections/four";
import Three from "../components/sections/three";
import Five from "../components/sections/five";
import Six from "../components/sections/six";
import Seven from "../components/sections/seven";
import Eight from "../components/sections/eight";
import Footer from "../components/footer";

const Main = () => {
  return (
    <Container hero={Hero}>
      <div className="hero">
        <div className="one">
          <div className="header">
            <p>
              Hands-on Artificial intelligence program for <br /> students and
              tech professionals
            </p>
          </div>
          <form action="#">
            <div className="row">
              <div className="chunk">
                <input type="text" placeholder="First Name" />
              </div>
              <div className="chunk">
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="row">
              <input type="text" placeholder="Email" />
            </div>
            <div className="row">
              <select>
                <option value="India">India</option>
              </select>
            </div>
            <div className="row">
              <input type="tel" placeholder="Phone No." />
            </div>
            <div className="row">
              <input type="text" placeholder="Work Experience" />
            </div>
            <div className="row">
              <input type="text" placeholder="City" />
            </div>
            <div className="row">
              <p>
                By clicking the button below, you agree to receive
                communications about this programme and relevant programmes.
                Privacy Policy
              </p>
            </div>
            <div className="row">
              <button>Download brochure</button>
            </div>
          </form>
        </div>
      </div>
      <div className="some">
        <p>Early bird discounts available. Book your seat now!</p>
      </div>
      <div className="sticky">
        <Sticky />
      </div>
      <div className="sections">
        <One />
        <Three />
        <div className="gray">
          <Four />
        </div>
        <Six />
        <Seven />
        <div className="gray">
          <Eight />
        </div>
      </div>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .one {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media only screen and (min-width: 1200px) {
      width: 1200px;
    }

    @media only screen and (max-width: 1200px) {
      width: 90%;
    }
  }

  .hero {
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 0;
    background: url(${Hero});
    background-repeat: no-repeat;
    background-size: cover;

    .header {
      width: auto;
      height: 110px;
      padding: 20px;
      border-radius: 5px;
      align-self: flex-end;
      background: #00000076;

      p {
        font-size: 2em;
        font-weight: 700;
        color: var(--white);
      }
    }

    form {
      width: auto;
      height: auto;
      padding: 20px;
      border-radius: 5px;
      background: var(--white);

      .row {
        width: 450px;
        height: auto;
        margin: 0 0 15px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        input,
        select,
        button {
          width: 100%;
          height: 45px;
          padding: 0 10px;
          border-radius: 5px;
          border: 1px solid var(--black);
        }

        button {
          background: var(--black);
          color: var(--white);
          text-transform: uppercase;
        }

        .chunk {
          width: 48%;
          height: 100%;
          display: flex;
          flex-direction: row;
        }
      }
    }
  }

  .some {
    width: 100%;
    height: 50px;
    background: var(--yellow);
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: 1.2em;
      color: var(--white);
    }
  }

  .sticky {
    width: 100%;
    height: auto;
    position: sticky;
    top: 0;
  }

  .sections {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .gray {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: var(--gray);
    }
  }
`;

export default Main;
