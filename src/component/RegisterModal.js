import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    username: yup.string().required("* username is required"),
    password: yup
      .string()
      .required("* email is required")
      .min(8, "* password should be atleast 8 digits"),
    email: yup.string().email("* email must be valid"),
  })
  .required();

const RegisterModal = ({ setIsOpen, modalIsOpen }) => {
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      overflowX: "hidden",
    },
  };

  const defaultValues = {
    username: "",
    password: "",
    email: "",
  };

  const onSubmit = (data) => {
    console.log("dattu", data);
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
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modalWrap">
          <div className="log">
            <img src="./images/logo--Gaggle.svg" alt="" />
          </div>
          <div className="modalForm">
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
                type="email"
                {...register("email")}
                placeholder="Email"
                style={{ marginBottom: "20px" }}
              />
              <p>{errors.password?.email}</p>

              <div className="registerbtn">
                <span onClick={() => setIsOpen(false)}>Cancle</span>
                <input type="submit" value="Register Account" />
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RegisterModal;
