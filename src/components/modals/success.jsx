import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

//images
import success from "../../assets/success.png";

const Success = ({ close }) => {
  return ReactDOM.createPortal(
    <Container>
      <div className="content">
        <img src={success} alt="email sent" />
        <p className="para">Thanks for applying to our program</p>
      </div>
      <div className="background" onClick={() => close()}></div>
    </Container>,
    document.getElementById("modal")
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .content {
    width: auto;
    height: auto;
    z-index: 100;
    padding: 100px 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    background: var(--white);

    img {
      width: 300px;
      margin: 0 0 40px 0;
    }

    p.para {
      font-size: 1.5em;
    }
  }

  .background {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #00000081;
  }
`;

export default Success;
