import React from "react";
import "./EditService.css";
const EditService = ({ allservices }) => {
  const deleteService = (id) => {
    fetch("https://byte-fix-server.vercel.app/delete/" + id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((result) => alert("Deleted"));
  };
  return (
    <table className="table">
      <thead className="thead-primary">
        <tr>
          <th>Sr No</th>
          <th>Name</th>
          <th>Price</th>
          <th>Manage</th>
        </tr>
      </thead>
      <tbody>
        {allservices.map((item, index) => (
          <tr>
            <th scope="row" className="text-center scope">
              {index + 1}
            </th>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
              <button
                onClick={() => deleteService(item._id)}
                className="delete_btn"
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EditService;
