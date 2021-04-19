import React from "react";

const ServiceListDetails = ({ services }) => {
  console.log(services);
  return (
    <div>
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
              Cost
            </th>
            <th className="text-secondary" scope="col">
              To Address
            </th>
            <th className="text-secondary" scope="col">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {services.map((item, index) => (
            <tr className="table-warning table-stripe">
              <td>{index + 1}</td>
              <td>{item.servicetype.name}</td>
              <td>{item.servicetype.price}</td>
              <td>{item.servicetype.address}</td>
              <td>Pending</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceListDetails;
