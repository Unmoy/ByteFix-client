import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../../Orders/Sidebar/Sidebar";

const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();
  const [admin, setAdmin] = useState({});

  const onSubmit = (data) => {
    console.log(data);

    fetch("https://cryptic-shelf-29443.herokuapp.com/addadmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="row">
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-5 mt-3 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <input className="form-control" {...register("adminemail")} />
          <button type="submit" class="btn btn-outline-warning btn-sm mt-3">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
