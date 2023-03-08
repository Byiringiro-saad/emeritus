import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "@firebase/firestore";

//images
import Hero from "../assets/Hero.png";
import Loader from "../assets/loader.svg";
import Success from "../components/modals/success";

//features
import firestore from "../features/firebase";

const Application = () => {
  //local data
  const [loading, setLoading] = React.useState(false);
  const [isStudent, setIsStudent] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [isProfessional, setIsProfessional] = React.useState(false);

  //firebase database
  const store = collection(firestore, "registered_users");

  //form data
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { onChange, onBlur, name, ref } = register("profession");

  const handleProfession = (e) => {
    if (e.target.value === "student") {
      setIsStudent(true);
      setIsProfessional(false);
    } else {
      setIsStudent(false);
      setIsProfessional(true);
    }
    onChange(e);
  };

  const handleSuccess = () => {
    setShowSuccess(false);
  };

  const onSubmit = (data) => {
    setLoading(true);
    addDoc(store, data)
      .then(() => {
        setLoading(false);
        setShowSuccess(true);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return (
    <Container>
      {showSuccess && <Success close={handleSuccess} />}
      <p className="title">Application form</p>
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
        <p className="error">
          {errors?.fname?.type === "required" && "First name is required"}
          {errors?.fname?.type === "minLength" && "First name is too short"}
          {errors?.fname?.type === "maxLength" && "First name is too long"}
        </p>
        <p className="error">
          {errors?.lname?.type === "required" && "Last name is required"}
          {errors?.lname?.type === "minLength" && "Last name is too short"}
          {errors?.lname?.type === "maxLength" && "Last name is too long"}
        </p>
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
        <p className="error">
          {errors?.email?.type === "required" && "Email is required"}
          {errors?.email?.type === "pattern" && "Email is invalid"}
        </p>
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
        <p className="error">
          {errors?.location?.type === "required" && "Location is required"}
        </p>
        <div className="row">
          <select
            className={errors?.profession ? "error" : ""}
            onChange={handleProfession}
            onBlur={onBlur}
            name={name}
            ref={ref}
          >
            <option value="student">Student</option>
            <option value="professional">Professional</option>
          </select>
        </div>
        <p className="error">
          {errors?.profession?.type === "required" && "Profession is required"}
        </p>
        {isStudent && (
          <>
            <div className="row">
              <select
                className={errors?.course ? "error" : ""}
                {...register("course", {
                  required: true,
                })}
              >
                <option value="beginner">Beginner level</option>
                <option value="intermediate">Intermediate level</option>
                <option value="advanced">Advanced level</option>
                <option value="application">AI Application Dev</option>
              </select>
            </div>
            <p className="error">
              {errors?.course?.type === "required" && "Course is required"}
            </p>
          </>
        )}
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
        <p className="error">
          {errors?.phone?.type === "required" && "Phone number is required"}
          {errors?.phone?.type === "minLength" && "Phone number is too short"}
          {errors?.phone?.type === "maxLength" && "Phone number is too long"}
        </p>
        {isProfessional && (
          <>
            <div className="row">
              <input
                type="text"
                placeholder="Companny"
                className={errors?.company ? "error" : ""}
                {...register("company", {
                  required: true,
                  minLength: 3,
                  maxLength: 50,
                })}
              />
            </div>
            <p className="error">
              {errors?.company?.type === "required" && "Company is required"}
              {errors?.company?.type === "minLength" && "Company is too short"}
              {errors?.company?.type === "maxLength" && "Company is too long"}
            </p>
          </>
        )}
        {isStudent && (
          <>
            <div className="row">
              <input
                type="text"
                placeholder="Shool/College/University"
                className={errors?.school ? "error" : ""}
                {...register("school", {
                  required: true,
                  minLength: 3,
                  maxLength: 50,
                })}
              />
            </div>
            <p className="error">
              {errors?.school?.type === "required" && "School is required"}
              {errors?.school?.type === "minLength" && "School is too short"}
              {errors?.school?.type === "maxLength" && "School is too long"}
            </p>
          </>
        )}
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
        <p className="error">
          {errors?.experience?.type === "required" && "Experience is required"}
          {errors?.experience?.type === "minLength" &&
            "Experience is too short"}
          {errors?.experience?.type === "maxLength" && "Experience is too long"}
        </p>
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
        <p className="error">
          {errors?.city?.type === "required" && "City is required"}
          {errors?.city?.type === "minLength" && "City is too short"}
          {errors?.city?.type === "maxLength" && "City is too long"}
        </p>
        <div className="row">
          <p>
            By clicking the button below, you agree to receive communications
            about this programme and relevant programmes. Privacy Policy
          </p>
        </div>
        <div className="row">
          <button type="submit">
            {loading ? <img src={Loader} alt="loader" /> : "Download brochure"}
          </button>
        </div>
      </form>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 90px);
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${Hero});
  background-repeat: no-repeat;
  background-size: cover;

  p.title {
    font-size: 2em;
    font-weight: 700;
    line-height: 100px;
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
      width: 500px;
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

    p.error {
      color: red;
      line-height: 30px;
      text-align: center;
    }
  }
`;

export default Application;
