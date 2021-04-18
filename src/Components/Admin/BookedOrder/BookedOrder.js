import React from "react";

const BookedOrder = ({ orders }) => {
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
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr className="table-warning table-stripe">
            <td>{index + 1}</td>
            <td>{order.servicetype.name}</td>
            <td>{order.servicetype.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookedOrder;
