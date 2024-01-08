import React from "react";
import { useForm } from "react-hook-form";
import "./MakeAdmin.css";
const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch("https://byte-fix-server.vercel.app/addadmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div className="makeAdmin_content">
            <h2>Add a new Admin</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="makeAdmin_form">
              <input
                type="text"
                className="makeAdmin_input"
                {...register("adminemail")}
                placeholder="Enter Email Address"
              />
              <button type="submit">Add Admin</button>
            </form>
            <p>Please enter a valid email address</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
