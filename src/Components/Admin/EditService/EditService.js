import React from "react";

const EditService = ({ allservices }) => {
  const deleteService = (id) => {
    fetch("http://localhost:5000/delete/" + id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((result) => alert("deleted succesfully"));
  };
  return (
    <table className="table  table-warning table-stripe">
      <thead>
        <tr>
          <th className="text-secondary text-left" scope="col">
            Sr No
          </th>
          <th className="text-secondary" scope="col">
            Name
          </th>
          <th className="text-secondary" scope="col">
            Price
          </th>
          <th className="text-secondary" scope="col">
            Manage
          </th>
        </tr>
      </thead>
      <tbody>
        {allservices.map((item, index) => (
          <tr className="table-warning table-stripe">
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
              <button
                onClick={() => deleteService(item._id)}
                type="button"
                class="btn btn-outline-warning btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EditService;
