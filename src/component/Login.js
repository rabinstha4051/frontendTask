import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PlacementImg from "./PlacementImg";
import RegisterModal from "./RegisterModal";
import { Navigate, useNavigate } from "react-router-dom";

const schema = yup
  .object({
    username: yup.string().required("* username is required"),
    password: yup
      .string()
      .required("* password is required")
      .min(8, "* password should be atleast 8 digits"),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();
  const defaultValues = {
    username: "",
    password: "",
    remember: false,
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = (data) => {
    console.log("dattu", data);
    navigate("/home");
  };

  // modal workout
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="login">
          <div className="logo">
            <img src="./images/logo--Gaggle.svg" alt="" />
          </div>
          <div className="loginForm">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input {...register("username")} placeholder="Username " />
              <p>{errors.username?.message}</p>
              <input
                type="text"
                {...register("password")}
                placeholder="Password "
              />
              <p>{errors.password?.message}</p>
              <input
                style={{ width: "15px" }}
                type="checkbox"
                {...register("remember")}
                id="r1"
              />
              <label for="r1">Remember me</label>
              <div className=" btn">
                <button type="submit">Sign On</button>
              </div>
            </form>
          </div>

          <div className="register">
            <p
              style={{ borderRight: "1px solid #000", paddingRight: "20px" }}
              onClick={() => setIsOpen("true")}
            >
              Register
            </p>
            <p>Forgot Password?</p>
          </div>
        </div>
        <PlacementImg />
      </div>
      <RegisterModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Login;
