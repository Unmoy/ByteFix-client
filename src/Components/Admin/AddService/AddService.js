import React from "react";
import { useState } from "react";
import Sidebar from "../../Orders/Sidebar/Sidebar";

const AddService = () => {
  const [service, setService] = useState("");
  const [file, setFile] = useState(null);

  const handleBlur = (e) => {
    const serviceDetails = { ...service };
    serviceDetails[e.target.name] = e.target.value;
    setService(serviceDetails);
  };
  const handleChange = (e) => {
    const serviceImage = e.target.files[0];
    setFile(serviceImage);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", service.name);
    formData.append("price", service.price);

    fetch("https://cryptic-shelf-29443.herokuapp.com/addService", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="row">
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-6 mx-auto">
        <form onSubmit={handleSubmit}>
          <label>Service name:</label>
          <input
            onBlur={handleBlur}
            class="form-control mb-3"
            type="text"
            name="name"
            placeholder="Service name"
            aria-label="default input example"
          />
          <label>Service price:</label>
          <input
            onBlur={handleBlur}
            class="form-control mb-3"
            type="text"
            name="price"
            placeholder="Price"
            aria-label="default input example"
          />
          <div class="mb-3">
            <label for="formFileSm" class="form-label">
              Service Image
            </label>
            <input
              onChange={handleChange}
              class="form-control form-control-sm"
              name="file"
              id="formFileSm"
              type="file"
            />
          </div>
          <button type="submit" class="btn btn-outline-warning">
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
