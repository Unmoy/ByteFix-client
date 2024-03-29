import React, { useState } from "react";
import axios from "axios";
import "./AddService.css";
const AddService = () => {
  const [service, setService] = useState("");
  const [image, setImage] = useState(null);
  const handleImageUpload = (event) => {
    const uploadImage = new FormData();
    uploadImage.set("key", "7142aa65148ce83ee1a45db6c5c39cea");
    uploadImage.append("image", event.target.files[0]);
    axios.post("https://api.imgbb.com/1/upload", uploadImage).then((res) => {
      setImage(res.data.data.display_url);
    });
  };

  const handleBlur = (e) => {
    const serviceDetails = { ...service };
    serviceDetails[e.target.name] = e.target.value;
    setService(serviceDetails);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("imageUrl", image);
    formData.append("name", service.name);
    formData.append("price", service.price);
    formData.append("description", service.description);
    formData.append("subHeading1", service.subHeading1);
    formData.append("subDescription1", service.subDescription1);
    formData.append("subHeading2", service.subHeading2);
    formData.append("subDescription2", service.subDescription2);
    formData.append("subHeading3", service.subHeading3);
    formData.append("subDescription3", service.subDescription3);

    fetch("https://byte-fix-server.vercel.app/addService", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("submitted");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="container addService">
      <div className="row">
        <h2
          style={{
            fontFamily: "Poppins",
            textAlign: "center",
            fontSize: "36px",
            margin: "20px",
          }}
        >
          Add New Service
        </h2>
        <div className="col-md-9 mx-auto addService_form">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Service name:</label>
              <input
                onBlur={handleBlur}
                className="form-control mb-3"
                type="text"
                name="name"
                placeholder="Service name"
                aria-label="default input example"
              />
            </div>
            <div>
              <label>Service price:</label>
              <input
                onBlur={handleBlur}
                className="form-control mb-3"
                type="number"
                name="price"
                placeholder="Price"
                aria-label="default input example"
              />
            </div>
            <div>
              <label>Service Description:</label>
              <input
                onBlur={handleBlur}
                className="form-control mb-3"
                type="text"
                name="description"
                placeholder="Description"
                aria-label="default input example"
              />
            </div>
            <div>
              <label>Sub Heading:1</label>
              <input
                onBlur={handleBlur}
                className="form-control mb-3"
                type="text"
                name="subHeading1"
                placeholder="sub Heading 1"
                aria-label="default input example"
              />
            </div>
            <div>
              <label>Sub Description:1</label>
              <input
                onBlur={handleBlur}
                className="form-control mb-3"
                type="text"
                name="subDescription1"
                placeholder="sub Description 1"
                aria-label="default input example"
              />
            </div>
            <div>
              <label>Sub Heading:2</label>
              <input
                onBlur={handleBlur}
                className="form-control mb-3"
                type="text"
                name="subHeading2"
                placeholder="sub Heading 2"
                aria-label="default input example"
              />
            </div>
            <div>
              <label>Sub Description:2</label>
              <input
                onBlur={handleBlur}
                className="form-control mb-3"
                type="text"
                name="subDescription2"
                placeholder="sub Description2"
                aria-label="default input example"
              />
            </div>
            <div>
              <label>Sub Heading:3</label>
              <input
                onBlur={handleBlur}
                className="form-control mb-3"
                type="text"
                name="subHeading3"
                placeholder="sub Heading 3"
                aria-label="default input example"
              />
            </div>
            <div>
              <label>Sub Description:3</label>
              <input
                onBlur={handleBlur}
                className="form-control mb-3"
                type="text"
                name="subDescription3"
                placeholder="sub Description 3"
                aria-label="default input example"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Service Logo</label>
              <input
                onChange={handleImageUpload}
                className="form-control form-control-sm"
                type="file"
              />
            </div>
            <button type="submit" className="btn btn-outline-warning">
              Add Service
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
