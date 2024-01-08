import React from "react";
import "./BookedOrder.css";

const BookedOrder = ({ orders }) => {
  const handleSelectValue = (e, id) => {
    const value = e.target.value;
    fetch(`https://byte-fix-server.vercel.app/updateStatus/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value }),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Updated Successfully");
      });
    e.preventDefault();
  };
  return (
    <table className="table">
      <thead className="thead-primary">
        <tr>
          <th>Sr No</th>
          <th>Name</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr key={index}>
            <th scope="row" className="text-center scope">
              {index + 1}
            </th>
            <td>{order.servicetype.name}</td>
            <td>{order.servicetype.price}</td>
            <td>
              <form>
                <select
                  className="form-select"
                  onChange={(e) => handleSelectValue(e, order._id)}
                >
                  <option value={order.process}>{order.process}</option>
                  <option value="OnGoing">OnGoing</option>
                  <option value="Arrived">Arrived</option>
                </select>
              </form>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookedOrder;
