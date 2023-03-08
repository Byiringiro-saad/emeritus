import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "@firebase/firestore";

//images
import Loader from "../assets/loader.svg";
import Hero from "../assets/background.jpg";

//features
import firestore from "../features/firebase";

//components
import Sticky from "../components/sticky";
import Footer from "../components/footer";
import One from "../components/sections/one";
import Six from "../components/sections/six";
import Four from "../components/sections/four";
import Three from "../components/sections/three";
import Seven from "../components/sections/seven";
import Eight from "../components/sections/eight";
import Brochure from "../components/modals/brochure";

const Main = () => {
  //local data
  const [loading, setLoading] = React.useState(false);
  const [showEmail, setShowEmail] = React.useState(false);

  //firebase database
  const ref = collection(firestore, "information_seekers");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    addDoc(ref, data)
      .then(() => {
        setLoading(false);
        setShowEmail(true);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  const handleShowEmail = () => {
    setShowEmail(false);
  };

  return (
    <Container hero={Hero}>
      {showEmail && <Brochure close={handleShowEmail} />}
      <div className="hero">
        <div className="one">
          <div className="header">
            <p>
              Hands-on Artificial intelligence program for students and tech
              professionals
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="chunk">
                <input
                  type="text"
                  placeholder="First Name"
                  className={errors?.fname ? "error" : ""}
                  {...register("fname", {
                    required: true,
                    minLength: 3,
                    maxLength: 20,
                  })}
                />
              </div>
              <div className="chunk">
                <input
                  type="text"
                  placeholder="Last Name"
                  className={errors?.lname ? "error" : ""}
                  {...register("lname", {
                    required: true,
                    minLength: 3,
                    maxLength: 20,
                  })}
                />
              </div>
            </div>
            <div className="row">
              <input
                type="text"
                placeholder="Email"
                className={errors?.email ? "error" : ""}
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
            </div>
            <div className="row">
              <select
                className={errors?.location ? "error" : ""}
                {...register("location", {
                  required: true,
                })}
              >
                <option value="India">India</option>
              </select>
            </div>
            <div className="row">
              <input
                type="tel"
                placeholder="Phone No."
                className={errors?.phone ? "error" : ""}
                {...register("phone", {
                  required: true,
                  minLength: 10,
                  maxLength: 13,
                })}
              />
            </div>
            <div className="row">
              <input
                type="text"
                placeholder="Work Experience"
                className={errors?.experience ? "error" : ""}
                {...register("experience", {
                  required: true,
                  minLength: 1,
                  maxLength: 2,
                })}
              />
            </div>
            <div className="row">
              <input
                type="text"
                placeholder="City"
                className={errors?.city ? "error" : ""}
                {...register("city", {
                  required: true,
                  minLength: 3,
                  maxLength: 20,
                })}
              />
            </div>
            <div className="row">
              <p>
                By clicking the button below, you agree to receive
                communications about this programme and relevant programmes.
                Privacy Policy
              </p>
            </div>
            <div className="row">
              <button type="submit">
                {loading ? (
                  <img src={Loader} alt="loader" />
                ) : (
                  "Download brochure"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="some">
        <p>Early bird discounts available. Book your seat now!</p>{" "}
        <Link to="/application">Apply now</Link>
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

    @media only screen and (max-width: 1024px) {
      width: 95%;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }
  }

  .hero {
    width: 100%;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 0;
    background: url(${Hero});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    @media only screen and (max-width: 1024px) {
      width: 100%;
      height: 700px;
    }

    @media only screen and (max-width: 768px) {
      width: 100%;
      height: 750px;
    }

    @media only screen and (max-width: 480px) {
      height: 800px;
    }

    .header {
      width: auto;
      height: 110px;
      padding: 20px;
      margin: 0 15px 0 0;
      border-radius: 5px;
      align-self: flex-end;
      background: #00000076;

      @media only screen and (max-width: 1024px) {
        width: auto;
        height: auto;
        align-self: center;
        text-align: center;
        margin: 0;
      }

      p {
        font-size: 2em;
        font-weight: 700;
        color: var(--white);

        @media only screen and (max-width: 480px) {
          text-align: center;
        }
      }
    }

    form {
      width: auto;
      height: auto;
      padding: 20px;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      background: var(--white);

      .row {
        width: 450px;
        height: auto;
        margin: 0 0 15px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        @media only screen and (max-width: 1024px) {
          width: 550px;
        }

        @media only screen and (max-width: 768px) {
          width: 450px;
        }

        @media only screen and (max-width: 480px) {
          width: 350px;
        }

        input,
        select,
        button {
          width: 100%;
          height: 45px;
          padding: 0 10px;
          border-radius: 5px;
          border: 1px solid var(--black);
        }

        .error {
          border: none;
          border: 1px solid red;
        }

        button {
          background: var(--red);
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          text-transform: uppercase;

          img {
            width: 70px;
          }
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

    a {
      font-size: 1.2em;
      font-weight: 700;
      color: var(--white);
      margin: 0 0 0 10px;
    }
  }

  .sticky {
    width: 100%;
    height: auto;
    position: sticky;
    top: 0;

    @media only screen and (max-width: 1024px) {
      position: relative;
    }
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
